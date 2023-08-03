import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  Fa
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiAdobexd
} from 'react-icons/si'
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaPython />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer - Braincode Solution',
        stage: 'May 2023 - Jun 2023',
      },
      {
        title: 'Intern - Nija Works Studio',
        stage: 'Apr 2022 - Oct 2022',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Rekayasa Perangkat Lunak - SMK Telkom Purwokerto',
        stage: '2023',
      },
    ],
  },
];

// components
import Circles from "../../components/Circles"

import {motion} from "framer-motion"
import {fadeIn} from "../../variants"

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return(
    <div className="h-full bg-primary/30 py-32 text-center ">
      <Circles />
      <motion.div
      variants={fadeIn('right',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center ">
        <div className="flex-1 flex flex-col  justify-center">
          <motion.h2
          variants={fadeIn('down',0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 ">Captivating <span className="text-accent">stories</span> birth magnificent design.</motion.h2>
          <motion.p
          variants={fadeIn('down',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-full mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 text-center xl:px-0">Passionate and dedicated junior front-end programmer with a strong foundation in React, UI design, HTML, and Tailwind CSS. <br/> I am constantly seeking new challenges to enhance my skills and contribute to impactful projects.
          </motion.p>
        </div>
        <div className="flex flex-col w-full xl:gap-x-8 mx-auto xl:mx-0 mb-4"></div>
        <div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item,itemIndex) => {
              return(
                <motion.div
                variants={fadeIn('left',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden' key={itemIndex} className={`${index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer  capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} 
                onClick={() => setIndex(itemIndex)}>{item.title}</motion.div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex)=> {
              return <motion.div
              variants={fadeIn('right',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden' className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" key={itemIndex}>
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) =>{
                    return <div className="text-2xl text-white">{icon}</div>
                  })}
                </div>
              </motion.div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
