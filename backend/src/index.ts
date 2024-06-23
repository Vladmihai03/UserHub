import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './database/pool';

const app = express();
const port = 3710;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/api/add-user', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

app.delete('/api/delete-user', async (req: Request, res: Response) => {
  const email = req.query.email as string;
  if (!email) {
    return res.status(400).json({ "message": "Please provide a valid email" });
  }

  try {
    const result = await pool.query('DELETE FROM users WHERE email = $1', [email]);
    const rowCount = result.rowCount as number; // Assert rowCount as number
    if (rowCount > 0) {
      return res.status(200).json({ "message": "User deleted successfully" });
    } else {
      return res.status(404).json({ "message": `${email} not found in database` });
    }
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    return res.status(500).json({ "message": "Server Error" });
  }
});



app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
