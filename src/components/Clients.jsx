import {clients} from '../constants';
import styles from '../style';
import { motion } from 'framer-motion';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(client=> (
          <motion.div 
            initial='hidden'
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay:0.1,duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-30},
              visible: {opacity: 1, x:0}
            }}
            key={client.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-192px] min-w-[120px]`}>
            <img 
              src={client.logo} 
              alt='logo' 
              className='logo md:w-[192px] sm:w-[130px] w-[110px] object-contain' />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Clients