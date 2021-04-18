import Bar from "../components/bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";

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
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Who Am I?</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Lambda School</h5>
            <p className="font-semibold">Full Stack Web Development</p>
            <p className="my-3">
              I recently finished a full stack web development bootcamp,
              specializing in Javascript and including computer science.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Lambda School</h5>
            <p className="font-semibold">Full Stack Web Development</p>
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
