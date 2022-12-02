import FormFilter from "./FormFilter"
import CardVoiture from "./CardVoiture"
import {FormattedMessage} from 'react-intl'; 
import carImage from './img/com-soon.png'

const Home = () => {
    return(
        <main className='container my-5 py-5'>
            <div className="d-flex justify-content-between mb-5 py-3">
                <FormFilter />
                <img className='col-sm-8 rounded' src={carImage} alt="Voiture blanche" />
            </div>
            <div className="py-3">
                <h2><FormattedMessage id="home.voiture_recent"/></h2>
                <div className="row d-flex justify-content-between py-3 px-5">
                    <CardVoiture />
                </div>
            </div>
        </main>
    )
}

export default Home