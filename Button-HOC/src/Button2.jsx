import React from 'react'
import ButtonHoc from './ButtonHoc'

const Button2 = ({clickBtn , style}) => {
  return (
    <div align="center">
      <button style={style} onClick={() => clickBtn()}>Black</button>
    </div>
  )
}

let Btn = ButtonHoc(Button2)

export default Btn
