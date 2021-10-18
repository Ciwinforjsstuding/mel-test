import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHeroesStarWar } from '../../../store/StarWars/starWarsSlice';

import ChooseList from '../../ChooseListBtn';
import SortBtn from '../../SortBtn';
import Card from '../Card';
import Loader from '../../Loader';
import './list-card.css';

const ListCards = ({
  loading,
  showList,
  currentPage,
  fetchHeroesStarWar,
}) => {
  useEffect(() => {
    fetchHeroesStarWar(currentPage);
  }, [currentPage, fetchHeroesStarWar]);
  return (
    <div className="list-cards flex flex-column">
      <div className="list-cards-btns flex item-center justify-between">
        <SortBtn />
        <ChooseList />
      </div>
      {loading ? (
        <Loader />
      ) : (
        showList.map(hero => <Card key={hero.name} hero={hero} />)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  showList: state.starWars.showList,
  loading: state.starWars.loading,
  currentPage: state.starWars.currentPage,
});

const mapDispatchToProps = { fetchHeroesStarWar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCards);
