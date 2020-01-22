import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Recipe = new Schema({
  id: ObjectId,
  title: String,
  ingredients: String,
  description: String,
});

const recipe = mongoose.model('recipe', Recipe);
export default recipe;
