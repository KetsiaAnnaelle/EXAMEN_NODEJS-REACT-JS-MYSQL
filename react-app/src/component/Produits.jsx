import React, {useEffect, useState } from 'react';
import Home from './Home';
import Arrivage from './Arrivage';
import axios from "axios";
const Produits = () => {

	const baseURL = 'http://localhost:3001/api'
	const [categories, setcategories] = useState([])
	const [idCategorie, setidcat] = useState([])

    useEffect(() => {
		axios.get(`${baseURL}/get`)
		.then((res) =>{
		setcategories(res.data)
		})
	}, [])

    return (
        <div>
            <Home />
            {/* <Accueil /> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => {setidcat(e.target.value)}}>
                            {categories.map(cat =>

                                <option value={cat.idCategorie}>{cat.name}</option>
                                // if (e.value===) {
                                    
                                // } else {
                                    
                                // }
                            )}
                                <option selected>Toutes Les Catégories</option>
                                
                            </select>
                        </div>
                    </div>           
                </div>
                <Arrivage />     
            </div>
           
        </div>
    );
};

export default Produits;