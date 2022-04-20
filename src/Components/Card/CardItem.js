import React from 'react';
import cardImg from '../../Essets/card.png';
import './CardItem.css';
const CardItem = () => {
  return (
    <div className="cardItem">
         <div className="card-details">
             <div className='card-img'><img src={cardImg} alt="CardImage !!" /></div>
             <h2 className='card-title'>Citymax Hotel Aswan</h2>
             <p className='card-moreDetails'>Situated in Kornish Al Nile, Citymax Hotel Aswan features an outdoor swimming pool. Situated in Kornish Al Nile, Citymax Hotel Aswan features an outdoor swimming pool. </p>
         </div>
         <button className='button book-btn'>Book</button>
     </div> 
  )
}

export default CardItem;
