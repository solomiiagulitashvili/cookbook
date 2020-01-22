import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';
import RecipesList from './RecipesList';
import AddRecipe from './AddRecipe';

class App extends React.Component {
  render() {
    return (
      <>
        <>
          <h1 className="header">CookBook</h1>
        </>
        <div className="wrapper">
          <RecipesList />
          <AddRecipe />
        </div>
        <div />
      </>
    );
  }
}

export default App;
