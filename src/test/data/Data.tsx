import { useEffect, useState } from 'react'



function Data() {
  const [username, setUsername] = useState("")
  const [data ,setData] = useState<any[]>([])
  const[ reload , setReload] = useState(false)

  useEffect(() => { 
    fetch("http://localhost:3005/data") 
    .then(res => res.json())
    .then( json => setData(json))
    },[reload])

  return (
    <div>
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <p>{username}</p>
      <button onClick={()=> setReload(!reload)}>Reload</button>
      <div>
        {data.map((todo)=>(
          <>
          {todo.title}
          </>
        ))}
      </div>
    </div>
  )
}

export default Data
