import React from 'react'
import './Calculator.css'

const CalcButton = (props) => {
  return (
    <div>
      <button className={props.className} onClick={()=>props.onClick(props.value)}>{props.value}</button>
    </div>
  )
}

export default CalcButton
