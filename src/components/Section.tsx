import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {PiPlusMinusBold} from 'react-icons/pi'
import Button from './Button'

const Section = () => {

const buttons = [
  { val:"delete", show : <BsTrash/>},
  { val:"negative", show : <PiPlusMinusBold/>},
  { val:"%", show : "%"},
  { val:"÷", show : "÷"},
  { val:"7", show : "7"},
  { val:"8", show : "8"},
  { val:"9", show : "9"},
  { val:"×", show : "×"},
  { val:"4", show : "4"},
  { val:"5", show : "5"},
  { val:"6", show : "6"},
  { val:"−", show : "−"},
  { val:"1", show : "1"},
  { val:"2", show : "2"},
  { val:"3", show : "3"},
  { val:"+", show : "+"},
  { val:"0", show : "0"},
  { val: ".", show : "•"},
  { val:"equal", show : "="},

  
]    

  return (
    <main className='box w-full h-2/3'>

      {buttons.map((n,i)=>(
        <Button {...n} key={i}/>
      ))}

    </main>
  )
}

export default Section