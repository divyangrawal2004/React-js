import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import RegisterForm from "./Pages/RegisterForm"


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element = {<RegisterForm/>}/>
        <Route path="/login" element={<Login/>}/>
       
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
