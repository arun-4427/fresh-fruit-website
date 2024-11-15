import service from "../../assets/service.png";
import { useState } from "react";
import Button from "../Contact/Button";
import style from "../Contact/Contactfrom.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
} from "react-icons/fa";

const Contactus = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const onsubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div className="bg-cyan-400">
      <div className="container flex mx-10 py-24 ">
        <div>
          <h1 className="text-6xl font-bold ">
            CONTACT
            <span className="text-primary "> US..</span>
          </h1>

          <p className="text-xl mt-10">
            Lets.. connect: We are here to help you and we would love
            <br /> to here you. OR just want to talk. You can reach out through{" "}
            <br /> phone , contact from this page or by phone,email or social{" "}
            <br />
            media.
          </p>
        </div>
        <div>
          <img src={service} alt="abc" className="max-w-full" />
        </div>
      </div>
      <main className="-mt-24">
        <div>
          <h1 className="ml-28">
            <p className="text-2xl font-bold">Enter your detail 
              <span className="text-primary"> or quories here!</span></p>
          </h1>
        </div>
        <section className={style.container}>
          <div className={style.contact_form}>
            <form onSubmit={onsubmit}>
              <div className="flex gap-10 ml-40 -top-10">
                <div>
                  <div className={style.form_control}>
                    <label className=" rounded-md" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Write Name.."
                      className="bg-secondary rounded-lg"
                    />
                  </div>
                  <div className="pt-4">
                    <div className={style.form_control}>
                      <label
                        className="bg-secondary rounded-md"
                        htmlFor="Email"
                      >
                        Email
                      </label>
                      <input
                        type="Email"
                        name="Email"
                        placeholder="Only Email"
                        className="bg-secondary rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className={style.form_control}>
                      <label className=" rounded-md" htmlFor="text">
                        Text
                      </label>
                      <textarea
                        name="text"
                        rows="8"
                        placeholder="Text here.."
                        className="bg-secondary rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="pt-6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                      className="bg-primary hover:bg-secondary rounded-md px-24 h-10 m-8 "
                    >
                      <Button text="SUBMIT " />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-indigo-400  w-full rounded-md p-4">
                    {name + "  " + email + "  " + text}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-primary/10 py-2 mt-2">
        <div className="container flex justify-between items-center">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">store</p>
            <FaLeaf className="text-green-700" />
          </div>
          <div className="text-3xl flex justify-end items-end gap-4 text-gray-500 mt-6">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
};

export default Contactus;
