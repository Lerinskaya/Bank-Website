import React from 'react'
import {stats} from '../constants'
import styles from '../style'
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(stat=> (
        <motion.div 
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration: 0.8}}
        variants={{
          hidden: {opacity: 0, x:-50},
          visible: {opacity: 1, x:0}
        }}
          key={stat.id} className='ss:justify-center flex items-center justify-start flex-1 flex-row m-3'>
          <h4 className='text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[42px]'>{stat.value}</h4>
          <p className='text-gradient font-poppins uppercase ml-[26px] xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]'>{stat.title}</p>
        </motion.div>
      ))}
    </section>
  )
}

export default Stats