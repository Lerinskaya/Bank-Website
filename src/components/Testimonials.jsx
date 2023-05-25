import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      <div className='absolute blue__gradient rounded-full w-[60%] h-[60%] -right-[50%] z-[0]'/>
      <div className={`${styles.flexBetween} w-full relative md:flex-row flex-col sm:mb-16 mb-6 z-[1]`}>
      <h2 className={styles.heading2}>
        What people are 
        <br className='sm:block hidden' /> 
        saying about us
      </h2>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      </div>
      <div className='feedback-containter flex flex-wrap sm:justify-start justify-center relative z-[1]'>
        {feedback.map(card=> (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials