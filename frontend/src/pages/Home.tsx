import Layout from '../layouts/Layout.tsx';
//import ArticleCard from '../components/ArticleCard';
import ArticleCarousel from "../components/ArticleCarousel.tsx";

const mockArticles = [
    {
        id: 1,
        title: 'Catan – Il Gioco dei Coloni',
        subtitle: 'Costruisci, commercia, conquista!',
        intro: 'Un grande classico che ha rivoluzionato i giochi da tavolo moderni.',
        imageUrl: '/images/catan.jpg',
        players: '3–4',
        duration: '75 minuti',
        age: '10+',
        category: 'Strategia',
        author: 'Redazione',
        date: '10 Giugno 2025'
    },
    {
        id: 2,
        title: 'Ticket to Ride – Europa',
        subtitle: 'Viaggia in treno attraverso l’Europa!',
        intro: 'Un gioco di percorso semplice e coinvolgente per tutta la famiglia.',
        imageUrl: '/images/ticket.jpg',
        players: '2–5',
        duration: '45 minuti',
        age: '8+',
        category: 'Famiglia',
        author: 'Luca Bianchi',
        date: '5 Giugno 2025'
    },
    {
        id: 3,
        title: 'Carcassonne',
        subtitle: 'Costruisci paesaggi medievali tessera dopo tessera',
        intro: 'Un gioco di piazzamento facile da imparare ma sempre avvincente.',
        imageUrl: '/images/carcassonne.jpg',
        players: '2–5',
        duration: '35 minuti',
        age: '7+',
        category: 'Piazzamento tessere',
        author: 'Francesca Rossi',
        date: '8 Giugno 2025'
    },
    {
        id: 4,
        title: '7 Wonders',
        subtitle: 'Costruisci una civiltà leggendaria in 30 minuti',
        intro: 'Un gioco di carte strategico per chi ama la storia e la competizione.',
        imageUrl: '/images/7wonders.jpg',
        players: '3–7',
        duration: '30 minuti',
        age: '10+',
        category: 'Strategia',
        author: 'Alessandro Verdi',
        date: '2 Giugno 2025'
    },
    {
        id: 5,
        title: 'Dixit',
        subtitle: 'Immagina, racconta e indovina',
        intro: 'Un gioco creativo basato sulle immagini e l’interpretazione.',
        imageUrl: '/images/dixit.jpg',
        players: '3–6',
        duration: '30 minuti',
        age: '8+',
        category: 'Creativo',
        author: 'Chiara Galli',
        date: '30 Maggio 2025'
    },
    {
        id: 6,
        title: 'Azul',
        subtitle: 'Decora il palazzo reale di Evora',
        intro: 'Un astratto elegante e tattico che colpisce per estetica e semplicità.',
        imageUrl: '/images/azul.jpg',
        players: '2–4',
        duration: '40 minuti',
        age: '8+',
        category: 'Astratto',
        author: 'Martina Neri',
        date: '28 Maggio 2025'
    }
];

const Home: React.FC = () => {
// Prendi i primi 4 articoli per il carosello
    const latestArticles = mockArticles.slice(0, 4);

    return (
        <Layout>
            <section className="p-6 max-w-6xl mx-auto">
                {/*<h1 className="text-3xl font-bold mb-4 text-center">GameBoardHub</h1>*/}
                {/*<p className="text-center mb-8">Qui troverai articoli, recensioni e curiosità sul mondo dei giochi da tavolo.</p>*/}

                <h2 className="text-2xl font-semibold mb-6">Ultimi Articoli</h2>
                <ArticleCarousel articles={latestArticles} />
            </section>
        </Layout>
    );
};

export default Home;
