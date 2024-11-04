import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-12 px-4"
    >
      <h1 className="text-3xl font-bold mb-8">Nous Contacter</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Nos Coordonnées</h2>
          
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Adresse</h3>
              <p className="text-gray-600">
                30 A route nationale<br />
                59530 LOUVIGNIES QUESNOY
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">cabinet-med.berthe@orange.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Téléphone</h3>
              <p className="text-gray-600">03-27-27-20-20</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Horaires d'ouverture</h3>
              <p className="text-gray-600">Lundi - Vendredi : 8h - 19h</p>
              <p className="text-gray-600">Samedi : 8h - 12h</p>
              <p className="text-gray-600">Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Formulaire de Contact</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition duration-200"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;