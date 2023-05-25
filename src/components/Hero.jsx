import React from 'react';
import styles from '../style';
import { robot, discount } from '../assets';
import GetStarted from '../shared/GetStarted';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id='home'
      className={`${styles.paddingY} flex flex-col md:flex-row`}
    >
      <div className={`flex-1 flex-col ${styles.flexStart} px-6 xl:px-0 sm:px-16`}>
        <motion.div 
           initial='hidden'
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{duration: 0.8}}
           variants={{
             hidden: {opacity: 0, x:+50},
             visible: {opacity: 1, x:0}
           }}
          className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" 
            className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20% </span>DISCOUNT FOR <span className='text-white'> 1 MONTH</span> ACCOUNT
          </p>
        </motion.div>
        <motion.div 
          initial='hidden'
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.8}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x:0}
          }}
          className='w-full flex flex-row justify-between items-center'>
          <h1 className='text-white flex-1 font-semibold font-poppins ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>The Next 
            <br className='sm:block hidden'/>
            <span className='text-gradient'> Generation </span> 
          </h1>
          <motion.div 
            initial='hidden'
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-30},
              visible: {opacity: 1, x:0}
            }}
            className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </motion.div>
        </motion.div>
        <motion.h1 
          initial='hidden'
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x:0}
          }}
          className='text-white font-semibold font-poppins ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
          Payment Method
        </motion.h1>
        <motion.p 
          initial='hidden'
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.8}}
          variants={{
            hidden: {opacity: 0, x:+50},
            visible: {opacity: 1, x:0}
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
        </motion.p>
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