import recipes from '../models/recipes';

const getRecipes = (req, res) => {
  recipes.find({}, (err, recipesList) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).json(recipesList);
  });
};

export default getRecipes;
