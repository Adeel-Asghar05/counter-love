import React, { useRef } from 'react'
import styles from  "./Btn.module.css";
import { useDispatch } from 'react-redux';
import counterStore from './Store';

const Btn = () => {
  const dispatch=useDispatch();
const inputRef=useRef();


const handleOneAdd=()=>{
counterStore.dispatch({type: "AddOne"})
}
const handleOneSubstrect=()=>{
counterStore.dispatch({type: "SubstrectOne"})
}

const handleAddbtn=()=>{
  const inputValue = inputRef.current.value;
counterStore.dispatch({type: "Add" , payload: { number : inputValue} })
inputRef.current.value="";

}
const handlesubstrectbtn=()=>{
  const inputValue = inputRef.current.value;
counterStore.dispatch({type: "substrect" , payload: { number : inputValue} })
inputRef.current.value="";
}

  return (
    <>
    <div className='gap-12 m-2' >
        <div className='flex gap-2 justify-center' >
        <button className='py-1 px-4 border-2 border-gray-950 bg-blue-800 text-white rounded-lg'
        onClick={handleOneAdd} >
        +1 
        </button>
        <button className='py-1 px-4 border-2 border-gray-950 bg-yellow-600 text-white rounded-lg' 
        onClick={handleOneSubstrect} >
        -1 
        </button>
        </div>


    {/* second line */}
        <div className='flex gap-2 justify-center mt-2' >
        <input className={`focus:border-2 focus:border-blue-400 outline-none py-1 px-2 bg-gray-800 
        bg-opacity-90  border-2  rounded-lg ${styles.inputScroll}`}
        ref={inputRef}
          type="number"
          placeholder='Number'   />
        <button className='py-1 px-2 border-2 border-gray-950 bg-green-800 text-white rounded-lg'
        onClick={handleAddbtn} >
        Add
        </button>
        <button className='py-1 px-2 border-2 border-gray-950 bg-red-800 text-white rounded-lg' 
        onClick={handlesubstrectbtn}>
        Substrect
        </button>
        </div>
        <div className='mt-2 mb-2 m-2 text-sm tex-white ' >
      See Twist (counter = 2405)
    </div>
          
    </div>
    </>
  )
}

export default Btn;
