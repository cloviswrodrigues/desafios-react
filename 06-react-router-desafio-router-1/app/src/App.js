import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.css';
import Header from './Header';
import Produto from './Produto';
import Contato from './Contato';

const App = () => {
    return (
        <BrowserRouter>
            <div className={style.container}>
                <Header />
                <Routes>
                    <Route path="/" element={<Produto />}/>
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </div>            
        </BrowserRouter>
    )
}

export default App