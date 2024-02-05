import styles from "./panel.module.css";
import { motion } from "framer-motion";

function panel() {
  return (
    <motion.div
      className={styles.panel}
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.2 }}
    ></motion.div>
  );
}

export default panel;
