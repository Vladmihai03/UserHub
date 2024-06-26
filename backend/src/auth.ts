import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import pool from './database/pool';

dotenv.config();

interface User {
  id: string;
  email: string;
  password: string;
}

export const comparePasswords = (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
}

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 5);
}

export const createJWT = (user: { id: string; email: string; func: string }): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, func: user.func },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );

  return token;
};


interface AuthenticatedRequest extends Request {
  user?: { id: string; email: string };
}

export const protect = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  const [, token] = bearer.split(' ');
  if (!token) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string };
    console.log("Token verified, user:", user); // Log pentru debugging
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Not authorized" });
  }
}

export const verifyUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { id } = req.params;
  console.log("User from token:", req.user); // Log pentru debugging
  console.log("ID from params:", id); // Log pentru debugging

  // Asigură-te că ID-ul este de tip string
  const tokenUserId = String((req.user as any).id);
  const paramId = String(id);

  if (tokenUserId !== paramId) {
    console.log("Forbidden: IDs do not match");
    return res.status(403).json({ message: 'Forbidden' });
  }
  
  next();
}

export const isAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const [, token] = bearer.split(' ');
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string };
    req.user = user;
    
    const result = await pool.query('SELECT func FROM users WHERE id = $1', [user.id]);
    const userFunc = result.rows[0]?.func;

    if (userFunc !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }

    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Not authorized" });
  }
};

