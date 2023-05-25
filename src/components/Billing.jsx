import {apple, bill, google} from '../assets';
import styles, { layout } from '../style';
import { motion } from 'framer-motion';

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <motion.div 
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0,duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y:+20},
          visible: {opacity: 1, y:0}
        }}
        className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='relative w-[100%] h-[100%] z-[5]' />
        <div className='absolute w-[50%] h-[50%] white__gradient rounded-full z-[3] top-0 -left-1/2'></div>
        <div className='absolute w-[50%] h-[50%] pink__gradient rounded-full z-[0] bottom-0 -left-1/2'></div>
      </motion.div>
      <motion.div 
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0.1,duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y:+20},
          visible: {opacity: 1, y:0}
        }}
        className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Easily control your
          <br className='sm:block hidden' /> 
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5' />
          <img src={google} alt="google-play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </motion.div>
    </section>
  )
}

export default Billing