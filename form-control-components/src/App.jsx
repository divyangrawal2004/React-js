import { useState }  from "react";    

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handle = (e) => {
    e.preventDefault();                         // page ko reload nhi hoga
    console.log(name);
    console.log(email);
    setName("");                                //value null krne ke lia
    setEmail("");
  };

  return (
    <>
      <div align="center">
        <h1>Control Components</h1>

        <form onSubmit={handle}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" value={name} onChange ={ (e) => setName(e.target.value)}  />    {/* //onChange input field mai perfect work krta h  agr onclick ye kuch likhege to input lena hi band kr dega*/}
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} />  
              </td>
            </tr>
            <tr>
              <td></td>
           
              <td>
                <input type="submit" />
              </td>
            </tr>
          </thead>
        </table>
        </form>
      </div>
    </>
  );
}
export default App;
