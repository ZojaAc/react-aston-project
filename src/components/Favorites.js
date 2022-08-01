import React from "react";

export default function Favorites({ listFavor = [] }) {
  return (
    <>
      <h2 className="title">Your favorites list:</h2>
      <div className="main__list goods flex--wrap">
        {listFavor.map((item) => (
          <div className="goods__card" key={item.id}>
            <div>
              <h3 className='goods__name'>{item.name}</h3>
              <span className='goods__tagline'>{item.tagline}</span><br/>
              <span className='goods__prod-date'>First brewed: {item.brewed}</span>
            </div>          
            <img className='goods__img' src={item.img} alt='good-img' />
          </div>
        ))}           
      </div>     
       
        {/* <Link to='/carditem'>
          <button className='goods__btn-more btn' onClick={onClickShowDetails}>
            <span className='goods__btn-more-txt'>more</span>
            <img className='goods__btn-more-img' src='./img/more.svg' alt='more-img' />
          </button>
        </Link>       */}
    
        {/* <img className='goods__img' src={img} alt='good-img' /> */}
        {/* <button className='goods__btn-like' onClick={clickAddToFavor}>
          <img className='goods__btn-like-img' src={onClickLike(id) ? '/img/liked.svg' : '/img/like.svg'} alt='like-img' />
        </button>       */}
   
    </>  
  )
}