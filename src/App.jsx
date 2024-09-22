


import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "./assets/components/Head";
import Btn from "./assets/components/Btn";
import Love from "./assets/components/Store/Love";
import { useNavigate } from "react-router-dom";

function App() {
  const {privacy} = useSelector((store)=>store.counter)

  const navigate = useNavigate();

  useEffect(() => {
    if (privacy) {
      navigate('/love');
    }
  }, [privacy, navigate]);

  return (
    <center>
      <div className='w-full max-w-md border-2 border-gray-950 rounded-2xl mt-40 bg-gray-800 text-white p-4 m-12'>
        <div className="text-3xl font-medium italic">Counter</div>
        {privacy ? (
          <Love /> 
        ) : (
          <>
            <Head />
            <Btn />
          </>
        )}
      </div>
    </center>
  );
}

export default App;


