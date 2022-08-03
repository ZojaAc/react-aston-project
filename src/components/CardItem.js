import React from "react";


export default function CardItem({ 
  id, name, tagline, brewed, description, foodPairing, tips, authTips, img, onClickToFavor, onClickLike 
  }) {

  // const clickAddToFavor = () => {
  //   onClickToFavor({id, name});  //  добавит в избранное
  //   onClickLike(id);  //  поменяет картинку
  // }

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
      <img className='goods__img' src={img} alt='goods-img' />
      {/* <button className='goods__btn-like' onClick={clickAddToFavor}>
        <img className='goods__btn-like-img' src={onClickLike(id) ? '/img/liked.svg' : '/img/like.svg'} alt='like-img' />
      </button> */}
    </div>
  )
}