import React from "react";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-16 mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-4xl font-bold text-darkBlue text-center"
        >
          Une proximité Patient-Médecin
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon1} alt="" className="mx-auto md:mx-0" />
            <p className=" text-3xl font-semibold">Un Accompagnement Pour Tous</p>
            <p className="">
              Les médecins généralistes- médecins de famille sont des médecins spécialistes formés aux principes de la discipline Médecine Générale. Ils sont le médecin traitant de chaque patient, chargé de dispenser des soins globaux et continus à tous ceux qui le souhaitent indépendamment de leur âge, de leur sexe et de leur maladie.
            </p>
            <p className="text-sm text-gray-400">
              BLABLABLABLABLALBAAL<span className="text-primary"> Learnmore</span>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon2} alt="" className="mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">Partenaires de Santé pour un Suivi de Qualité</p>
            <p className="">
              Le cabinet médicale, composé des Drs. BERTHE et  CANION, médecins de famille, associés au sein de la même structure,  assure le premier recours qui coordonne la prise en charge du patient, assure la synthèse, permet la continuité des soins dans le cadre d’un suivi au long cours et développe une démarche de santé publique.
            </p>
            <p className="text-sm text-gray-400">
              BLABLABLABLABLALBAAL<span className="text-primary"> Learnmore</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
