import React from 'react'
import {stats} from '../constants'
import styles from '../style'


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(stat=> (
        <div key={stat.id} className='ss:justify-center flex items-center justify-start flex-1 flex-row m-3'>
          <h4 className='text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[42px]'>{stat.value}</h4>
          <p className='text-gradient font-poppins uppercase ml-[26px] xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats