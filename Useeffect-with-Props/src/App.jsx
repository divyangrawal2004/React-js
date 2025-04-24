import { useEffect, useState } from 'react'
import Cart from './Useeffect/Cart'
import Product from './Product'
import Result from './Result'
import Recipes from './Recipes'
import Airports from './Useeffect/Airports'
import Users from './Useeffect/Users'
import Comment from './Useeffect/Comment'



function App() {
  const [count, setCount] = useState([])



  const Cartpage = () => {
    fetch(`https://dummyjson.com/carts`)
    .then(res => res.json() )
    .then((data) => {
    // console.log(data.carts);
      setCount(data.carts)
    })
    
  }
  useEffect(() => {
    Cartpage()
  },[])


  const [cnt,setCnt] = useState([])
  const Productpage = () => {
    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data.products);
      setCnt(data.products)
      
    })
  }

  useEffect(() => {
    Productpage()
  },[])


  const [res,setRes] = useState([])
  const Resultdata = () => {
    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data);
      setRes(data.results)
      
    })
  }

  useEffect(() => {
    Resultdata()
  },[])



  const [rec,setRec] = useState([])
  const Recipesdata = () => {
    fetch(`https://dummyjson.com/recipes`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data);
      setRec(data.recipes)
    })
  }

  useEffect(() => {
    Recipesdata()
  },[])


  const [air,setAir] = useState([])
  const Airport = () => {
    fetch(`https://www.freetestapi.com/api/v1/airports`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data);
      setAir(data)

    })
  }

  useEffect(() => {
    Airport()
  },[])



  const [user,setUser] = useState([])
  const User = () => {
    fetch(`https://dummyjson.com/users`)
    .then(res => res.json())
    .then((data) => {
      console.log(data.users);
      setUser(data.users)
      
    })
  }

  useEffect(() => {
    User();
  },[])



  const [comma,setComma] = useState([])
  const Comments = () => {
    fetch(`https://dummyjson.com/comments`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data);
      setComma(data.comments)
      
    })
  }

  useEffect(() => {
    Comments();
  },[])

  return (
    <>
    
   <Comment comma = {comma}/>
    <Users use = {user} />
    <Airports Air={air}/>
    <Recipes recipes = {rec}/>
    <Result result={res} />
    <Product products={cnt}/>
    <Cart cart={count}/> 
    </>
  )
}

export default App
