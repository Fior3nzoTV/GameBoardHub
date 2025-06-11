// src/layouts/Layout.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
