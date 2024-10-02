import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    );
}

export default App;

