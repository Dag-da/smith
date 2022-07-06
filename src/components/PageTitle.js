import React from 'react'

export default function PageTitle({titleText, supTitleText}) {
  return (
    <div className='py-5 mt-10'>
        <span className='text-secondary text-4xl font-bold'>{supTitleText}</span>
        <h1 className='py-5 text-5xl font-black text-primary'>{titleText}</h1>
    </div>
  )
}
