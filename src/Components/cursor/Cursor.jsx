import React, { useEffect, useState } from 'react'
import "./cursor.scss"

const Cursor = () => {
const [position,setPosition] = useState({x:0,y:0})

useEffect(()=>{
    const mouseMove = (e) =>{
        setPosition({x:e.clientX,y:e.clientY})
    }
  window.addEventListener("mousemove",mouseMove)
})
  return (
    <div className='cursor'></div>
  )
}

export default Cursor
