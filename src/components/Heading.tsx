import React from 'react'

type headingProps = {
    title : string
}
const heading = ( {title}: headingProps) => {
  return (
    <div className='h-20 mb-20 flex items-center justify-center bg-amber-400 text-4xl font-semibold' style={{fontWeight:"800"}}>{title}</div>
  )
}

export default heading