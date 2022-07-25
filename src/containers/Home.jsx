import React from "react";
import HomeCards from '../components/HomeCards';
import HomeSearch from "../components/HomeSearch";

export default function Home({ listItems, onAddToFavor, isItemAddtoFavor }) {
  return (
    <div className='main'>
      {<HomeSearch />}
      
      <div className='main__list goods'>
        {listItems.map((item) => (
          <div className='goods__card' key={item.id}>
            <HomeCards
              id={item.id}
              name={item.name}
              tagline={item.tagline}
              brewed={item.first_brewed}
              description={item.description}
              pairing={item.food_pairing}
              tips={item.brewers_tips}
              authTips={item.contributed_by}
              img={item.image_url}
              onClickToFavor={(obj) => onAddToFavor(obj)}
              onClickLike={isItemAddtoFavor}
            />
          </div>         
        ))}   
      </div>
    </div>
  )
}