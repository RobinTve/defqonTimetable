import React from 'react'



export default function DJset() {
    function handleClick() {
        console.log('in cardClick');
    } 

  return (
    <div onClick={handleClick}>
        <h1 className='artist'>Cryex</h1>
        <h1 classname='time'>12:00 - 13:00</h1>
    </div>
  )
}