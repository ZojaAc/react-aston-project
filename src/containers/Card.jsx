import React from "react";
import CardItem from "../components/CardItem";


export default function Card({ listDetails, onAddToFavor, isItemAddtoFavor }) {
  return (
    <>
      <h2 className="title">Find more about:</h2>
      <div className='card flex'>
        {
          <CardItem
            id={listDetails.id}
            name={listDetails.name}
            tagline={listDetails.tagline}
            brewed={listDetails.first_brewed}
            description={listDetails.description}
            pairing={listDetails.food_pairing + ', '}
            // pairing={listDetails.join(', ')}
            // pairing={listDetails.food_pairing[0] + `, ` + listDetails.food_pairing[1]}
            // pairing={listDetails.food_pairing.map((item) => (`${item + ', '}`))}
            tips={listDetails.brewers_tips}
            authTips={listDetails.contributed_by}
            img={listDetails.image_url}
            // onClickToFavor={(obj) => onAddToFavor(obj)}
            // onClickLike={isItemAddtoFavor}

          />
        }
      </div>
    </>  
  )
}
