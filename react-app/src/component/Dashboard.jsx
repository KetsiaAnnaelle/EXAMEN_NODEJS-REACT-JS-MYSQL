import React from 'react';
import Navdashboard from './Navdashboard';

const Dashboard = () => {
    return (
        <main className="container mt-3">

  
            <div className="row mt-5">

                <div className="col-md-4">
                  <Navdashboard />
                </div>

                <div className="col-md-8 mt-5">

                    <div className="row">

                        <div className="col-md-3 mb-4"> 
                            <p className='fs-3'>Commandes</p>
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">TODAY</h5>
                                    <p className="card-text text-center fs-3">0</p>
                                    <p className="card-text text-center">Commandes d'Aujourd'hui</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">

                        <div className="col-md-3">
                            <p className='fs-3'>Revenues</p>
                        </div>

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">TODAY</h5>
                                    <p className="card-text text-center fs-3">0</p>
                                    <p className="card-text text-center">FCFA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

                
        
            </div>

           

          
      </main>
    );
};

export default Dashboard;