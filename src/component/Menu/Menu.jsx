import fruit from "../../assets/Fruits/apple.png";
import fruit3 from "../../assets/Fruits/avocado.png";
import fruit4 from "../../assets/Fruits/cherry.png";
import fruit2 from "../../assets/Fruits/orange.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
const MenusData = [
  {
    id: 1,
    tittle: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    img: fruit,
    delay: 0.2,
  },
  {
    id: 2,
    tittle: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    img: fruit2,
    delay: 0.4,
  },
  {
    id: 3,
    tittle: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    img: fruit3,
    delay: 0.6,
  },
  {
    id: 4,
    tittle: "Fresh Cherry",
    link: "/",
    price: "$2.99",
    img: fruit4,
    delay: 0.8,
  },
];
const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20 ">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {MenusData.map((menu) => (
            <motion.div
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileInView={"visible"}
            whileHover={{scale:1.1}}
              key={menu.id}
              className="bg-white rounded-3xl px-4 py-2 shadow-gray-700 drop-shadow-lg flex flex-row justify-around items-center gap-3 ">
              <img
                src={menu.img}
                alt="fruit"
                className="w-[60px] mt-6 mb-4 scale-110 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.tittle}</h1>
                <p className="text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
