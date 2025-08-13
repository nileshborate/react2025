import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB, sequelize } from './models/index.js';
import authRoutes from './routes/auth.js';
import itemRoutes from './routes/items.js';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'OK' }));
app.use('/auth', authRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

const start = async () => {
  await connectDB();
  await sequelize.sync({ alter: true });
  console.log('DB Ready');
};

start();
