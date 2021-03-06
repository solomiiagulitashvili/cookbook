import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      ingredients: '',
      description: '',
    };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  createRecipe = () => {
    this.toggle();
    const { title, ingredients, description } = this.state;
    fetch('/api/recipes/', {
      method: 'POST',
      body: JSON.stringify({ title, ingredients, description }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return;
        }
        throw new Error('err');
      })
      .then((recipe) => {
        console.log(recipe);
        const { getRecipes } = this.props;
        getRecipes();
      });
  }

  render() {
    const {
      modal, title, ingredients, description,
    } = this.state;
    return (
      <div className='add'>
        <Button outline color="secondary" onClick={this.toggle} className='add-btn'>Add recipe</Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create a new recipe</ModalHeader>
          <ModalBody>
            <Input type="text" name="title" id="title" value={title} onChange={this.onInputChange} placeholder="Add recipe title" />
            <Input type="text" name="ingredients" id="ingredients" value={ingredients} onChange={this.onInputChange} placeholder="Add ingredients" />
            <Input type="text" name="description" id="description" value={description} onChange={this.onInputChange} placeholder="Add description" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.createRecipe}>Add</Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddRecipe;

AddRecipe.propTypes = {
  getRecipes: PropTypes.func.isRequired,
};
