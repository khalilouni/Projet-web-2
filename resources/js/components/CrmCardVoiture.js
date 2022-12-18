import { Link } from 'react-router-dom'
import {FormattedMessage} from "react-intl";

/* css */
import '../../css/cardsVoiture.css';

const CrmCardVoiture = ({size, width, height,voiture}) => {

    const photo = voiture.photos.filter(photo => photo.primaire === 1)[0]
    const statut = voiture.statutId
    const statutIntl = `statut.${statut}`
    console.log(voiture)

    return(
        <div className="card px-0" style={{ width: width, height: height,opacity:(statut===3)?1:0.5}}>

             <Link className="text-decoration-none"  to={`/crm/voiture/${voiture.id}`} style={{pointerEvents:(statut===3)?'auto':'none'}}>
                    <img src={`/storage/${photo.path}`} style={{ width: size}} alt="Voiture blanche" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold card-font">{voiture.modele.constructeur.nom}  - {voiture.modele.nom}</h5>
                        <div className="card-text text-black d-flex justify-content-between">
                            <p className="">{voiture.kilometrage}km</p>
                            <p className="fw-bold fs-4">{voiture.prix} $</p>
                        </div>
                        {statut===3?'': <span className="badge rounded-pill text-bg-warning"><FormattedMessage id={statutIntl}/></span>}
                    </div>
             </Link>


        </div>
    )
}

CrmCardVoiture.defaultProps = {
    size: '100%',
    width: '18rem',
    height: '25rem',
}

export default CrmCardVoiture
