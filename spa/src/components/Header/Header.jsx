import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
  return (
    <div className="content-header">
        <Link to="/home">Home</Link>
        <Link to="/tarefas">Tarefas</Link>
        <Link to="/sobre">Sobre</Link>
    </div>
  );
};

export default Header;