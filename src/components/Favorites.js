import React from "react";

export default function Favorites({ listFavor = [] }) {
  return (
    <>
      {listFavor.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}             
    </>
  )
}