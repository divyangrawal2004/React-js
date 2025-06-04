import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact pages</h1>
      <Link to ="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to ="/about">About</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Conatct</Link>&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Contact
