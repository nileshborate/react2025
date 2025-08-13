import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import Item from '../models/Item.js';

const router = express.Router();

router.get('/', requireAuth, async (_req, res) => {
  const items = await Item.findAll({ order: [['id', 'DESC']] });
  res.json(items);
});

router.post('/', requireAuth, async (req, res) => {
  const { title, description } = req.body;
  const item = await Item.create({ title, description });
  res.status(201).json(item);
});

router.put('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const item = await Item.findByPk(id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  await item.update({ title, description });
  res.json(item);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByPk(id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  await item.destroy();
  res.json({ success: true });
});

export default router;
