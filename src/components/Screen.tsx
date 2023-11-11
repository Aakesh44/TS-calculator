import React from 'react'
import { useSelector } from 'react-redux'
import {RootState} from '../store/store'

const Screen = () => {

  const content = useSelector((state: RootState)=> state.showSliceReducer.content)
  const prevoiosCalc = useSelector((state: RootState)=> state.showSliceReducer.previousCalc)
  return (

    <main className='screen w-full h-20 p-2 rounded-xl font-semibold font-mono text-xs shadow-md flex flex-col items-end justify-around overflow-hidden' >
      <h2 className=' select-none'>{prevoiosCalc}</h2>
      {/* <input type='text' className='text-3xl w-full bg-transparent outline-none text-end overflow-x-scroll' defaultValue={content}/> */}
      
      <h1 contentEditable = {false} className=' text-3xl h-16 flex items-center overflow-hidden outline-none whitespace-nowrap'>{content}</h1>

    </main>

  )
}

export default Screen