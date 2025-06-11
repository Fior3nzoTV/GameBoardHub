// import React, {useEffect, useState} from 'react';
//
// interface Article {
//     id: number;
//     title: string;
//     intro: string;
//     imageUrl: string;
// }
//
// interface CarouselProps {
//     articles: Article[];
// }
//
// const Carousel: React.FC<CarouselProps> = ({ articles }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     const goToPrevious = () => {
//         setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
//     };
//
//     const goToNext = () => {
//         setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
//     };
//
//     // Effetto per lo scorrimento automatico
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
//         }, 10000); // cambia ogni 4 secondi
//
//         return () => clearInterval(interval); // pulisce l’intervallo al dismount
//     }, [articles.length]);
//
//     const currentArticle = articles[currentIndex];
//
//     return (
//         <div className="relative w-full h-[520px] bg-white overflow-hidden rounded-xl shadow-md mb-8 flex flex-col justify-center items-center p-8">
//             <img
//                 src={currentArticle.imageUrl}
//                 alt={currentArticle.title}
//                 className="w-full h-full object-contain"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-0 p-4">
//                 <h3 className="text-2xl font-semibold text-black ">{currentArticle.title}</h3>
//                 <p className="text-xl line-clamp-2 text-black">{currentArticle.intro}</p>
//             </div>
//
//             {/* Pulsanti di navigazione */}
//             <button
//                 onClick={goToPrevious}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md hover:bg-gray-800 z-10"
//                 aria-label="Previous"
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                 </svg>
//             </button>
//             <button
//                 onClick={goToNext}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md hover:bg-gray-800 z-10"
//                 aria-label="Next"
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//             </button>
//         </div>
//     );
// };
//
// export default Carousel;
//
//


import React, { useState, useEffect } from 'react';
import './ArticleCarousel.css';

class CustomCarousel extends React.Component<{ articles: any }> {
    render() {
        let {articles} = this.props;
        const [index, setIndex] = useState(0);

        const next = () => setIndex((prev) => (prev + 1) % articles.length);
        const prev = () => setIndex((prev) => (prev - 1 + articles.length) % articles.length);

        useEffect(() => {
            const timer = setInterval(() => next(), 5000); // Auto scroll
            return () => clearInterval(timer);
        }, []);

        return (
            <div className="carousel-container">
                <div className="carousel-slide">
                    <img src={articles[index].imageUrl} alt={articles[index].title} className="carousel-img"/>

                    <div className="carousel-left">
                        <h2>{articles[index].title}</h2>
                    </div>

                    <div className="carousel-right">
                        <p>{articles[index].intro}</p>
                    </div>

                    <button className="carousel-nav left" onClick={prev}>◀</button>
                    <button className="carousel-nav right" onClick={next}>▶</button>
                </div>
            </div>
        );
    }
}

export default CustomCarousel;
