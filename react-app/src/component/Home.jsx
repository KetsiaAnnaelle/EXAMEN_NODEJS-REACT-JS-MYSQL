import React from 'react';
import Navbar from "./Navbar";

const Home = () => {
    return (
        <main>
            <Navbar />
           
           <div className='bg-dark' style={{height:'50vh'}}>
        
                <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-7 display-10 mt-5">
                    <h1 className="text-light">Bugatti Chiron</h1>
                    <p className="text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis autem ipsa et neque illum. Consectetur rem mollitia, hic minus velit alias beatae, autem tempora eveniet ratione eum corporis necessitatibus temporibus.</p>

                    
                    <button type="button" class="btn btn-outline-warning w-50" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Learn More
                    </button>
            
                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Bugatti Chiron 
                            <img src="image/car3.png" alt="car" style={{height:'30px'}}/>
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aliquid voluptatum numquam tenetur provident perferendis impedit consectetur sint, amet nulla odio animi distinctio. Sint, unde eligendi? Voluptatum vitae fuga animi tempora incidunt aliquid eligendi nostrum magnam, officiis consectetur tenetur vel minus optio autem doloremque molestias, quisquam ipsum. Repellat recusandae quia fugiat, tenetur suscipit hic repellendus fugit rerum deleniti aspernatur quod, ut temporibus nulla ullam molestias maxime quibusdam labore quasi. Non at iure a, ab reiciendis dignissimos aperiam consectetur. Doloremque, repellat error? Non, temporibus? Quasi quidem officiis eos est quo, adipisci dolorem incidunt expedita et, aliquam nam velit labore. Est, asperiores.
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 d-xm-none">
                    <img src="image/car3.png" alt="car" style={{height:'250px'}}/>
                    </div>
                    
                </div>
                </div>
                    

        
            </div>

            <div class="custom-shape-divider-bottom-1685461953">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
            </div>

            
        </main>
    );
};

export default Home;