import React from 'react';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
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
    return (
      <div />
    );
  }
}

export default RecipesList;
