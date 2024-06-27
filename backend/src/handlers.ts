import { Request, Response } from 'express';
import pool from './database/pool';
import { hashPassword, comparePasswords, createJWT } from './auth';

export const addUser = async (req: Request, res: Response) => {
  const { name, email, password, salary, func, gender } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await pool.query(
      'INSERT INTO users (name, email, salary, func, gender, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, email, salary, func, gender, hashedPassword]
    );

    const user = newUser.rows[0];
    const token = createJWT({
      id: user.id, email: user.email,
      func: ''
    });
    res.json({ user, token });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server Error');
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValidPassword = await comparePasswords(password, user.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = createJWT({ id: user.id, email: user.email, func: user.func });
    res.json({ token, user });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server Error');
  }
};

export const getUsersByFunction = async (req: Request, res: Response) => {
  const { func } = req.query;
  
  try {
    const result = await pool.query('SELECT * FROM users WHERE func = $1', [func]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteAllUsersExceptOne = async (req: Request, res: Response) => {
  try {
    const deleteQuery = 'DELETE FROM users WHERE id != $1';
    await pool.query(deleteQuery, [34]);
    res.status(200).json({ message: 'All users except one deleted' });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server Error');
  }
};


export const deleteUsersByEmail = async (req: Request, res: Response) => {
  const { emails } = req.body;

  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    return res.status(400).json({ message: 'Please provide a valid array of user emails' });
  }

  try {
    const deleteQuery = 'DELETE FROM users WHERE email = ANY($1::text[])';
    await pool.query(deleteQuery, [emails]);
    res.status(200).json({ message: 'Users deleted' });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server Error');
  }
};


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await pool.query(`SELECT id, name, email, salary, func, gender FROM users WHERE func != 'admin';`);
    res.json(allUsers.rows);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server Error');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.rows[0]);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server Error');
  }
};
