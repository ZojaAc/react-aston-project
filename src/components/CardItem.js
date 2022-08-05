import React from "react";
import PropTypes from 'prop-types';

export default function CardItem({ 
  id, name, tagline, brewed, description, foodPairing, tips, authTips, img }) {

  return (
    <div className="card__wrapper flex">
      <div>
        <h3 className='goods__name'>{name}</h3>
        <span className='goods__tagline'><b>Tagline:</b> {tagline}</span><br/>
        <span className='goods__prod-date'>First brewed: {brewed}</span><br/>
        <p className='goods__description'>{description}</p>
        <p className="goods__pairing"><b>Enjoy it with:</b> {foodPairing}</p>       
        <p className='goods__tips'><b>Brewers tips:</b> {tips} from: {authTips}</p>
      </div>
      <img className='goods__img' src={(img) ? img : '/img/keg.png'} alt='goods-img' />
    </div>
  )
}

CardItem.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  brewed: PropTypes.string,
  description: PropTypes.string,
  foodPairing: PropTypes.string,
  tips: PropTypes.string,
  authTips: PropTypes.string,
  img: PropTypes.string
}
