import React from 'react'
import { useSelector } from 'react-redux'

const Head = () => {
  const counter = useSelector((store)=>store.counter)
  return (
    <>
    <div className='p-2 m-2 text-xl tex-white ' >
      Current Value : {counter}
    </div>
    <div className='-mt-4 mb-2 m-2 text-sm tex-white ' >
      See Twist in counter = 2405
    </div>
    </>
  )
}

export default Head;
