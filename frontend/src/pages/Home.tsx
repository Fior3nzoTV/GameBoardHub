const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <header className="bg-gray-800 p-6 shadow-md">
                <h1 className="text-4xl font-bold text-center mb-4">GameBoardHub</h1>
                <nav>
                    <div className="flex justify-center gap-6">
                        <button className="bg-gray-700 px-5 py-2 rounded hover:bg-gray-600 transition">
                            Home
                        </button>
                        <button className="bg-gray-700 px-5 py-2 rounded hover:bg-gray-600 transition">
                            Articoli
                        </button>
                        <button className="bg-gray-700 px-5 py-2 rounded hover:bg-gray-600 transition">
                            Contatti
                        </button>
                    </div>
                </nav>
            </header>

            <main className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Benvenuto su GameBoardHub</h2>
                <p className="max-w-xl mx-auto">
                    Qui troverai articoli, recensioni e curiosità sul mondo dell'informatica e dei giochi da tavolo.
                </p>
            </main>
        </div>
    );
};

export default Home;
