import React from "react";
import PropTypes from 'prop-types';

export default function Favorites({ listFavor = [] }) {
  return (
    <>
      {
        (listFavor.length > 0) ? (
          <>
            <h2 className="title">Your favorites list:</h2>
            <div className="flex flex--around flex--wrap">
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
          </>
        ) : (
          <h2 className="title title--empty">Your favorites list is empty</h2>
        )
      }
    </>
  )
}

Favorites.propTypes = {
  listFavor: PropTypes.array
}
