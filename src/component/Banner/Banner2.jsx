import plate from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <section className=" ">
      <div className="container grid grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 ">
        
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg lg:max-m-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
             Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              fugiat corporis porro quod neque minus nostrum. Fugiat ipsam
              beatae architecto enim aliquam nulla numquam deserunt labore. Quos
              fuga error necessitatibus.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium possimus cum magni dolor nobis fugit.
            </motion.p>
          </div>
          <motion.div
            variants={FadeUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start pt-8"
          >
            <button className="primary-btn">Download App</button>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate:85 }}
            whileInView={{ opacity: 1, x: 0,rotate:0 }}
            transition={{ duration:1, delay: 0.2 }}
            viewport={{ once: true }}
            src={plate}
            alt="baner"
            className="w-[400px] md:max-w-[600px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
