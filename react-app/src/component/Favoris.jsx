import React from 'react';
import Home from './Home';


const Favoris = () => {
    return (
        <div>
            <Home />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="fs-2">Voitures Favorites</p>
                    </div>
                    <p className="fs-4 text-center">Pas De Voitures Favorites</p>
                </div>
            </div>    
            
        </div>
    );
};

export default Favoris;