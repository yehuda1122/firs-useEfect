import  { useEffect, useState } from 'react'

export default function Count() {
    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{setCount(count +1)}}>counter</button>
    </div>
  )
}
