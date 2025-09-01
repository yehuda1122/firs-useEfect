import  { useEffect, useState } from 'react'

export default function HelloOperator() {
    const [rend , setRend ] = useState("")
    useEffect(()=>{
        console.log("Metode")
    },[])
    return (
        <div>
            <p>{rend}</p>
        <input onChange={e =>{setRend(e.target.value)}}></input>
    </div>
  )
}
