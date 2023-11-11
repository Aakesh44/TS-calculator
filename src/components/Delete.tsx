import React from 'react'
import {HiOutlineBackspace} from 'react-icons/hi'

import { useDispatch,useSelector} from 'react-redux'
import { editContent } from '../features/showSlice'
import {RootState} from '../store/store'

const Delete = () => {

  const content = useSelector((state: RootState)=> state.showSliceReducer.content)
  const prevoiosCalc = useSelector((state: RootState)=> state.showSliceReducer.previousCalc)

  const dispatch = useDispatch()

  function handleTrim() {
    dispatch( editContent( content.slice(0,content.length-1)))
  }
  function history() {
    dispatch( editContent( prevoiosCalc ))
  }

  return (
    <main className='my-2 p-1 w-full flex items-center justify-between select-none'>

      <div className='flex items-center justify-center text-xs font-mono font-semibold gap-4 '>
        <h1>copy</h1>
        <h1 onClick={history}>history</h1>
      </div>

      <HiOutlineBackspace className='h-5 w-5' onClick={handleTrim}/>
    </main>
  )
}

export default Delete