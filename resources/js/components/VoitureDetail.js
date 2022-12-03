import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* pour changement de langue */
import { FormattedMessage } from 'react-intl';
import '../../css/voitureDetail.css';
/* import image statique pour test affichage*/
import soon from '../../../public/images/com-soon.png'

const VoitureDetail = () => {
    let { id } = useParams();

    const [voiture, setVoiture] = useState();

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/v1/voiture/${id}`);
        setVoiture(data[0]);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <React.Fragment>
            <div className="details-title-container">
                <div>{voiture && voiture.modele.constructeur.nom}-{voiture && voiture.modele.nom}-{voiture && voiture.modele.annee}</div>
            </div>
            
            <div className="details-wrapper">
                
                <div className="details-container-left-img"> 
                    <img src={soon} alt="image par default"/>
                </div>
                    
                <div className="details-wrapper-left">
                    <div className="details-container-middle"> 
                        <div className = "details-infos-letf">
                            <div className='details-list-title'>Constructeur :</div>
                            <div className='details-list-title'>Modele :</div>
                            <div className='details-list-title'>Année :</div>
                            <div className='details-list-title'>Carburant :</div>
                            <div className='details-list-title'>Transmission :</div>
                            <div className='details-list-title'>Carrosserie :</div> 
                        </div>
                    </div>
                </div>  
                
                <div className = "details-container-right">
                    <div className='details-list'>{voiture && voiture.modele.constructeur.nom}</div>
                    <div className='details-list'>{voiture && voiture.modele.nom}</div>
                    <div className='details-list'>{voiture && voiture.modele.annee}</div>
                    <div className='details-list'>{voiture && voiture.carburant.type}</div>
                    <div className='details-list'>{voiture && voiture.transmission.type}</div>
                    <div className='details-list'>{voiture && voiture.carrosserie.type}</div>   
                </div>
                <div className='detail-container-achat'>
                    bouton acheter ici
                </div>
            </div>

        </React.Fragment>
    )
}

export default VoitureDetail
