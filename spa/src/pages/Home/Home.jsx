import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from 'react';
import "./Home.css"

const Home = () => {
 return (
   <div className="container">
    <Header />
      <h2>Esta é a Pagina Inicial</h2>
      <h3>Seja muito bem vindo!</h3>
      <h4>esta é uma pagina muito simples</h4>
     <Footer />
   </div>
 );
}

export default Home;
