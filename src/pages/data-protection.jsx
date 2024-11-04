import React from 'react';
import { motion } from 'framer-motion';

const ProtectionDonnees = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto py-12 px-4"
        >
            <h1 className="text-3xl font-bold mb-8">Politique de protection des données personnelles</h1>

            {/* Table des matières */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
                <ul className="space-y-2">
                    <li>
                        <a href="#section1" className="text-primary hover:text-primary/80 transition duration-200">
                            1. Quel est l’objet de la présente politique ?
                        </a>
                    </li>
                    <li>
                        <a href="#section2" className="text-primary hover:text-primary/80 transition duration-200">
                            2. Qui est le responsable du traitement ?
                        </a>
                    </li>
                    <li>
                        <a href="#section3" className="text-primary hover:text-primary/80 transition duration-200">
                            3. Quelles données personnelles traitons-nous ?
                        </a>
                    </li>
                    <li>
                        <a href="#section4" className="text-primary hover:text-primary/80 transition duration-200">
                            4. Quelles sont les finalités des traitements ?
                        </a>
                    </li>
                    <li>
                        <a href="#section5" className="text-primary hover:text-primary/80 transition duration-200">
                            5. Sur quelles bases légales traitons-nous vos données personnelles ?
                        </a>
                    </li>
                    <li>
                        <a href="#section6" className="text-primary hover:text-primary/80 transition duration-200">
                            6. Qui sont les destinataires de vos données personnelles ?
                        </a>
                    </li>
                    <li>
                        <a href="#section7" className="text-primary hover:text-primary/80 transition duration-200">
                            7. Quelle est la durée de conservation de vos données personnelles ?
                        </a>
                    </li>
                    <li>
                        <a href="#section8" className="text-primary hover:text-primary/80 transition duration-200">
                            8. Quels sont vos droits concernant vos données personnelles ?
                        </a>
                    </li>
                    <li>
                        <a href="#section9" className="text-primary hover:text-primary/80 transition duration-200">
                            9. Qu’en est-il des cookies ?
                        </a>
                    </li>
                    <li>
                        <a href="#section10" className="text-primary hover:text-primary/80 transition duration-200">
                            10. Quelles sont les mesures de securité mises en œuvre ?
                        </a>
                    </li>
                    <li>
                        <a href="#section11" className="text-primary hover:text-primary/80 transition duration-200">
                            11. Qu’en est-il des modifications de la présente politique ?
                        </a>
                    </li>
                </ul>
            </div>

            {/* Contenu */}
            <div className="space-y-8">
                <section id="section1">
                    <h2 className="text-2xl font-semibold mb-4">1. Quel est l’objet de la présente politique ?</h2>
                    <p className="text-gray-600">
                        La présente politique de protection de données personnelles (ci-après la « Politique ») a pour objectif de vous informer sur les mesures que nous mettons en œuvre pour protéger les données personnelles vous concernant sur le site https://www.msp-louvsante.fr/ (ci-après le « Site ») et ce, quel que soit le terminal que vous utilisez.
                        Dans le cadre du nouveau Règlement européen Général sur la Protection des Données n°2016-679 du 27 avril 2016 (« RGPD »), nous répondons aux questions que vous pouvez être amené à vous poser autour de vos données personnelles et leur traitement par le Professionnel de santé.
                        Cette politique fait partie intégrante des Conditions Générales d’Utilisation (ci-après les « CGU »). Les termes utilisés dans la présente Politique sont ceux auxquels il est fait référence dans les CGU.
                    </p>
                </section>

                <section id="section2">
                    <h2 className="text-2xl font-semibold mb-4">2. Qui est le responsable du traitement ?</h2>
                    <p className="text-gray-600">
                        Lorsque vous visitez le Site ou utilisez les services proposés, plusieurs traitements peuvent être effectués.

                        Ces traitements peuvent avoir pour vocation de créer un compte personnel, de prendre rendez-vous et de naviguer sur le Site du/des praticien(s) du cabinet. Le responsable de traitement est désigné dans la présente Politique « nous » ou « Professionnel de santé ». La société MadeForMed SAS, société par actions simplifiée, immatriculée au RCS Créteil sous le numéro 804391589 et dont le siège social est situé 7 rue Pythéas, 13001 MARSEILLE, désigné dans la présente Politique « MadeForMed SAS » est sous-traitant : il agit sur instruction particulière de chaque Professionnel de santé.
                    </p>
                </section>

                <section id="section3">
                    <h2 className="text-2xl font-semibold mb-4">3. Quelles données personnelles traitons-nous ?</h2>
                    <p className="text-gray-600 mb-4">
                        Nous sommes amenés à collecter et à traiter les données personnelles suivantes lorsque vous naviguez sur le Site :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>les données d’identification : nom, prénom, date de naissance, adresse électronique, adresse postale, numéro de téléphone ;</li>
                        <li>les données de connexion et de localisation : adresse IP, horodatage de connexion, géolocalisation ;</li>
                        <li>les données relatives à votre prise de rendez-vous auprès du Professionnel de santé : motif, horaires et historique des rendez-vous</li>
                        <li>les mêmes données concernant vos proches pour lesquels vous souhaitez prendre rendez-vous;</li>
                        <li>les données non structurées liées à un document. Elles sont collectées, mais non traitées.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">
                        Seules les données personnelles strictement nécessaires au regard des finalités décrites ci-dessous sont collectées.
                    </p>
                </section>

                <section id="section4">
                    <h2 className="text-2xl font-semibold mb-4">4. Quelles sont les finalités des traitements? </h2>
                    <p className="text-gray-600">
                        Les données personnelles collectées sont traitées pour les finalités suivantes :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>votre mise en relation avec les Professionnels de santé ;</li>
                        <li>la gestion de vos rendez-vous avec les Professionnels de santé (exemple : obtenir des notifications, les modifier, annuler les rendez-vous) et votre parcours de soin;</li>
                        <li>la gestion des rendez-vous de vos proches avec les Professionnels de santé et leur parcours de soin ;</li>
                        <li>l'échange des documents avec les Professionnels de santé</li>
                        <li>votre prise en charge efficace et optimale par les Professionnels de santé ; mais également, à titre subsidiaire</li>
                        <li>l’amélioration de la connaissance de votre profil, l’analyse du comportement ;</li>
                        <li>la personnalisation de nos services selon les profils et l’amélioration de votre expérience ;</li>
                        <li>les statistiques, les analyses et les mesures d’audience ;</li>
                        <li>les enquêtes de satisfaction sur nos services ;</li>
                        <li>l’amélioration et l’optimisation de la qualité de nos services et de notre site;</li>
                        <li>la gestion des droits et des demandes d’exercice des droits des personnes.</li>
                    </ul>
                    <p className="text-gray-600">
                    Vous trouverez ci-après plus de détails sur la gestion des cookies nous permettant d’atteindre cette finalité.</p>
                </section>


            </div>

            {/* Bouton retour en haut */}
            <div className="fixed bottom-8 right-8">
                <a
                    href="#"
                    className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition duration-200"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    ↑
                </a>
            </div>
        </motion.div>
    );
};

export default ProtectionDonnees;