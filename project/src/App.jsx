import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blog/blog'
import Contact from './Contact/Contact'
import Props from './Promps/props'


function App() {
 let a= 10;
 let obj = [
  {id:1, name:"subham", age:20},
  {id:2, name:"smit", age:25},
]

let x = 5;
let y = 10;
let z = x+y;
  return (
    
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/props' element={<Props a={a } obj={obj} />}/>        
            <Route path='/sum' element={<h1> sum :- {z}</h1>}/>  
            {/* path mai /props/sum bhi likh skte h    */}
          </Routes>
      </BrowserRouter>
    
  
    </>
  )
}

export default App
