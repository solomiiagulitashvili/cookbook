import recipes from '../models/recipes';

const changeRecipe = (req, res) => {
  const {
    _id, title, ingredients, description,
  } = req.body;

  recipes.findByIdAndUpdate(_id, { title, ingredients, description }, { new: true }, (err, recipe) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).send();
  });
};

export default changeRecipe;
