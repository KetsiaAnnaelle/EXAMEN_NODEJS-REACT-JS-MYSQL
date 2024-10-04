import React,{useContext} from 'react';
import Home from './Home';
import { NOMBRE } from '../App'


const Card = () => {


    
    // <div class="toast-container position-fixed top-0 start-0 p-3">
    //     <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    //         <div class="toast-header">
    //             <h5><strong class="me-auto"> Car Send</strong></h5>
    //             <button className="btn btn-primary">Payer</button>
    //             {/* <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
    //         </div>
    //         <div class="toast-body text-center">
    //             <h4>Total Commande:<span class="like">0</span>FCFA</h4>
    //         </div>
    //     </div>
    // </div>




    const [card, setcard] = useContext(NOMBRE)
    const trashPro = (nom) => {
        let delPro = card.filter(item => item.nom!==nom)
        setcard(delPro)
    }

    const increment = (nom)=>{
        let inpro = card.map(element =>
            element.nom=nom?
            (
                {...element, qte:element.qte+1}
            ):element
        )
        setcard(inpro)
    }

    const desincrement = (nom) =>{
        let searchQte=card.find(item => item.nom===nom)
        if (searchQte.qte===1) {
            let delPro = card.filter(item => item.nom!==nom)
            setcard(delPro)
            
        } else {
            let desiPro = card.map(element =>
                element.nom===nom?
                (
                    {...element, qte:element.qte-1}

                ):element
            )
            setcard(desiPro)

        }
    }



    return (
        <div>
            <Home />

            <main className='container mt-5'>
            <div className="row">
                {
                    Card.map(element =>{
                        return(
                            <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={`${element.image}`} class="img-fluid rounded-start" alt="image"/>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <h5 class="card-title">{element.nom}</h5>
                                        <p class="card-text">{element.qte}*{element.prix}</p>
                                        <p class="card-text">
                                            <button onClick={()=>increment(element.nom)}>+</button>
                                            <button onClick={()=>desincrement(element.nom)}>-</button>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <span style={{cursor:'pointer'}} onClick={()=>trashPro(element.nom)}>
                                        <FaTrashAlt className='text-center' />
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>

        </main>



            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className='fs-2'>Voiture(s) Commandées</p>
                    </div>
                </div>
            </div>        
            
        </div>
    );
};

export default Card;