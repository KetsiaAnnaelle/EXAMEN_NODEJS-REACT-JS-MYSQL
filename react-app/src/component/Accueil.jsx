import React from 'react';
import Home from './Home';
import Arrivage from './Arrivage';


const Accueil = () => {
    return (
        <main>
            <Home />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="fs-2">Nouveau Arrivage</p>
                    </div>
                </div>


                <Arrivage />
              
            </div>
            
        </main>
    );
};

export default Accueil;