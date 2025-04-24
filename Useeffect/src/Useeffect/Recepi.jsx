import { useEffect, useState } from "react"
const Recepi = () => {
  let [foods, setFood] = useState([])

  let food = () => {
    fetch(`https://dummyjson.com/recipes`)
      .then(res => res.json())
      .then((fooddata) => {
        setFood(fooddata.recipes)
        // console.log(fooddata.recipes)
      })

  }
  useEffect(() => {
    food()
  }, [])
  return (
    <>
    <h1 align="center">Recepi API</h1>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>image</th>
    
          </tr>
        </thead>
        <tbody>
          {
            foods.map((v) => {
              return(
                <>
                  <tr>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.ingredients}</td>
                    <td><img src= {v.image} width={100}/></td>
                    
                  </tr>
                </>
              )
            })
          }

        </tbody>
      </table>

    </>
  )
}

export default Recepi

