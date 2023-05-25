import React from 'react'

const Button = ({styles}) => {
  return (
    <button 
      type='button' 
      className={`${styles} font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none py-4 px-6 bg-blue-gradient button`}>
      Get Started
    </button>
  )
}

export default Button