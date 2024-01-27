import React from 'react'
import Order from './Order';

const Footer = () => {

    const hour = new Date().getHours();
    const openHours = 8;
    const closedHours = 24;
    const isOpen = hour >= openHours && hour <= closedHours;
    // if(hour >= openHours && hour <= closedHours) {
    //     alert("We're Currently Open")
    // }
    // else {
    //     alert("Sorry we're closed")
    // }

    return (
        <footer className='footer'>
            {isOpen ? (
                <Order />
            ) : (
                <h4>{new Date().toLocaleTimeString()}.Sorry we're closed!</h4>
            )}

        </footer>
    )
}

export default Footer
