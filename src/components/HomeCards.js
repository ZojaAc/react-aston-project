import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DataContext from '../context/provider';
import { useAuth } from '../hooks/auth';

export default function HomeCards({ id, name, tagline, brewed, img, onClickToFavor, onClickLike }) {
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
        <Link to='/carditem'>
          <button className='goods__btn-more btn' onClick={onClickShowDetails}>
            <span className='goods__btn-more-txt'>more</span>
            <img className='goods__btn-more-img' src='./img/more.svg' alt='more-img' />
          </button>
        </Link>      
      </div>
      {/* заглушка на случай отсутствия фото */}
      <img className='goods__img' src={(img) ? img : '/img/keg.png'} alt='good-img' /> 
      <a className='up' href='#toHeader'>up</a>

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

HomeCards.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  tagline: PropTypes.string,
  brewed: PropTypes.string,
  img: PropTypes.string,
  onClickToFavor: PropTypes.func,
  onClickLike: PropTypes.func
}
