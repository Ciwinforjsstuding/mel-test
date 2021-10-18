import React from 'react';
import { connect } from 'react-redux';

import './card-btn-toggler.css';

import { FAVORIT } from '../../../../store/constants';
import Button from '../../../../UI/Button';

import {
  addToFavorit,
  removeItemForKey,
} from '../../../../store/StarWars/starWarsSlice';

class CardBtnToggler extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.togglerIsPressed = this.togglerIsPressed.bind(this);
  }
  state = {
    isPressed: false,
    btnText: 'Add to favorit',
  };
  togglerIsPressed() {
    this.setState({
      isPressed: !this.state.isPressed,
      btnText: this.state.isPressed
        ? 'Add to favorit'
        : 'Remove the favorit',
    });
  }
  clickHandler = () => {
    if (this.state.isPressed) {
      this.props.removeItemForKey({
        key: FAVORIT,
        elem: this.props.hero,
      });
      this.togglerIsPressed();
    }
    if (!this.state.isPressed) {
      this.props.addToFavorit(this.props.hero);
      this.togglerIsPressed();
    }
  };
  render() {
    return (
      <Button
        clickHandler={this.clickHandler}
        customCssBtn={`card-hero-header__btn ${
          this.state.isPressed && 'pressed-btn'
        }`}>
        {this.state.btnText}
      </Button>
    );
  }
}

const mapDispatchToProps = {
  addToFavorit,
  removeItemForKey,
};

export default connect(null, mapDispatchToProps)(CardBtnToggler);
