import React, {useState, useEffect} from 'react';
import Navdashboard from './Navdashboard';
import Tabprod from './Tabprod';
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
// import baseURL from "../outils/constant";


const Produit = () => {

  const baseURL = 'http://localhost:3001/api'
	const [nomprod, setnomprod] = useState("")
	const [idcat, setidcat] = useState("")
	const [description, setdescription] = useState("")
	const [prixProd, setprixprod] = useState("")
	const [imageProd, setimageProd] = useState("")
	const [categories, setcategories] = useState([])
	const [produits, setproduits] = useState([])
	const [Error, setError] = useState(true)
  const [load, setload] = useState(false)
	const [success, setsuccess] = useState(false)

	useEffect(() => {
		axios.get(`${baseURL}/prod/getprod`)
		.then((res) =>{
      console.log(res.data);
		setproduits(res.data)
		})
	}, [nomprod,description,prixProd,imageProd,idcat])

  useEffect(() => {
		axios.get(`${baseURL}/get`)
		.then((res) =>{
		setcategories(res.data)
		})
	}, [])
   
   
	const loadproduits = () => {
		axios.get(`${baseURL}/prod/getprod`)
			.then((res) =>{
				console.log(res.data);
				setproduits(res.data)
			})
	}
  
  const addproduits = async(e) =>{
    e.preventDefault()

    const fData = new FormData()
    fData.append('nameProd',nomprod)
    fData.append('idCategorie',idcat)
    fData.append('description',description)
    fData.append('prixProd',prixProd)
    fData.append('imageProd',imageProd)

    try {
      await axios.post(`${baseURL}/prod/saveprod`,fData);
      setnomprod('')
      setidcat('')
      setdescription('')
      setprixprod('')
      setimageProd('')
      setsuccess(true)

      setTimeout(() => {
        setsuccess(false)
        setload(true)

      }, 1000);

      setload(false)
    } catch (error) {
      console.error(error);
    }
  }

  const verify = (e)=>{
    e.preventDefault()
    if (e.target.value==='') {
      setError(true)
    } else {
      setError(false)
      // setload(true)
    }
      
  }
    



    return (
        <main className="container mt-3">

          <div className="row mt-5">
               <div className="col-md-4">
                  <Navdashboard/>
                </div>

              <div className="col-md-4 mt-5">
              

                <form  onSubmit={(e) => addproduits(e) } enctype="multipart/form-data">

                    <p className='fs-3'>Ajouter Un Produit</p>
                    {  success && <div className="alert alert-success">Produit ajouté avec success</div> }
                    <div className="mb-3"> 

                      

                      
                      <label htmlFor="nomprod" className="form-label">Nom du Produit</label>
                      <input type="text" className="form-control" id="nomprod" value={nomprod} onChange={(e)=>{setnomprod(e.target.value) ; verify(e) }}/>
                    </div>
                    {  Error && <div className="text-danger">Ce champ est obligatoire</div>}

                    <div className="mb-3">
                      <select className="form-select mb-3" onChange={(e) => {setidcat(e.target.value)}} aria-label="Default select example">
                        <option>Choisir La Catégorie</option>
                        {categories.map(cat =>

                        <option key={cat.idCategorie} value={cat.idCategorie}>{cat.name}</option>
                        )}
                          
                        
                      </select>
                    </div>

                    {  Error && <div className="text-danger">Ce champ est obligatoire</div>}
                        

                    <div className="mb-3">
                      <label htmlFor="Description" className="form-label">Description</label>
                      <textarea className="form-control" id="Description" rows="3" value={description} onChange={(e)=>{setdescription(e.target.value) ; verify(e) }}></textarea>
                    </div>
                    {  Error && <div className="text-danger">Ce champ est obligatoire</div>}

                    <div className="mb-3">
                      <label htmlFor="prix" className="form-label">Prix en FCFA</label>
                      <input type="text" className="form-control" id="prix" value={prixProd} onChange={(e)=>{setprixprod(e.target.value) ; verify(e) }}/>
                    </div>
                    {  Error && <div className="text-danger">Ce champ est obligatoire</div>}

                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">Default file input example</label>
                      <input className="form-control" type="file" id="formFile" onChange={(e)=>{setimageProd(e.target.files[0]) ; verify(e) }}/>
                    </div>
                    {  Error && <div className="text-danger">Ce champ est obligatoire</div>}
                     
                          
                      
                    <div className="mt-3">
                      <button className="btn btn-secondary" type="submit" onClick={(e) => {addproduits(e)} }>
                        {  load && <FaSpinner className="me-3"/> }
                        Ajouter
                      </button>
                    </div>
                      
                  
                </form>


              </div>

              {/* <div className="col-4 mt-5">
                  {/* <p className='fs-2'>AUCUN PRODUIT</p> */}
              {/* </div> */} 

              <div className="col-4 mt-5">
                <Tabprod produits={produits} loadproduits={loadproduits}/>
              </div>
          </div> 
        </main>
    );
};

export default Produit;