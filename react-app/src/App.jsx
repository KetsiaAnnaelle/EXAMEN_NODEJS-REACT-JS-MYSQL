import React, {createContext} from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Accueil from './component/Accueil';
import Produit from './component/Produit';
import Dashboard from './component/Dashboard';
import Catégories from './component/Catégories';
import Commandes from './component/Commandes';
import Deconnexion from './component/Deconnexion';
import Produits from './component/Produits';
import Favoris from './component/Favoris';
import Card from './component/Card';
import Home from './component/Home';
import Tab from './component/Tab';
// import DashGeneral from './component/DashGeneral';


export const NOMBRE = createContext() 
const App = () => {
  return (
    
    <BrowserRouter>
     

      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <NOMBRE.Provider value={[card,setcard]}> */}
          <Route path='/accueil' element={<Accueil/>} />
          <Route path='/all-produits' element={<Produits/>} />
        {/* </NOMBRE.Provider> */}
        
        <Route path='/favoris' element={<Favoris/>} />
        <Route path='/card' element={<Card/>} />

        <Route path='/high-tec-center-admin' element={<Dashboard/>} />
        <Route path='/high-tec-center-admin/Catégories' element={<Catégories/>} />
        <Route path='/high-tec-center-admin/Produit' element={<Produit/>} />
        <Route path='/high-tec-center-admin/Commandes' element={<Commandes/>} />
        <Route path='/high-tec-center-admin/Deconnexion' element={<Deconnexion/>} />
        <Route path='/high-tec-center-admin/categorie/tab' element={<Tab/>} />
        
        
      </Routes>
      
    </BrowserRouter>


  
   
  );
};

export default App;