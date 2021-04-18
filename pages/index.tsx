import { services } from "../data";
import ServiceCard from "../components/serviceCard.component";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeFade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="text-center">Welcome!</h6>
      <h6 className="my-3 text-base font-medium">
        Take a stroll through my growth as an engineer. You can find some of my
        pervious work, learn a little of who I am, there is a blog for some
        light reading, and if you would like we can connect and work on
        something that can help humanity!
        <br />
        <span className="text-center">Omnium rerum principa parva sunt</span>
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600 dark:bg-night-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-night-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
