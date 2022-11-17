import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.css';
import Header from './Header';
import Produto from './Produto';
import Contato from './Contato';
import ProdutoDescricao from './ProdutoDescricao';
import Loading from './Loading';
import './App.css';
import { GlobalStorage } from './GlobalContext';

const App = () => {

    return (
        <GlobalStorage>
            <BrowserRouter>
                <div className={style.container}>
                    <Header />
                    <Loading />
                        <Routes>
                            <Route path="/" element={<Produto />}/>
                            <Route path="/produto/:id" element={<ProdutoDescricao />}/>
                            <Route path="/contato" element={<Contato />} />
                        </Routes>
                    
                </div>            
            </BrowserRouter>
        </GlobalStorage>
    )
}

export default App