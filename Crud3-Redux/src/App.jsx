import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./assets/Pages/Add"
import View from "./assets/Pages/View"
import Edit from "./assets/Pages/Edit"


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Add/>}/>
        <Route path="/view" element= {<View/>}/>
        <Route path="/edit/:id"  element= {<Edit/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
