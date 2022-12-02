import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Inscription from '../pages/register/Inscription'
import Header from './Header';
import Footer from './Footer';
import VoitureDetail from './VoitureDetail';
/* pour changement de langue */
import LangueWrapper from './LangueWrapper';
import '../../css/app.css';
import InscriptionClient from '../pages/register/InscriptionClient';
import ModificationClient from '../pages/register/ModificationClient';
import DetailClient from '../pages/register/DetailClient';
import ListeVoitures from "./ListeVoitures";

function App() {
    return (
      <LangueWrapper>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path="/voiture/liste" element={<ListeVoitures  />} />
            <Route path="/register" element={<Inscription  />} />
            <Route path="/voiture/:id" element={<VoitureDetail />} />
            <Route path="/inscriptionClient" element={<InscriptionClient  />} />
            <Route path="/ModifierProfil/:profil" element={<ModificationClient   />} />
            <Route path="/detailProfil/:profil" element={<DetailClient   />} />
          </Routes>
        </div>
        <Footer/>
      </LangueWrapper>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
