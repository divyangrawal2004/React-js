import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MdAutoDelete } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { Home, Blog } from "./Home/Home";
import Promps from "./Props/Props";
import Header from './Header/Header';
import { BrowserRouter, Routes , Route} from 'react-router-dom';


function App() {

  let a = 10;
  let color = ["red", "green", "blue"];

  const sum = (a, b) => {
    return 10 + 20;
  }

  return (
    <div align="center">
      <h1>hellow world <CiMenuBurger /></h1>
      <table align="center">
        <tr>
          <label > <MdAutoDelete /></label>
          <td><input type="text" /></td>

        </tr>
      </table>
      {/* <Home /> */}
      <Blog />
      <Promps a={a} color={color} sum={sum} />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header/>}/>

        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
