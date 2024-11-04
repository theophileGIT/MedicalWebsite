import React from 'react';
import { motion } from 'framer-motion';

const MentionsLegales = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-12 px-4"
    >
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Ce site est édité par le cabinet médical du Docteur Jean BERTHE.
            </p>
            <p className="text-gray-600">
              Siège social : 30 A route nationale, 59530 LOUVIGNIES QUESNOY<br />
              Téléphone : 03-27-27-20-20<br />
              Email : contact@exemple.com
            </p>
            <p className="text-gray-600">
              Docteur Jean BERTHE - Médecin généraliste<br />
              N° RPPS : [Numéro RPPS]<br />
              Inscrit au tableau de l'Ordre des Médecins de [Département]
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
          <p className="text-gray-600">
            Ce site est hébergé par [Nom de l'hébergeur]<br />
            Adresse : [Adresse de l'hébergeur]<br />
            Téléphone : [Téléphone de l'hébergeur]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p className="text-gray-600">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les représentations iconographiques et photographiques.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Responsabilité</h2>
          <p className="text-gray-600">
            Les informations fournies sur ce site sont présentées à titre indicatif et général. Malgré les mises à jour régulières, la responsabilité du site ne peut être engagée en cas de modification des dispositions administratives et juridiques apparaissant après la publication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Liens hypertextes</h2>
          <p className="text-gray-600">
            Les sites reliés directement ou indirectement à ce site ne sont pas sous le contrôle du Docteur Jean BERTHE. Par conséquent, il n'assume aucune responsabilité quant aux informations publiées sur ces sites.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default MentionsLegales;