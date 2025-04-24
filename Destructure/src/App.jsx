
function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let [a, b, c, d, e, f, g, h, i] = arr;
  console.log(a, b, c, d, e, f, g, h, i);

  let obj = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ]
  let [{ name, age }] = obj;
  console.log(name, age);

  return (
    <>
      <h1 align="center">Hello world</h1>
      <h1 align="center">{a},{b},{c},{d},{e},{f},{g},{h},{i}</h1>

     <table border={1} align="center" style={{fontSize: "30px"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      {
        obj.map ((val) => {
          return (
            <tr>
              <td>{val.name}</td>
              <td>{val.age}</td>
            </tr>
          )
        })
      }
      </tbody>
     </table>



    </>
  )
}

export default App
