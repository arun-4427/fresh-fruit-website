import splash from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";

const bgStyle = {
  backgroundImage: `url(${splash})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl mx-4 "
      >
        <div></div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg lg:max-m-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Get Fresh Fruit Today..
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
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
              variants={FadeLeft(0.9)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium possimus cum magni dolor nobis fugit.
            </motion.p>
          </div>
          <motion.div
            variants={FadeLeft(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start pt-8"
          >
            <button className="primary-btn flex items-center gap-2">
            <span>
                  <IoBagHandleOutline />
                </span>
              Order Now</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
