import React from 'react';
import '../Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light" to="/">CarSend</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/accueil" style={({isActive})=>({color:isActive? 'yellow': 'white'})}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/all-produits" style={({isActive})=>({color:isActive? 'yellow': 'white'})}>Tous Les Produits</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favoris" style={({isActive})=>({color:isActive? 'yellow': 'white'})}>Favorites(0)</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link btn float-center" to="/card" id="liveToastBtn" style={({isActive})=>({color:isActive? 'yellow': 'white'})}>Card(0)</NavLink>              
                    </li>

                </ul>

                
                </div>

                
            </div>

            
        </nav>
    );
};

export default Navbar;