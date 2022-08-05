import React from "react";
import CardItem from "../components/CardItem";

export default function Card({ listDetails, listPairing }) {
  return (
    <>
      <h2 className="title">Find more about:</h2>
      <div className='card flex'>
        {
          <CardItem
            key={listDetails.id}
            id={listDetails.id}
            name={listDetails.name}
            tagline={listDetails.tagline}
            brewed={listDetails.first_brewed}
            description={listDetails.description}
            foodPairing={listPairing.join(', ')}
            tips={listDetails.brewers_tips}
            authTips={listDetails.contributed_by}
            img={listDetails.image_url}
          />
        }
      </div>
    </>  
  )
}
