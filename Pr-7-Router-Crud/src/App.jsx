import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Pages/Add"
import View from "./Pages/View"
import Edit from "./Pages/Edit"

// import "./App.css"


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Add/>}/>
      <Route path= "/view" element = {<View/>}/>
      <Route path="/edit/:id" element= {<Edit/>}/>
   
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
