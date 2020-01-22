import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import createRecipe from './methods/createRecipe';
import getRecipes from './methods/getRecipes';
import deleteRecipe from './methods/deleteRecipe';
import changeRecipe from './methods/changeRecipe';

require('dotenv').config();

const publicc = path.join(__dirname, 'public');

const app = express();
app.use('/', express.static(publicc));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicc, 'index.html'));
});


app.use(express.json());

(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
})();

app.post('/api/recipes/', createRecipe);
app.get('/api/recipes/', getRecipes);
app.delete('api/recipes/', deleteRecipe);
app.patch('api/recipes/', changeRecipe);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
