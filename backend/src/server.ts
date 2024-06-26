import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { protect, verifyUser, isAdmin } from './auth';
import { addUser, deleteUser, getAllUsers, getUserById, signIn } from './handlers';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/api/register', addUser);
app.post('/api/signin', signIn);

// Protect the following routes with the protect middleware
app.delete('/api/delete-user', protect, isAdmin, deleteUser);
app.get('/api/users', protect, isAdmin, getAllUsers);
app.get('/api/users/:id', protect, verifyUser, getUserById);

export default app;
