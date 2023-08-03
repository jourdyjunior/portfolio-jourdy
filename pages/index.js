import { motion } from 'framer-motion';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/70 h-full">
      {/* Background */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto xl:pl-28">
          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Crafting Digital <br />Experience with {' '}
            <span className="text-accent">Code</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Challenging oneself to continuously grow and learn in this fast-paced tech era.
          </motion.p>

          {/* Projects Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          {/* Projects Button (visible in larger screens) */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Background Image and Particles */}
      <div className="w-[1000px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute  mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />

        {/* Avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[520px] max-h-[460px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
