// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    // Per evidenziare il link attivo
    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-gray-800 text-white p-6 shadow-md">
            <h1 className="text-4xl font-bold text-center">GameBoardHub</h1>
            <nav className="flex justify-center gap-6 mt-4">
                <Link
                    to="/"
                    className={`px-5 py-2 rounded transition ${
                        isActive('/') ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                    Home
                </Link>
                <Link
                    to="/articoli"
                    className={`px-5 py-2 rounded transition ${
                        isActive('/articoli') ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                    Articoli
                </Link>
                <Link
                    to="/tipologia"
                    className={`px-5 py-2 rounded transition ${
                        isActive('/tipologia') ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                    Tipologia
                </Link>
                <Link
                    to="/meccaniche"
                    className={`px-5 py-2 rounded transition ${
                        isActive('/meccaniche') ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                    Meccaniche
                </Link>
                <Link
                    to="/contatti"
                    className={`px-5 py-2 rounded transition ${
                        isActive('/contatti') ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                    Contatti
                </Link>
            </nav>
        </header>
    );
};

export default Header;
