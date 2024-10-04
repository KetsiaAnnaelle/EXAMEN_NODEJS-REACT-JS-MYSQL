import React from 'react';
import {  Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Navdashboard = () => {
    return (
        <main>
            <h1>CAR SEND ADMIN </h1>
            
            <ul className="list-group list-group-flush">
                <Link className="list-group-item" to="/high-tec-center-admin"><FaHome/> Dashboard</Link> 
                <Link className="list-group-item" to="/high-tec-center-admin/Catégories"><FaBars /> Catégories</Link> 
                <Link className="list-group-item" to="/high-tec-center-admin/Produit"><FaShoppingBag /> Produit</Link> 
                <Link className="list-group-item" to="/high-tec-center-admin/Commandes"><FaCartPlus /> Commandes</Link> 
                <Link className="list-group-item" to="/high-tec-center-admin/Deconnexion"><FaSignOutAlt/> Deconnexion</Link> 
            </ul>
               
        </main>
        
        
        
           
        
       
    );
};

export default Navdashboard;