import React from "react";
import Img1 from "../../assets/uses/1.png";
import Img2 from "../../assets/uses/2.png";
import Img3 from "../../assets/uses/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container my-14">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="order-last md:order-first
           flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              Notre équipe : Toujours là pour vous
            </h1>
            <p className=" text-gray-400 mt-4">
              Il est très important de pouvoir établir une relation personnalisée avec son équipe médicale. Faites connaissance avec celle de notre cabinet.
            </p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img1} alt="" className="w-full rounded-3xl " />
            <p className="text-gray-400 mt-4">Dr. Jean Berthe (photo)</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img2} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Dr. Sandrine CANION(photo)</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img3} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Fanny (NOM) secrétaire (photo) </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
