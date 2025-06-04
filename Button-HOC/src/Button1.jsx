import React from 'react'
import ButtonHoc from './ButtonHoc'

const BtnComponent = ({clickBtn , style}) => {
  return (
    <div align="center" style={{marginBottom: '10px'}}>
      <button style={style}  onClick={ () => clickBtn()}  >White</button>
    </div>
  )
}
  let Btn = ButtonHoc(BtnComponent)

export default Btn