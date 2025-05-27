const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Titolo */}
            <header className="bg-white shadow p-4">
                <h1 className="text-3xl font-bold text-center">GameBoardHub</h1>
            </header>

            {/* Navbar */}
            <nav className="bg-white shadow p-4 mt-2">
                <div className="flex justify-center gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Home
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Articoli
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Contatti
                    </button>
                </div>
            </nav>

            {/* Contenuto principale */}
            <main className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Benvenuto su GameBoardHub</h2>
                <p className="text-lg">
                    Qui troverai articoli, recensioni e curiosità sul mondo dell'informatica e dei giochi da tavolo.
                </p>
            </main>
        </div>
    );
};

export default Home;
