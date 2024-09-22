import React from 'react'
import { useSelector } from 'react-redux'

const Head = () => {
  const {counterval} = useSelector((store)=>store.counter)
  return (
    <>
    <div className='p-2 m-2 text-xl tex-white ' >
      Current Value : {counterval}
    </div>
    </>
  )
}

export default Head;
