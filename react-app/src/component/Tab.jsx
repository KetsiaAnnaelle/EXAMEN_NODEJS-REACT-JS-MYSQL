import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
// import { baseURL } from "../outils/constant";
import axios from 'axios';


const Tab = ({categories, loadCategories}) => {
    const baseURL = 'http://localhost:3001/api'
    const removeCategorie = (id) =>{
        axios.delete(`${baseURL}/delete/${id}`)
        .then((res) =>{
            console.log('d');
        })
        loadCategories()
    }

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NOM</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((categorie, num) => 
                            
                            <tr key={num}>
                                <th scope="row">{num + 1}</th>
                                <td>{categorie.name}</td>

                                <td>
                                    <FaTrashAlt data-bs-container="body" data-bs-toggle="popover" 
                                        data-bs-placement="top" data-bs-content="supprimer la categorie" 
                                        style={{color:'red', cursor: 'pointer'}} 
                                        onClick={(e) => {removeCategorie(categorie.idCategorie)}}
                                    />
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Tab;


// categories.map((categorie, num) => 
// if(categories.length===0) {
//     <p className='fs-2'>AUCUNE CATEGORIE</p>
// } else {
//     <table className="table table-striped table-bordered">
//         <thead>
//             <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">NOM</th>
//                 <th scope="col"></th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr key={categorie.id}>
//                 <th scope="row">{num + 1}</th>
//                 <td>{categorie.name}</td>

//                 <td><FaTrashAlt style={{color:'red', cursor: 'pointer'}} onClick={removeCategorie(categorie.idCategorie)}/></td>
//             </tr>

//         </tbody>
//     </table>
// }



// )