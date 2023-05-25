import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between py-6'>
      <img src={logo} alt="Hoobank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((link, index)=>(
          <li 
            key={link.id}
            className={`font-poppins font-normal text-[16px] text-white hover:text-secondary
              ${index===navLinks.length-1? 'mr-0': 'mr-10'} cursor-pointer`}
          >
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          className='w-[28px] h-[28px] object-contain'
          src={ isToggle ? close : menu } 
          alt="menu"
          onClick={()=>setToggle(toggle=>!toggle)}  
          />
          <div
            className={`${isToggle ? 'flex' : 'hidden'} 
              absolute bg-black-gradient p-6 mx-4 my-2 top-20 right-0 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((link, index)=>(
                <li 
                  key={link.id}
                  className={`font-poppins font-normal text-[16px] text-white 
                    ${index===navLinks.length-1? 'mb-0': 'mb-4'} cursor-pointer`}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar