import recipes from '../models/recipes';

const createRecipe = (req, res) => {
  const {
    title, ingredients, description,
  } = req.body;

  if (title && title.trim() === '') {
    return res.status(400).json({ msg: 'Add recipe title.' });
  }

  recipes.create({
    title, ingredients, description,
  }, (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).send();
  });
};

export default createRecipe;
