import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Inscription from '../pages/register/Inscription'
import InscriptionClient from '../pages/register/inscriptionClient'


function App() {
    return (
    <div className='container'>
     <Routes>
        {/* <Route path="/" element={<UsersListe users = {users} />} /> */}
        <Route path="/register" element={<Inscription  />} />
        <Route path="/InscriptionClient" element={<InscriptionClient  />} />
      </Routes>
   
    </div>
    
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}