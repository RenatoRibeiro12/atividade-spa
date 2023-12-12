import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from 'react';
import "./Tarefas.css"

const Tarefas = () => {
 return (
   <div className="lista-tarefas">
    <Header />
      <h1>Tarefas</h1>
      <ul>
        <li>1. Vamos iniciar</li>
        <li>2 .Adquirindo conhecimento</li>
        <li>3 .Aplicando conhecimento</li>
        <li>4 .Resolvendo Problema</li>
        <li>5 .Exibindo Resultado</li>
      </ul>
    <Footer />
   </div>
    
 );
}

export default Tarefas;
