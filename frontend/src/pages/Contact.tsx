// src/pages/Contact.tsx
import React from 'react';
import Layout from '../layouts/Layout';

const Contact: React.FC = () => {
    return (
        <Layout>
            <section className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Contatti</h1>
                <p className="text-center text-gray-300">
                    Puoi scriverci tramite email a: <a href="mailto:info@gameboardhub.it" className="underline text-blue-400">info@gameboardhub.it</a>
                </p>
            </section>
        </Layout>
    );
};

export default Contact;
