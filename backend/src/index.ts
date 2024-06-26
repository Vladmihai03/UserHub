import app from './server';
import dotenv from 'dotenv';

dotenv.config();
const port = 3710

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
