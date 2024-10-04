import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
// import { baseURL } from "../outils/constant";
import axios from 'axios';
// import Catégories from './Catégories';


const Tab = ({produits, loadproduits}) => {
    const baseURL = 'http://localhost:3001/api'
    const removeProduit = (id) =>{
        axios.delete(`${baseURL}/prod/deleteprod/${id}`).then((res) =>{
            console.log('Delete product Successfully!!!');
        })
        loadproduits()
    }

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NOM PRODUIT</th>
                        <th scope="col">CATEGORIE</th>
                        <th scope="col">PRIX</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produits.map((produit, num) => 
                            // const nomcat = 
                            <tr key={num}>
                                <th scope="row">{num + 1}</th>
                                <td>{produit.nameProd}</td>
                                <td>{produit.idCategorie}</td>
                                <td>{produit.prixProd}</td>

                                <td><FaTrashAlt style={{color:'red', cursor: 'pointer'}} onClick={(e) => {removeProduit(produit.idProduits)}}/></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Tab;