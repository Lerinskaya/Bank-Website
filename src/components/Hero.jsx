import React from 'react';
import styles from '../style';
import { robot, discount } from '../assets';
import GetStarted from '../components/GetStarted'

const Hero = () => {
  return (
    <section 
      id='home'
      className={`${styles.paddingY} flex flex-col md:flex-row`}
    >
      <div className={`flex-1 flex-col ${styles.flexStart} px-6 xl:px-0 sm:px-16`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" 
            className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20% </span>DISCOUNT FOR <span className='text-white'> 1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className='w-full flex flex-row justify-between items-center'>
          <h1 className='text-white flex-1 font-semibold font-poppins ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>The Next 
            <br className='sm:block hidden'/>
            <span className='text-gradient'> Generation </span> 
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className='text-white font-semibold font-poppins ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className={`flex-1 flex relative md:my-0 my-10 ${styles.flexCenter}`}>
        <img src={robot} alt="cards" className='relative w-[100%] h-[100%] z-[5]'/>
        <div className='absolute pink__gradient w-[40%] h-[35%] top-0 z-[0]'></div>
        <div className='absolute white__gradient w-[80%] h-[80%] rounded-full bottom-40 z-[1]'></div>
        <div className='absolute blue__gradient w-[50%] h-[50%] right-20 bottom-20 z-[0]'></div>
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero