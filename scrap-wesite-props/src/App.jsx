import Banner from "./component/Banner"
import Header from "./component/Header"
import { useState , useEffect} from "react"

function App() {

  const [head,setHead] = useState([])
  const [bannerData,setBannerData] = useState([])

  const header =() => {
    fetch(`http://localhost:8000/header`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data);
      setHead(data)
      
    }) 
  }

  const banner = async () => {
    const res = await fetch(`http://localhost:8000/banner`)
    const data = await res.json() 
    console.log(data);
    setBannerData(data)
  }
  
  useEffect(() => {
    header(),
    banner()
  },[])
  return (
    <>
   <Header headerMenu = {head}/>
   <Banner banners = {bannerData}/>
   
    </>
  )
}

export default App
