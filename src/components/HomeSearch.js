// import React, {useState} from "react";


// export default function HomeSearch(
//   { searchValue, onChangeInput, setSearchValue }) {
  // const [searchValue, setSearchValue] = useState('');  //  карточки из поиска

  // const onChangeInput = (e) => {
  //   setSearchValue(e.target.value);
  // }

//   return (
//     <>
//       <div className='main__description'>
//         Here you can find all the bestsellers of the world brewing and more information about any beer: 
//         the first date brewed, a taste description, which food is more pairing, 
//         and an interesting bonus - get a tips from a famous brewers.
//       </div>
//       <div className='main__search flex'>
//         <div className="search__title title">{searchValue ? `You're looking for now: ${searchValue}` : ``}</div>
//         <div className='main__input-box'>
//           <input className='main__input-field input' placeholder="find by name..." onChange={onChangeInput} value={searchValue}/>
//         </div>        
//         <button className='main__input-btn btn'>search</button>
//       </div>
//     </>
//   )
// }

// {searchValue && <img className='search_clear' src='/img/close.svg' alt='img-clear' onClick={() => setSearchValue('')}/>}