import React from 'react'
import Pizza from './Pizza'
import pizzaData from '../data';

const Menu = () => {
    const pizzas = pizzaData;
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            {pizzas.length > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzas.map((items) => {
                            return <Pizza key={items.name} name={items.name} ingredient={items.ingredients} photoName={items.photoName} price={items.price} soldOut={items.soldOut} />
                        })}
                    </ul>
                </>


            ) : (
                <ul className='pizzas'>
                    <li>
                        <p>Currently No Pizza's Available</p>
                    </li>
                </ul>
            )}

        </main>
    )
}

export default Menu
