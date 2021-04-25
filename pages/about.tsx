import Bar from '../components/bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp } from '../helpers/animations';
import Layout from '../components/layout';

const About = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Layout title='About Me'>
      <div className='px-6 py-2'>
        {/* //! Education & Experience */}
        <div className='grid gap-6 md:grid-cols-2'>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className='my-3 text-2xl font-bold text-libre'>Who Am I?</h5>
            <div className=''>
              <p className='my-3 leading-relaxed'>
                I am a lifelong learner, who has fallen in love with code. I am
                a veteran of the US Navy, and the father of four. I am committed
                to building software that will help move humanity forward.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <h5 className='my-3 text-2xl font-bold'>Education</h5>
            <div className=''>
              <h5 className='my-2 text-xl font-bold'>Lambda School</h5>
              <p className='font-semibold'>Full Stack Web Development</p>
              <p className='my-3'>
                I recently finished a full-stack web development boot camp,
                specializing in Javascript and including computer science.
              </p>
            </div>
          </motion.div>
        </div>

        {/*Languages & Tools */}
        <div className='grid gap-9 md:grid-cols-2'>
          <div>
            <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
            <div className='my-2'>
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
            <div className='my-2'>
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
