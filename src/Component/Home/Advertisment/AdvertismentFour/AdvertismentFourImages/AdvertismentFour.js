import React from 'react'
import "./AdvertismentFour.css"

function AdvertismentFour({ imagesUrl, imagesUrl2, imagesUrl3, imagesUrl4, discription, itemsName, items2Name, items3Name, items4Name,footer }) {
    return (
        <div>
            <div className='advertismentFourMain'>
                <div className='advertismentFour__head'> {discription}</div>
                <div className='advertismentFour__body '>
                    <div className='imageWithName'>
                        <img className='ad__fourImages ' src={imagesUrl} alt="" />
                        <div className='names' >{itemsName}</div>
                    </div>
                
                        <div className='imageWithName '>
                            <img className='ad__fourImages' src={imagesUrl2} alt="" />
                            <div className='names' >{items2Name}</div>
                        </div>
                        
                        <div className='imageWithName'>
                            <img className='ad__fourImages' src={imagesUrl3} alt="" />
                            <div className='names' >{items3Name}</div>
                        </div>
                        <div className='imageWithName'>
                            <img className='ad__fourImages' src={imagesUrl4} alt="" />
                            <div className='names' >{items4Name}</div>
                        </div>
                

                </div>
                <div className='advertismentFour__footer'>{footer}</div>
            </div>
        </div>
    )
}

export default AdvertismentFour