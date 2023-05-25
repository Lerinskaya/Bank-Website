import styles, {layout} from '../style';
import { card } from '../assets';
import Button from '../shared/Button';
import { motion } from 'framer-motion';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <motion.div 
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0,duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y:+30},
          visible: {opacity: 1, y:0}
        }}
        className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal 
          <br className='sm:block hidden' /> 
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles='mt-10' />
      </motion.div>
      <motion.div 
         initial='hidden'
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{delay:0,duration: 0.5}}
         variants={{
           hidden: {opacity: 0, y:+30},
           visible: {opacity: 1, y:0}
         }}
        className={`${layout.sectionImg}`}>
        <img src={card} alt="cards" className='w-[100%] h-[100%] object-contain' />
      </motion.div>
    </section>
  )
}

export default CardDeal