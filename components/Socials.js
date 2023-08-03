import Link from "next/link"

import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine,RiGitlabFill, RiLinkedinFill } from 'react-icons/ri'
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://gitlab.com/jourdyjunior'} className="hover:text-accent transition-all duration-300"><RiGitlabFill/></Link>
      <Link href={'https://github.com/jourdyjunior'} className="hover:text-accent transition-all duration-300"><FaGithub/></Link>
      <Link href={'https://www.linkedin.com/in/jourdy-junior-11470327a/'} className="hover:text-accent transition-all duration-300"><RiLinkedinFill/></Link>
    </div>
  )
};


export default Socials;
