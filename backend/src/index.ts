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
