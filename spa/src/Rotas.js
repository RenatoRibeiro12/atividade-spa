import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tarefas from './pages/Tarefas/Tarefas';
import Sobre from './pages/Sobre/Sobre';

const Rotas = () => {
  return (
    
        <Router>
          <Routes>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/tarefas" element={<Tarefas/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
          </Routes>
        </Router>
    
  );
};

export default Rotas;
