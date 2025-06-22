import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Get_Post } from "./Redux/Action/PostAction";


function App() {

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(Get_Post())
  },[])

  const posts = useSelector((state => state.postdata.posts))

  return (
  <div align="center">
      <h1 align="center">Post API Calling</h1>
      <table border={1}>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {
            posts.map((val) => {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.body}</td>
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
