import React, {useState} from "react";
import HomeCards from '../components/HomeCards';
import HomeSearch from "../components/HomeSearch";

export default function Home({ listItems, onAddToFavor, isItemAddtoFavor, onChangeInput, searchValue, setSearchValue }) {
  return (
    <div className='main'>
      {/* {<HomeSearch />} */}

      
      <>
        <div className='main__description'>
          Here you can find all the bestsellers of the world brewing and more information about any beer: 
          the first date brewed, a taste description, which food is more pairing, 
          and an interesting bonus - get a tips from a famous brewers.
        </div>
        <div className='main__search flex'>
          {/* <div className="search__title title">{searchValue ? `You're looking for: ` : ``}</div> */}
          <div className='main__input-box'>
            <input className='main__input-field input' placeholder="find by name..." onChange={onChangeInput} value={searchValue}/>
            {searchValue && <img className='search__clear' src='./img/close.svg' alt='img-clear' onClick={() => setSearchValue('')}/>}
          </div>        
          <button className='main__input-btn btn'>search</button>
        </div>
      </>
      
      <div className='main__list goods flex--wrap'>
        {listItems
        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item) => (
          <div className='goods__card' key={item.id}>
            <HomeCards
              id={item.id}
              name={item.name}
              tagline={item.tagline}
              brewed={item.first_brewed}
              // description={item.description}
              // pairing={item.food_pairing}
              // tips={item.brewers_tips}
              // authTips={item.contributed_by}
              img={item.image_url}
              onClickToFavor={(obj) => onAddToFavor(obj)}
              onClickLike={isItemAddtoFavor}
              // onChangeInput={onChangeInput}
              // searchValue={searchValue}
              // setSearchValue={setSearchValue}
            />
          </div>         
        ))}   
      </div>
    </div>
  )
}