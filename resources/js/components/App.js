import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter, HashRouter} from 'react-router-dom'
import Inscription from '../pages/register/Inscription'
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout'
import VoitureDetail from './VoitureDetail';
/* pour changement de langue */
import LangueWrapper from './LangueWrapper';
import '../../css/app.css';
import InscriptionClient from '../pages/register/InscriptionClient';
import ModificationClient from '../pages/register/ModificationClient';
import DetailClient from '../pages/register/DetailClient';
import ListeVoitures from "./ListeVoitures";
import Home from './Home';
import Connexion from "../pages/register/Connexion";
import ClientIndex from "../pages/client/ClientIndex";
import AjoutVoiture from "../pages/register/AjoutVoiture";
import NouvelleCommande from "../pages/register/PasserCommande";
import {AuthProvider, RequireAuth} from '../route/Auth.js'

function App() {
    return (
      <AuthProvider>
        <LangueWrapper>

            <Routes>
                <Route element={<Layout/>}>

                    <Route path="/voiture/liste" element={<ListeVoitures/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="/voiture/:id" element={<VoitureDetail/>}/>
                    <Route path="/connexion" element={<Connexion/>}/>
                    <Route path="/register" element={<Inscription/>}/>

                    <Route path="/ajout-voiture" element={<AjoutVoiture />} />
                    <Route path="/nouvelle-commande/:id" element={<NouvelleCommande />}/>
                    
                    <Route path="/inscription-client/:id" element={
                        <RequireAuth>
                            <InscriptionClient/>
                        </RequireAuth>
                    }/>
                    <Route path="/modifier-profil/:id" element={
                        <RequireAuth>
                            <ModificationClient/>
                        </RequireAuth>
                    }/>
                    <Route path="/detail-profil/:profil" element={
                        <RequireAuth>
                            <DetailClient/>
                        </RequireAuth>
                    }/>
                    <Route path="/client-index" element={
                        <RequireAuth>
                            <ClientIndex/>
                        </RequireAuth>
                    }/>
                    <Route path="*" element={<Home/>}/>

                </Route>

            </Routes>

        </LangueWrapper>
      </AuthProvider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
}
