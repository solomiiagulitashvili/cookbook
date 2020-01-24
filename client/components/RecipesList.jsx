import React from 'react';
import tinytime from 'tinytime';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipesList(props) {
  const { recipes } = props;
  const template = tinytime('{DD}:{MM}:{YYYY}.');
  const date = template.render(new Date());
  return (
    <ul className="resipesList">
      {recipes ? recipes.map((recipe) => (
        <li key="_id">
          <h4>{recipe.title}</h4>
          <p>{date}</p>
          <p>
            Description:
            {' '}
            <br />
            {recipe.description}
          </p>
          <Link to={`/one-recipe:${recipe._id}`}>View full</Link>
        </li>
      )) : null}
    </ul>
  );
}

export default RecipesList;

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
