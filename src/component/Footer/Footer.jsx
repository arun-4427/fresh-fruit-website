import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf, FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'
const Footer = () => {
    return <footer className="bg-primary/10 py-12 mt-12">
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transform={{duration:1, delay:0.2}}
      className="container flex justify-between items-center">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">store</p>
            <FaLeaf className="text-green-700"/>
          </div>
          <div className="text-3xl flex justify-end items-end gap-4 text-gray-500 mt-6">
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
          </div>
          <div></div>

      </motion.div>
    </footer>;
  };
  
  export default Footer;