import React, {useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import axios from "axios";
// import { NOMBRE } from '../App'

const Arrivage = () => {
    const baseURL = 'http://localhost:3001/api/prod'
	const [card, setcard] = useState([{}])
	const [produits, setproduits] = useState([])
	// const [nomcat, setnomcat] = useState("")

    // useEffect(() => {
	// 	axios.get(`${baseURL}/get`)
	// 	.then((res) =>{
	// 	setcategories(res.data)
	// 	})
	// }, [nomcat])

    useEffect(() => {
		axios.get(`${baseURL}/getprod`)
		.then((res) =>{
		setproduits(res.data)
		})
	}, [])

    



    // const [card, setcard] = useContext(NOMBRE)

    const addCart = (produit) =>{
        let existPro = card.find((item)=>item.nom===produit.nom)
        if (existPro) {
            // console.log('Trouvé');
            let AddQte = card.map((item)=>
                item.nom===produit.nom? (
                {...item, qte:item.qte+1}
                ):item
            )
            setcard(AddQte)
        } else {
            setcard([...card,{...produit,qte:1}])
        }
    }

    return (
        
        <div class="card mt-5">
            {
                produits.map((element,index) =>{  //chaque objet du tableau DATA, s'appelle element et chaque position de chaque element c'est index. Forach ne marche pas dans react
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className="card">
                                        <div className="d-flex">
                                            <img src={`${element.imageProd}`} className="card-img-top" alt="logo"/>
                                            <FaHeart className='me-3 mt-2'/>                                 
                                        </div>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">{element.nameProd}</h5>
                                            <p className="card-text">{element.prixProd}</p>
                                            <button className="btn btn-outline-primary" onClick={() => addCart(element)}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
            
            
        </div>
        
    );
};

export default Arrivage;