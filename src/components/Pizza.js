import React from 'react'

const Pizza = ({ name, ingredient, photoName, price, soldOut }) => {
    return (
        <li className={`pizza ${soldOut ? "soldout" : "pizza"}`}>
            <img src={photoName} alt="Forcaccia" />
            <div>
                <h3>{name}</h3>
                <p>{ingredient}</p>
                {soldOut ? <span>Sold Out</span> : <span>{price}</span>}
            </div>
        </li>
    )
}

export default Pizza
