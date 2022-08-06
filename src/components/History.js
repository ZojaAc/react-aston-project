import React from "react";
import { useGetByNameQuery } from '../request/apiRequest';

export default function History() {  
  const allSearch = localStorage.getItem('history').slice().split(',').filter(i => i !== '');
  const resStr = allSearch.join('|');
  
  const { data=[], isLoading } = useGetByNameQuery(resStr);  //  вызов хука - возврат данных

  if(isLoading) return <h1 className='title title__link-a'>Loading now....</h1> 

  return(
    <>
      {
        (resStr.length > 0) ? (
          <>
            <h2 className="title">Your search history list:</h2>
            <div className="flex flex--around flex--wrap">          
              <>
                {data.map((elem, i) => (
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
