import React from 'react';

import './card-hero.css';
import CardBtnToggler from './CardBtnToggler';

const Card = ({ hero }) => (
  <div className="card-hero flex flex-column">
    <div className="card-hero-header flex items-center justify-end">
      <CardBtnToggler hero={hero} />
    </div>
    <div className="card-hero-body flex">
      <ul className="card-hero-body-text">
        <li className="card-hero-body-text__item name">
          Name:
          <span className="card-hero-name__text text">
            {hero.name}
          </span>
        </li>
        <li className="card-hero-body-text__item height">
          Height:
          <span className="card-hero-height__text text">
            {hero.height}
          </span>
        </li>
        <li className="card-hero-body-text__item mass">
          Mass:
          <span className="card-hero-mass__text text">
            {hero.mass}
          </span>
        </li>
        <li className="card-hero-body-text__item hair-color">
          Hair-color:
          <span className="card-hero-hair-color__text text">
            {hero.hair_color}
          </span>
        </li>
        <li className="card-hero-body-text__item skin-color">
          Skin-color:
          <span className="card-hero-hair-skin-color__text text">
            {hero.skin_color}
          </span>
        </li>
        <li className="card-hero-body-text__item eye-color">
          Eye-color:
          <span className="card-hero-hair-eye-color__text text">
            {hero.eye_color}
          </span>
        </li>
        <li className="card-hero-body-text__item birth-year">
          Birth-year:
          <span className="card-hero-hair-birth-year__text text">
            {hero.birth_year}
          </span>
        </li>
        <li className="card-hero-body-text__item gender">
          Gender:
          <span className="card-hero-hair-gender__text text">
            {hero.gender === 'none' ? 'droid' : hero.gender}
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
