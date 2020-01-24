import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import '../styles/main.scss';
import RecipesList from './RecipesList';
import AddRecipe from './AddRecipe';
import OneRecipe from './OneRecipe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    fetch('/api/recipes/', {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((recipes) => {
        this.setState({ recipes });
        console.log(recipes);
      });
  };

  render() {
    const { recipes } = this.state;
    return (
      <>
        <>
          <h1 className="header">CookBook</h1>
        </>
        <Router>
          <div className="wrapper">
            <RecipesList getRecipes={this.getRecipes} recipes={recipes} />
            <AddRecipe getRecipes={this.getRecipes} />
          </div>
          <Route
            path="/one-recipe/:_id"
            render={(props) => {
              const recipe = recipes.find((oneRecipe) => oneRecipe._id === props.match.params._id);
              return <OneRecipe recipe={recipe} />;
            }}
          />
        </Router>

        <div />
      </>
    );
  }
}

export default App;
