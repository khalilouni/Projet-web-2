import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* pour changement de langue */
import { FormattedMessage } from 'react-intl';
/* css */
import '../../css/voitureDetail.css';

/* import image statique pour test rendu affichage*/
import test from './img/voiture-test.jpg'

import {URL} from "../constantes";


const VoitureDetail = () => {
    
    let { id } = useParams();

    const [voiture, setVoiture] = useState();

    const getData = async () => {
        const { data } = await axios.get(`${URL}/api/v1/voiture/${id}`);
        setVoiture(data[0]);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <React.Fragment>
            <div className="details-title">
                <div className="details-title-container">
                    {voiture && voiture.modele.constructeur.nom}-{voiture && voiture.modele.nom}-{voiture && voiture.modele.annee}
                </div>
                <div className="details-title-container-price">
                    $CAD {voiture && voiture.prix}
                </div>
                <div className='detail-container-btn'>
                    <button type="button" className="btn btn-primary">
                        <FormattedMessage id="voitureDetail.reserver"/>
                    </button>
                </div> 
                <div className='detail-container-btn'>
                    <button type="button" className="btn btn-primary">
                        <FormattedMessage id="voitureDetail.acheter"/>
                    </button>
                </div>
            </div>
            <div className="detail-general-wrapper">
                <div className="details-wrapper-left-img">
                    <img src={test} alt="image de test"/>
                </div>
                <div className="detail-wrapper-right">
                    <div className="detail-contour-right">
                        <div className="detail-wrap-right">
                            <FormattedMessage id="voitureDetail.constructeur"/>
                        </div>
                        <div className="detail-wrap-left">
                            {voiture && voiture.modele.constructeur.nom}
                        </div>
                    </div>
                    <div className="detail-contour-right">
                        <div className="detail-wrap-right">
                            <FormattedMessage id="voitureDetail.modele"/>
                        </div>
                        <div className="detail-wrap-left">
                            {voiture && voiture.modele.nom} 
                        </div>
                    </div>
                    <div className="detail-contour-right">
                        <div className="detail-wrap-right">
                            <FormattedMessage id="voitureDetail.annee"/>
                        </div>
                        <div className="detail-wrap-left">
                            {voiture && voiture.modele.annee}
                        </div>
                    </div>
                    <div className="detail-contour-right">
                        <div className="detail-wrap-right">
                            <FormattedMessage id="voitureDetail.carburant"/>
                        </div>
                        <div className="detail-wrap-left">
                            {voiture && voiture.carburant.type}
                        </div> 
                    </div> 
                    <div className="detail-contour-right">
                        <div className="detail-wrap-right">
                            <FormattedMessage id="voitureDetail.transmission"/>
                        </div>
                        <div className="detail-wrap-left">
                            {voiture && voiture.transmission.type}
                        </div>
                    </div>
                    <div className="detail-contour-right">
                        <div className="detail-wrap-right">
                            <FormattedMessage id="voitureDetail.carrosserie"/>
                        </div>
                        <div className="detail-wrap-left">
                            {voiture && voiture.carrosserie.type}
                        </div>
                    </div>   
                </div>
            </div>
        </React.Fragment>
    )
}

export default VoitureDetail



 