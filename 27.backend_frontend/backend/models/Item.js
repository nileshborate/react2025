// backend/models/Item.js
import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Item = sequelize.define('Item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
});

export default Item;
