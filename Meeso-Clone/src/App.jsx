import { useState , useEffect } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Menu from "./Menu";
import Categories from "./Categary";
import GoldCollection from "./Gold-Collection";
import Brands from "./Brands";
import Marquee from "./Marquee";
import Trends from "./Trends";
import Footer from "./Footer";



function App() {

  const [findCategary,setFindCategary] = useState(null);


  return (
    <>
    <Header setFindCategary={setFindCategary}/>
    <Menu findCategary={findCategary} setFindCategary={setFindCategary}/>
    {! findCategary && <Banner />}  
    <Categories/>
    <GoldCollection/>
    <Brands/>
    <Marquee/>
    <Trends/>
    <Footer/>
    </>
  );
}

export default App;
