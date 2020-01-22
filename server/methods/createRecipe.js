import recipes from '../models/recipes';

const createRecipe = (req, res) => {
  const { title } = req.body;

  if (title && title.trim() === '') {
    return res.status(400).json({ msg: 'Add recipe title.' });
  }

  recipes.create({ title }, (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).send();
  });
};

export default createRecipe;
