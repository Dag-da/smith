import React from 'react'

export default function Sections({children}) {
  return (
    <div className='bg-secondary-light grow px-5 md:px-24 md:pt-30'>
      {children}
    </div>
  )
}
