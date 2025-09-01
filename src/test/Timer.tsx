import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [timer , setTimer ]= useState(0)



useEffect(()=>{
   const intreval = setInterval(()=>{
    setTimer(timer+1)
   },1000)
    return ()=>{
        clearInterval(intreval)
    }
},[])
  return (
    <div>
        <p>{timer}</p>

    </div>
  )
}
