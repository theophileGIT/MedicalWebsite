import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container py-20 flex flex-col md:flex-row md:items-start justify-between gap-10">
        
        {/* Logo */}
        <div className="space-y-4">
          <img src={Logo} alt="" className="w-40" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Info-Pratique</h3>
          <p className="text-gray-400">
            Adresse: 30 A route nationale <br />
            59530 LOUVIGNIES QUESNOY
          </p>
          <p className="text-gray-400">Email: contact@exemple.com</p>
          <p className="text-gray-400">Téléphone: 03-27-27-20-20</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Horaire d'accueil</h3>
          <p className="text-gray-400">Lundi - Vendredi : 8h - 19h</p>
          <p className="text-gray-400">Samedi : 8h - 12h</p>
          <p className="text-gray-400">Dimanche : Fermé</p>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-6" />

      <div className="container pb-6 flex flex-col md:flex-row items-center md:items-center justify-between text-gray-400 text-sm">
        
        <div className="text-left">
          © Docteur Jean BERTHE
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <Link to="/contact" className="hover:text-primary transition duration-200">
            Nous contacter
          </Link>
          <span className="hidden md:inline-block">|</span>
          <Link to="/mentions-legales" className="hover:text-primary transition duration-200">
            Mentions légales
          </Link>
          <span className="hidden md:inline-block">|</span>
          <Link to="/protection-donnees" className="hover:text-primary transition duration-200">
            Protection des données
          </Link>
          <span className="hidden md:inline-block">|</span>
          <Link to="/conditions-generales" className="hover:text-primary transition duration-200">
            Conditions générales
          </Link>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;