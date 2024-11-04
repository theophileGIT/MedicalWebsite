import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container py-5 flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="Retour à l'accueil" className="w-52" />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-10 md:text-base text-sm">
          <li>
            <Link to="/" className="hover:text-primary transition duration-200">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary transition duration-200">
              Organisation du cabinet
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition duration-200">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=30+A+Route+Nationale+59530+LOUVIGNIES+QUESNOY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-200"
            >
              Plan d'accès
            </a>
          </li>
        </ul>
        
        <div>
          <a 
            href="https://www.msp-louvsante.fr/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300 inline-block"
          >
            Pour une téléconsultation
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;