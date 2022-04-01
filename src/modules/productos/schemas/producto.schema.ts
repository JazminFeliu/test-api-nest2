import * as mongoose from 'mongoose';

export const ProductoSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});