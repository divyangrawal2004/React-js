import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts`)
    .then(res => {
      console.log(res.data.posts)
      setPosts(res.data.posts)
    }).catch(err => {
      console.log(err)
    })
  
  }, [])
  if(posts.length === 0){
    return <h1>Loading...</h1>
  }


  return (
    <div align="center">
    <h1>AXIOS-API-Calling</h1>
    <table border={1} cellPadding={10} align="center">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody align="center">
        {
          posts.map((val,i) => {
            return(
              <tr key={i}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body.slice(0, 100)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
     
    </div>
  )
}

export default App
