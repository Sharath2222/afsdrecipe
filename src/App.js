import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LoginFormSB from './components/Authentication/LoginFormSB';
import Navbar from './components/Utilities/Navbar';
import RegistrationSB from './components/Authentication/RegistrationSB';
import RecipeFinderSB from './components/Recipes/RecipeFinderSB';
import DashboardSB from './components/Utilities/DashboardSB';
import PrivateRouteSB from './components/Utilities/PrivateRouteSB';



function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>

        <Routes>
          <Route path="/" element={<LoginFormSB/>} />
          <Route path="/login" element={<LoginFormSB/>} />
         
          <Route path="/registration" element={<RegistrationSB/>} />
          <Route path="/recipes" element={<RecipeFinderSB/>} />
          <Route path="/dash" element={<DashboardSB/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
