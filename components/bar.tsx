import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import { Skill } from "../helpers/types";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white rounded-full bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600 ">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 "
        style={{
          width: bar_width,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
