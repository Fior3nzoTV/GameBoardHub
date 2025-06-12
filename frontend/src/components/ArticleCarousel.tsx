import { useState, useEffect } from 'react';
import './ArticleCarousel.css';

const ArticleCarousel = ({ articles }: {articles: any[] }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % articles.length);
    const prev = () => setIndex((prev) => (prev - 1 + articles.length) % articles.length);

    useEffect(() => {
        const timer = setInterval(() => next(), 5000);
        return () => clearInterval(timer);
    }, [articles.length]);

    const current = articles[index];

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                <img src={current.imageUrl} alt={current.title} className="carousel-img" />

                <div className="carousel-left">
                    <h2>{current.title}</h2>
                    <h4>{current.subtitle}</h4>
                    <p>{current.intro}</p>
                </div>

                <div className="carousel-right">
                    <p><strong>Giocatori:</strong> {current.players}</p>
                    <p><strong>Durata:</strong> {current.duration}</p>
                    <p><strong>Età:</strong> {current.age}</p>
                    <p><strong>Categoria:</strong> {current.category}</p>
                    <p><strong>Autore:</strong> {current.author}</p>
                    <p><strong>Data:</strong> {current.date}</p>
                </div>

                <button className="carousel-nav left" onClick={prev}>◀</button>
                <button className="carousel-nav right" onClick={next}>▶</button>
            </div>
        </div>
    );
};

export default ArticleCarousel;
