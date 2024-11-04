import React from 'react';
import { motion } from 'framer-motion';

const ConditionsGenerales = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto py-12 px-4"
        >
            <h1 className="text-3xl font-bold mb-8">Conditions Générales</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Présentation du Service</h2>
                    <p className="text-gray-600">
                        Le Service vous permet de consulter les informations sur le professionnel de santé (spécialités, actes pratiqués, honoraires, horaires d’ouverture, etc.), de prendre rendez-vous avec le professionnel de santé, de contacter le professionnel de santé, de payer la consultation avec le professionnel de santé, et d’échanger des documents avec le professionnel de santé.<br />
                        L’utilisation du Service est gratuite pour les patients.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptation et entrée en vigueur des Conditions d’utilisation</h2>
                    <p className="text-gray-600">
                        En cochant la case “j’accepte”, vous confirmez avoir lu et accepter sans réserve les présentes Conditions d’utilisation. Si vous n'acceptez pas ces Conditions d’utilisation, vous ne pouvez pas utiliser le Service.
                        Les présentes Conditions d’utilisation sont entrées en vigueur le 1er juillet 2022. Nous nous réservons le droit de modifier ces Conditions d’utilisation à tout moment en mettant en ligne la nouvelle version. Dans ce cas, la nouvelle version des Conditions d’utilisation entre en vigueur 15 jours après sa mise en ligne pour les utilisateurs existants et dès la première connexion pour les nouveaux utilisateurs du Service. Un message vous informant de la modification des Conditions d’utilisation sera affiché lors de votre connexion au Service. Si vous refusez la nouvelle version des Conditions d’utilisation, vous ne pourrez plus utiliser nos services à l’issue de cette période de 15 jours.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Informations médicales</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Les informations médicales présentes sur ce site sont données à titre informatif et ne remplacent en aucun cas une consultation médicale.
                        </p>
                        <p>
                            En cas d'urgence médicale, contactez immédiatement le 15 (SAMU) ou le 112.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Rendez-vous</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            La prise de rendez-vous peut s'effectuer par téléphone aux heures d'ouverture du cabinet.
                        </p>
                        <p>
                            En cas d'empêchement, nous vous remercions de nous prévenir au moins 24 heures à l'avance.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Tarifs et paiement</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Les tarifs des consultations sont affichés au cabinet et respectent la convention médicale en vigueur.
                        </p>
                        <p>
                            Le paiement s'effectue à la fin de chaque consultation, par carte bancaire, chèque ou espèces.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Modification des conditions</h2>
                    <p className="text-gray-600">
                        Le cabinet médical se réserve le droit de modifier les présentes conditions générales à tout moment. Les modifications prennent effet dès leur publication sur le site.
                    </p>
                </section>
            </div>
        </motion.div>
    );
};

export default ConditionsGenerales;