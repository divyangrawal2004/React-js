
import { useState, useEffect } from "react";


const App = () => {

  const [media, setMedia] = useState([]);
  const Social = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMedia(data);  
      })
  }
  useEffect(() => {
    Social();
  },[])

  return (
    <>
    <h1 align="center">Social Media Api</h1>
    <table border={1} align="center">

      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody align="center">

        {
          media.map((val) => {
            return (
              <tr>
                <td>{val.userId}</td>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body.slice(0, 100)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>  
    </>
  );
};
export default App;
