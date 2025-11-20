import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Home() {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Hero
        title="Welcome to TonyMac129 Misc!"
        description="You can find all my small learning projects, demos, tests, and other miscellaneous stuff here!"
      />
    </motion.div>
  );
}

export default Home;
