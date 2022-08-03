import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../provider';
import { useAuth } from '../hooks/auth';

export default function HomeCards({ 
  id, name, tagline, 
  brewed, description, pairing, tips, authTips, 
  img, onClickToFavor, onClickLike
  }) {

  const { setItemID } = useContext(DataContext);

  const {isAuth, login} = useAuth();

  const onClickShowDetails = () => {
    setItemID(id);
  }

  const clickAddToFavor = () => {
    onClickToFavor({id, name, tagline, brewed, img});  //  добавит в избранное
    onClickLike(id);  //  поменяет картинку
  } 

  return (   
    <>
      <div>
        <h3 className='goods__name'>{name}</h3>
        <span className='goods__tagline'>{tagline}</span>
        <span className='goods__prod-date'>First brewed: {brewed}</span>
        {/* <p className='goods__description'>{description}</p>
        <p className='goods__pairing'><b>Enjoy it with:</b> {pairing.map((pair, i) => (`${pairing[i] + ', '}`))}</p>
        <p className='goods__tips'><b>Brewers tips:</b> {tips} from: {authTips}</p> */}
        <Link to='/carditem'>
          <button className='goods__btn-more btn' onClick={onClickShowDetails}>
            <span className='goods__btn-more-txt'>more</span>
            <img className='goods__btn-more-img' src='./img/more.svg' alt='more-img' />
          </button>
        </Link>      
      </div>
      <img className='goods__img' src={img} alt='good-img' />

      {
        isAuth ? (
          <button className='goods__btn-like' onClick={clickAddToFavor}>
            <img className='goods__btn-like-img' src={onClickLike(id) ? '/img/liked.svg' : '/img/like.svg'} alt='like-img' />
          </button>     
        ) : (null)
      }            
      
    </>
  )
}