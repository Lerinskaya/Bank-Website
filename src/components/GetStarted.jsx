import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]`}>
      <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary cursor-pointer`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-gradient font-poppins font-medium text-[18px] mr-3 leading-[23px]">
            Get
          </p>
          <img src={arrowUp} alt="arrow" className='object-contain w-[23px] h-[23px]' />
        </div>
        <p className="text-gradient font-poppins font-medium text-[18px] leading-[23px]">
          Started
        </p>
      </div>
    </div>
  )
}

export default GetStarted