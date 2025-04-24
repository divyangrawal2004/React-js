import { useEffect, useState } from "react";
import Recepi from "./Useeffect/Recepi";
import Post1 from "./Useeffect/Post1";
import Counter from "./Counter";
import Usersname from "./Usersname";
// import Auth from "./Useeffect-props/Auth";

function App() {
  let [count, setCount] = useState([]);

  const Post = () => {
    fetch(`https://dummyjson.com/carts`)
      .then(res => res.json())

      .then((data) => {
        // console.log(data.carts);
        setCount(data.carts);


      })
  }
  useEffect(() => {
    Post()
  }, [])



  // const Authication = () => {
  //   fetch(`https://dummyjson.com/carts`)
  //     .then(res => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //   useEffect(() => {
  //     Authication()
  //   }, [])

  // }



  return (
    <>
      <Counter />
      {/* <Auth /> */}

      <Usersname />


      <h1 align="center">Post:-</h1>
      <table border="1" align="center" cellPadding={10} >
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>

            <th>Price</th>
            <th>UserId</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody align="center">
          {
            count.map((val) => {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.products[0].title}</td>

                  <td>{val.products[0].price}</td>
                  <td>{val.products[0].quantity}</td>
                  <td>{val.total}</td>
                </tr>
              )
            })

          }
        </tbody>
      </table>
      <Recepi />
      <Post1 />


    </>
  )
}

export default App
