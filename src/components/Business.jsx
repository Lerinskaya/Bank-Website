import { features } from '../constants';
import styles, { layout } from '../style';
import Button from '../shared/Button';
import FeatureCard from '../shared/FeatureCard';
import { motion } from 'framer-motion';

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <motion.div 
        initial='hidden'
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0,duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y:+20},
          visible: {opacity: 1, y:0}
        }}
        className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, 
          <br className='sm:block hidden' /> 
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10' />
      </motion.div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=> (
          <motion.div
            initial='hidden'
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay:0.1,duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y:+20},
              visible: {opacity: 1, y:0}
            }}>
            <FeatureCard key={feature.id} {...feature} index={index} />
          </motion.div>
        ))}
      </div>
    </section >
  )
}

export default Business