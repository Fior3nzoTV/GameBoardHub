// interface ArticleProps {
//     article: {
//         id: number;
//         title: string;
//         subtitle: string;
//         intro: string;
//         imageUrl: string;
//         players: string;
//         duration: string;
//         age: string;
//         category: string;
//         author: string;
//         date: string;
//     };
// }
//
// const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
//     return (
//         <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//             <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <h3 className="text-xl font-bold mb-1">{article.title}</h3>
//                 <p className="text-sm italic text-gray-400 mb-2">{article.subtitle}</p>
//                 <p className="text-sm mb-3">{article.intro}</p>
//                 <ul className="text-xs text-gray-400 mb-2">
//                     <li><strong>Giocatori:</strong> {article.players}</li>
//                     <li><strong>Durata:</strong> {article.duration}</li>
//                     <li><strong>Età:</strong> {article.age}</li>
//                     <li><strong>Categoria:</strong> {article.category}</li>
//                 </ul>
//                 <div className="text-xs text-right text-gray-500">
//                     {article.author} – {article.date}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ArticleCard;

type Article = {
    id: number;
    title: string;
    subtitle: string;
};

const ArticleCard = ({ article }: { article: Article }) => (
    <article style={{ border: '1px solid black', margin: '1rem', padding: '1rem' }}>
        <h2>{article.title}</h2>
        <p>{article.subtitle}</p>
    </article>
);

export default ArticleCard;
