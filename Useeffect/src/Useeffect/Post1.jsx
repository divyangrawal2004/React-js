import { useEffect } from "react";
import { useState } from "react";

const Post1 = () => {

  let [posts1, setPosts1] = useState([]);

    const user = () => {
        fetch(`https://dummyjson.com/posts`)
        .then(res => res.json())
        .then((history) => {
            // console.log(history.posts);
            setPosts1(history.posts);
            
        })
    }
   useEffect(() => {
    user()
   },[])

  return (
    <>
    <h1 align="center">Post 1 Data</h1>
    <table border={1} align="center">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Reaction</th>
          <th>Tags</th>
          <th>UserID</th>
        </tr>
      </thead>
      <tbody>
        {
          posts1.map((val) => {
            return(
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>👍{val.reactions.likes} / 👎{val.reactions.dislikes}</td>
                <td>
                  {
                    val.tags.map((tag) =>{
                      return(
                       <ul>
                        <li>{tag}</li>
                       </ul>
                       
                      )
                    })
                  }
                </td>
                <td>{val.userId}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    
    </>
  )
}

export default Post1
