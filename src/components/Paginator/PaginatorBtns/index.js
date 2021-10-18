import React from 'react';
import { connect } from 'react-redux';

import { changePagePaginator } from '../../../store/StarWars/starWarsSlice';
import Button from '../../../UI/Button';

import './paginator-btn.css';

const PaginatorBtns = ({
  pages,
  currentPage,
  changePagePaginator,
}) => (
  <div className="paginator-btns flex justify-center items-center">
    {pages.map(page => (
      <Button
        key={page}
        clickHandler={() => changePagePaginator(page)}
        customCssBtn={`paginator__btn ${
          currentPage === page && 'current-page'
        }`}>
        {page}
      </Button>
    ))}
  </div>
);

const mapStateToProps = state => ({
  pages: state.starWars.pages,
  currentPage: state.starWars.currentPage,
});

const mapDispatchToProps = {
  changePagePaginator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatorBtns);
