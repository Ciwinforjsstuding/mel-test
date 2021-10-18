import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHeroesStarWar } from '../../../store/StarWars/starWarsSlice';

import ChooseList from '../../ChooseListBtn';
import EmptyFavoritList from '../EmptyFavoritList';
import SortBtn from '../../SortBtn';
import Card from '../Card';
import Loader from '../../Loader';
import './list-card.css';

const WrapForCondition = ({ showList }) =>
  !showList.length ? (
    <EmptyFavoritList />
  ) : (
    showList.map(hero => <Card key={hero.name} hero={hero} />)
  );

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
        <WrapForCondition showList={showList} />
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
