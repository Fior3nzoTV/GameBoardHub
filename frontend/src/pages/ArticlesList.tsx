// src/pages/ArticlesList.tsx
import React from 'react';
import Layout from '../layouts/Layout';

const ArticlesList: React.FC = () => {
    return (
        <Layout>
            <section className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Lista Articoli</h1>
                <p className="text-center text-gray-300">
                    Qui in futuro mostreremo la lista completa degli articoli.
                </p>
            </section>
        </Layout>
    );
};

export default ArticlesList;
