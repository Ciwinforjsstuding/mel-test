import React from 'react';
import { connect } from 'react-redux';
import Button from '../../UI/Button';

import {
  changeShowList,
  changeWhichShowList,
} from '../../store/StarWars/starWarsSlice';

import './choose-list-btn.css';
import { FAVORIT, HEROES_STAR_WAR } from '../../store/constants';

const ChooseList = ({
  heroesListStarWar,
  favorit,
  whichShowList,
  changeShowList,
  changeWhichShowList,
}) => {
  const clickHandlerHero = () => {
    changeShowList(heroesListStarWar);
    changeWhichShowList(HEROES_STAR_WAR);
  };
  const clickHandlerFavorit = () => {
    changeShowList(favorit);
    changeWhichShowList(FAVORIT);
  };
  return (
    <div className="choose-list flex items-center justify-around">
      <span className="choose-list__text">Выбор списка:</span>
      <Button
        clickHandler={clickHandlerHero}
        customCssBtn={`choose-list__btn ${
          whichShowList === HEROES_STAR_WAR && 'currentList'
        }`}>
        Hero List
      </Button>
      <div className="dividing-line" />
      <Button
        clickHandler={clickHandlerFavorit}
        customCssBtn={`choose-list__btn ${
          whichShowList === FAVORIT && 'currentList'
        }`}>
        Favorit Hero List
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  heroesListStarWar: state.starWars.heroesListStarWar,
  favorit: state.starWars.favorit,
  whichShowList: state.starWars.whichShowList,
});

const mapDispatchToProps = {
  changeShowList,
  changeWhichShowList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseList);
