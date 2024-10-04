import React from 'react';
import Navdashboard from './Navdashboard';

const Deconnexion = () => {
    return (
        <main className="container mt-3">

          {/* <Navdashboard /> */}

            {/* <h1>CAR SEND ADMIN </h1>  */}
            <div className="row mt-5">
                 <div className="col-md-4">
                    <Navdashboard />
                </div>

                <div className="col-md-4">
                    <div class="mb-3"> 
                        <p className='fs-3'>Ajouter Une Catégorie</p>
                        <label HTMLFor="nomcat" class="form-label">Nom de la Catégorie</label>
                        <input type="text" class="form-control" id="nomcat"/>
                    
                        {  Error && <div className="text-danger">Ce champ est obligatoire</div>}
                            
                        
                        <div className="mt-3">
                            <button className="btn btn-secondary" type="submit">Ajouter</button>
                        </div>
                        
                    
                    </div>


                </div>

                <div class="col-4 mt-5">
                    <p className='fs-2'>AUCUNE CATEGORIE</p>
                </div>
            </div>
        </main>
    );
};

export default Deconnexion;