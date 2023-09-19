import React from 'react'
import { useState } from 'react';


function Counter(){

     const[count, setCount] = useState(0)

function handleClick(){
   setCount(count+1)
    console.log(count)
   
}

function handleClickDec(){
   setCount(count-1)
    console.log(count)
   
}



   return(
    <div>
    <button onClick={handleClick}>clicK</button>
    <button onClick={handleClickDec}>clicK</button>
    <h1>'counter', {count}</h1>

    </div>
    )
}

export default Counter