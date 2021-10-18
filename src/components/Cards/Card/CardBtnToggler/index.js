import React from 'react';
import { connect } from 'react-redux';

import './card-btn-toggler.css';

import { FAVORIT, SHOW_LIST } from '../../../../store/constants';
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
    if (
      this.state.isPressed &&
      this.props.whichShowList === FAVORIT
    ) {
      this.props.removeItemForKey({
        key: SHOW_LIST,
        elem: this.props.hero,
      });
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

const mapStateToProps = state => ({
  whichShowList: state.starWars.whichShowList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardBtnToggler);
