import React from 'react';
import { connect } from 'react-redux';

import { sortHeroesStarWar } from '../../store/StarWars/starWarsSlice';

import Button from '../../UI/Button';

import './sort-btn.css';

import arrowDown from '../../icons/arrow-down-solid.svg';
import arrowUp from '../../icons/arrow-up-solid.svg';

class SortBtn extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  state = {
    //инциализация нашей дефолтной сортировки
    up: this.props.up || true,
    sortText: this.props.up || true ? 'A-Z' : 'Z-A',
    sortImg: this.props.up || true ? arrowUp : arrowDown,
  };
  clickHandler() {
    this.setState({
      up: !this.state.up,
      sortText: !this.state.up ? 'A-Z' : 'Z-A',
      sortImg: !this.state.up ? arrowUp : arrowDown,
    });
    this.props.sortHeroesStarWar(this.state.up);
  }
  render() {
    return (
      <label className="sort-btn-wrap">
        Сортировка по имени:
        <Button
          clickHandler={this.clickHandler}
          customCssBtn="sort-btn">
          <img
            className="sort-btn__img"
            src={this.state.sortImg}
            alt="кнопка сортировки"
          />
          <span className="sort-btn__text">
            {this.state.sortText}
          </span>
        </Button>
      </label>
    );
  }
}

const mapDispatchToProps = {
  sortHeroesStarWar,
};
export default connect(null, mapDispatchToProps)(SortBtn);
