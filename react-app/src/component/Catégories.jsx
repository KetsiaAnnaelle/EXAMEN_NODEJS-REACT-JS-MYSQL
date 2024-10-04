import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Navdashboard from './Navdashboard';
import Tab from './Tab';
// import { baseURL } from "../outils/constant";
// import { FaSpinner } from "react-icons/fa";

const Catégories = () => {
	const baseURL = 'http://localhost:3001/api'  
	const [nomcat, setnomcat] = useState("")
	const [categories, setcategories] = useState([]);
	const [success, setsuccess] = useState(false)
	const [Error, setError] = useState(true)

	useEffect(() => {
		axios.get(`${baseURL}/get`)
		.then((res) =>{
		setcategories(res.data)
		})
	}, [nomcat])
   
	const loadCategories = () => {
		axios.get(`${baseURL}/get`)
			.then((res) =>{
				setcategories(res.data)
			})
	}

    const addCategorie = (e) =>{
		e.preventDefault()
		axios.post(`${baseURL}/save`,{name: nomcat}).then((res) =>{
			setnomcat('')
			setsuccess(true)

		})
    }

    const verify = (e)=>{
        if (e.target.value === '') {
          setError(true)
        }else{
			setError(false)

		}
        
    }
	return (
     
      
      <main className="container mt-3">

            <div className="row mt-5">
              <div className="col-md-4">
                <Navdashboard />
              </div>

                <div className="col-md-4 mt-5">
                    <div className="mb-3"> 
                        <p className='fs-3'>Ajouter Une Catégorie</p>

						{  success && <div className="alert alert-success">Categorie ajoutée avec success</div> }
                        <form onSubmit={(e) => {addCategorie(e)}}>
							<label htmlFor="nomcat" className="form-label">Nom de la Catégorie</label>
							<input type="text" className="form-control" id="nomcat" 
								value={nomcat} onChange={(e)=>{setnomcat(e.target.value) ; verify(e) }}/>
                    
							{  Error && <div className="text-danger">Ce champ est obligatoire</div>}
								
							
							<div className="mt-3">
							<button className="btn btn-secondary" type="submit"
								 onClick={(e)=>{verify(e); addCategorie()}}>
								Ajouter
							</button>
							</div>
                        </form>
                    
                    </div>


                </div>

                <div className="col-4 mt-5">
                  <Tab categories={categories} loadCategories={loadCategories}/>
                </div>
            </div>
        </main>
    );
};

export default Catégories;