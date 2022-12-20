import React from 'react'

function Horizontaladvertisment({imgUrl}) {
  return (
    <div className='horizontal__advertisment'>
        <div className='horizontal__advertisment2'>
            <img  className="images__horizontal" src={imgUrl} alt=''/>
          </div>
    </div>
  )
}

export default Horizontaladvertisment