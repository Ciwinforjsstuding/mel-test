import React from 'react';

import './paginator.css';
import ListCards from '../Cards/ListCards';
import PaginatorBtns from './PaginatorBtns';

const Paginator = () => (
  <div className="paginator flex flex-column">
    <ListCards />
    <PaginatorBtns />
  </div>
);

export default Paginator;
