import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const HowItHelps = () => {
  return (
    <section id="organisation">
      <div className="container py-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideRight(0.2)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon1}
                  heading="Horaires d'accueil"
                  text="Lundi - Vendredi : 8h - 19h Samedi : 8h - 12h Dimanche : Fermé"
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon3}
                  heading="Contact"
                  text=" Téléphone : 03-27-27-20-20 Mail=cabinet-med.berthe@orange.com"
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon2}
                  heading="Plan d'accès au cabinet"
                  text="30 A route nationale 59530 LOUVIGNIES QUESNOY"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col xl:justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              Organisation du cabinet
            </h1>
            <p className=" text-gray-400 mt-">
            Le cabinet accueille ses patients du lundi au vendredi de 8h à 19h et le samedi de 8h à 12h. Situé au 30 A Route Nationale à Louvignies-Quesnoy, il est facilement accessible et joignable par téléphone ou email pour répondre à vos besoins et faciliter votre visite.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Plan d'accès du cabinet
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              <a
                href="https://www.google.com/maps/search/?api=1&query=30+A+Route+Nationale+59530+LOUVIGNIES+QUESNOY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliquez-ici
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
