import FormFilter from "./FormFilter"
import SelectionVoiture from "./SelectionVoiture"
import {FormattedMessage} from 'react-intl'; 
/* import carImage from './img/com-soon.png' */

/* photo voiture presentation*/
import voiture from './img/voiture-presentation.png';

/* css */
import '../../css/home.css';

const Home = () => {
    return(
        <main className='container'>
            <div className="container-bandeau-filtres">
                <div className="d-flex justify-content-between mb-5 py-3 flex-container">
                    <FormFilter/>
                    <div className="img-presentation-wrapper">
                        <img className='col-sm-8 rounded img-presentation-container' src={voiture} alt="Voiture de présentation"/>
                    </div> 
                </div>
            </div>
            <SelectionVoiture />
        </main>
    )
}

export default Home