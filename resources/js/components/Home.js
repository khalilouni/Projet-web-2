import FormFilter from "./FormFilter"
import SelectionVoiture from "./SelectionVoiture"
import {FormattedMessage} from 'react-intl'; 
import carImage from './img/com-soon.png'

const Home = () => {
    return(
        <main className='container my-5 py-5'>
            <div className="d-flex justify-content-between mb-5 py-3">
                <FormFilter />
                <img className='col-sm-8 rounded' style={{ border: 'solid 1px gray'}} src={carImage} alt="Voiture blanche" />
            </div>
            <SelectionVoiture />
        </main>
    )
}

export default Home