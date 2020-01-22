import recipes from '../models/recipes';

const deleteRecipe = (req, res) => {
  const { _id } = req.body;
  recipes.findByIdAndRemove(_id, (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).send();
  });
};

export default deleteRecipe;
