import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Recipe = new Schema({
  id: ObjectId,
  title: String,
  ingredients: String,
  description: String,
  date: Date,
});

const recipe = mongoose.model('recipe', Recipe);
export default recipe;
