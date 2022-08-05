import React, { useState, useEffect } from "react";
import axios from 'axios'; 

export default function History() {  
  const [listHistory, setListHistory] = useState([]);

  const allSearch = localStorage.getItem('history').slice().split(',').filter(i => i !== '');
  const resStr = allSearch.join('|');
  
  useEffect(() => {
    if(resStr && resStr.length) {
      axios.get(`https://api.punkapi.com/v2/beers?beer_name=${resStr}`)
      .then((res) => {
        setListHistory([...listHistory, ...res.data]);
      })
    }    
  }, []);

  return(
    <>
      {
        (resStr.length > 0) ? (
          <>
            <h2 className="title">Your search history list:</h2>
            <div className="flex flex--around flex--wrap">          
              <>
                {listHistory.map((elem, i) => (
                  <div className="goods__card" key={i}>
                    <div>
                      <h3 className='goods__name'>{elem.name}</h3>
                      <span className='goods__tagline'>{elem.tagline}</span><br/>
                      <span className='goods__prod-date'>First brewed: {elem.first_brewed}</span>
                    </div>          
                    <img className='goods__img' src={(elem.image_url) ? elem.image_url : '/img/keg.png'} alt='good-img' />
                  </div>
                ))     
                }
              </>
            </div>
          </>
        ) : (
          <h2 className="title title--empty">Your history list is empty</h2>
        )
      }              
    </>
  )
}
