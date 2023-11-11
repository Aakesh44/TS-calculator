import React from 'react'
import Screen from './Screen'
import Delete from './Delete'
import Section from './Section'

const Main = () => {
  return (
    <div className=' h-3/5 p-6 bg-white mx-auto rounded-3xl shadow' style={{width:"280px",height:""}}>
        <Screen/>
        <Delete/>
        <Section/>
    </div>
  )
}

export default Main