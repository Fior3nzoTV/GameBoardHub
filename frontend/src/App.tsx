// src/App.tsx
// @ts-ignore
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticlesList from './pages/ArticlesList';
import Contact from './pages/Contact';




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articoli" element={<ArticlesList />} />
                <Route path="/contatti" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;