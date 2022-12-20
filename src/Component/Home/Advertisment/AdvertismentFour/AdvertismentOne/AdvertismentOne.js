import React from 'react'
import { useStateValue } from '../../../../StateProvider/StateProvider';
import "./AdvertismentOne.css"

function AdvertismentOne({image, title,footer, price, id}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              // id: id,
              title: title,
              image: image,
              price: price,
              id: id,
              
              
          }
      });
  }
  return (
    <div className='advertismentOneMain' onClick={addToBasket}>
      <div className='advertismentOne__head'> {title}</div>
      <div className="product__price">
      <p >
					<small>$</small>
					<strong>{price}</strong>
          </p>
        
      </div>
          
      <div className='advertismentOne__body'>
        <img className='ad__images' src={image} alt='' width="320px" />
    
      </div>
      <div className='advertismentOne__footer'>{footer}</div>
    </div>
  )
}

export default AdvertismentOne