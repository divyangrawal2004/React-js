import React, { useState } from 'react'

const ButtonHoc = (Wrappedcomponents) => {
  return  () => {
    const[color,setColor] = useState(true)

    const clickBtn = () => {
      setColor((prev) => !prev)
    }

    const style = {
      backgroundColor: color ? "white" : "black",
      color: color ? "black" : "white",
        padding: '10px',
      width: '100px',
      fontSize: '20px',
      border: '1px solid gray',
      borderRadius: '5px',
      cursor: 'pointer',
     
    }
    return (
    <div>
      <Wrappedcomponents clickBtn={clickBtn} style={style}/>
    </div>
  )
  }
}

export default ButtonHoc
