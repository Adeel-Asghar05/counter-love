


import React from 'react';
import styles from './love.module.css';

const Love = () => {
  return (
    <div className={`${styles.example} mt-40 relative z-10`}>
      <div className="flex justify-center items-center h-full text-white italic text-4xl font-medium relative z-20">
        I Love You
      </div>
    </div>
  );
};

export default Love;
