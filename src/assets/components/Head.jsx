import React from 'react'
import { useSelector } from 'react-redux'

const Head = () => {
  const {counterval} = useSelector((store)=>store.counter)
  return (
    <>
    <div className='p-2 m-2 text-xl tex-white ' >
<<<<<<< HEAD
      Current Value : {counterval}
=======
      Current Value : {counter}
>>>>>>> d16a6d486a500d4eb53221c1c07f663a757d9b45
    </div>
    </>
  )
}

export default Head;
