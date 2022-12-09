import { Link } from 'react-router-dom'
import carImage from '../../../public/images/com-soon.png'

/* css */
import '../../css/cardsVoiture.css';

const CardVoiture = ({size, width, height,voiture}) => {
    return(
        <div className="card px-0" style={{ width: width, height: height}}>
            <Link className="text-decoration-none"  to={`/voiture/${voiture.id}`}>
                <img src={carImage} style={{ width: size}} alt="Voiture blanche" />
                <div className="card-body">
                    <h5 className="card-title fw-bold card-font">{voiture.modele.constructeur.nom}  - {voiture.modele.nom}</h5>
                    <div className="card-text text-black d-flex justify-content-between">
                        <p className="">110 430 km</p>
                        <p className="fw-bold fs-4">{voiture.prix} $</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

CardVoiture.defaultProps = {
    size: '100%',
    width: '18rem',
    height: '25rem',
}

export default CardVoiture
