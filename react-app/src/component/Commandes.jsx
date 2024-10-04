import React from 'react';
import Navdashboard from './Navdashboard';

const Commandes = () => {
    return (
        <main className="container mt-3">

          <div className="row mt-5">
               <div className="col-md-4">
                  <Navdashboard />
              </div>

                <div className="col-md-6 mt-5">
                <p className=' fs-2'>Toutes Vos Commandes Recentes</p>

                    <div class="mb-3"> 
                        <p className='fs-6 text-center'>AUCUNE COMMANDE</p>
            
                    </div>
                </div>

          </div>
        </main>
    );
};

export default Commandes;