import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Inscription from '../pages/register/Inscription'
import Header from './Header';
import Footer from './Footer';
/* pour changement de langue */
import LangueWrapper from './LangueWrapper';
import '../../css/app.css';
import InscriptionClient from '../pages/register/InscriptionClient'

function App() {
    return (
      <LangueWrapper>
        <div className='container'>
          <Header/>
          <Routes>
            {/* <Route path="/" element={<UsersListe users = {users} />} /> */}
            <Route path="/register" element={<Inscription  />} />
            <Route path="/inscriptionClient" element={<InscriptionClient  />} />
          </Routes>
          <Footer/>
        </div>
      </LangueWrapper>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
