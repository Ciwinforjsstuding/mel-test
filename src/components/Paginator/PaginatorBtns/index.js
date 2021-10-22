import React from 'react';
import { connect } from 'react-redux';
import { FAVORIT } from '../../../store/constants';

import { changePagePaginator } from '../../../store/StarWars/starWarsSlice';
import Button from '../../../UI/Button';

import './paginator-btn.css';

const PaginatorBtns = ({
  pages,
  currentPage,
  changePagePaginator,
  whichShowList,
}) => {
  if (whichShowList === FAVORIT) {
    return null;
  }
  return (
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
};

const mapStateToProps = state => ({
  pages: state.starWars.pages,
  currentPage: state.starWars.currentPage,
  whichShowList: state.starWars.whichShowList,
});

const mapDispatchToProps = {
  changePagePaginator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatorBtns);
