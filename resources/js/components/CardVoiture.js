import { Link } from 'react-router-dom'
/* css */
import '../../css/cardsVoiture.css';

const CardVoiture = ({voiture}) => {

    const photo = voiture.photos.filter(photo => photo.primaire === 1)[0];
    // console.log(photo);

    return(
        <div className="card px-0" style={{ width: '18rem', height: '25rem'}}>
            <Link className="text-decoration-none"  to={`/app/voiture/${voiture.id}`}>
                <img src={`/storage/${photo.path}`} style={{ width: '100%'}} alt="Voiture blanche" />
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

export default CardVoiture
