import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img 
            src={logo} 
            alt="logo"
            className='w-[266px] h-[72px] object-contain' />
            <p className={`${styles.paragraph} max-w-[310px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex flex-row flex-[1.5] w-full justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map(linkList=> (
            <div key={linkList.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {linkList.title}
              </h4>
              <ul className='list-none mt-4'>
                {linkList.links.map((link, index)=>(
                  <li 
                    key={link.name}
                    className={`font-poppins text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary ${index!==linkList.links.length-1 ? 'mb-4': 'mb-0'}`}>
                      {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.flexBetween} w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]`}>
        <p className='font-poppins text-center text-[18px] leading-[27px] text-white'>
        2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((media, index)=>(
            <img key={media.id} src={media.icon} alt="icon"
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer