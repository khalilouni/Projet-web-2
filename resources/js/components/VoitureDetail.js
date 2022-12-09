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
            <div className='wrapper-detail d-flex flex-column w-100 m-auto'>

                {/* titre */}
                <div className='container-title w-100 d-flex py-3 px-5 justify-content-between'>
                    <div className='container-title-left w-50'>
                        {voiture && voiture.modele.constructeur.nom}-{voiture && voiture.modele.nom}-{voiture && voiture.modele.annee}
                    </div>
                    <div className='container-title-right w-50 d-flex justify-content-end'>
                       {voiture && voiture.prix}$ 
                    </div>
                </div>

                {/* contenu */}
                <div className='container-detail d-flex flex-wrap w-100 justify-content-around'>

                    <div className='container-detail-left p-3'>
                        {/* image primary*/}
                        <div className='container-detail-left-img-primary p-3 flex-column flex-wrap'>
                            <img src={test} className="w-100" alt="image de test"/>
                        </div>

                        {/* images secondary */}
                        <div className='container-detail-left-img-secondary w-100 p-3 d-flex justify-content-around'>
                            {/* image2 */}
                            <div className='container-detail-left-img-secondary-wrap justify-content-around'>
                                <img src={test} className="w-100 p-2 " alt="image de test"/>
                            </div> 

                            {/* image3 */}
                            <div className='container-detail-left-img-secondary-wrap justify-content-around '>
                                <img src={test}  className="w-100 p-2 "alt="image de test"/> 
                            </div>

                            {/* image4 */}
                            <div className='container-detail-left-img-secondary-wrap justify-content-around'>
                                <img src={test} className="w-100 p-2 " alt="image de test"/>
                            </div>
                        </div>     
                    </div>

                    {/* infos voiture */}
                    <div className='container-detail-right d-flex flex-column p-3'>
                        <div className='container-detail-right-infos container'>
                            {/* constructeur */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 p-3 d-flex'>
                                    <FormattedMessage id="voitureDetail.constructeur"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 p-3 d-flex justify-content-end'>
                                    {voiture && voiture.modele.constructeur.nom}
                                </div>
                            </div>
                        
                                {/* modele */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 p-3'>
                                    <FormattedMessage id="voitureDetail.modele"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 p-3 d-flex justify-content-end'>
                                    {voiture && voiture.modele.nom}
                                </div>
                            </div>

                                {/* annee */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 p-3'>
                                    <FormattedMessage id="voitureDetail.annee"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 p-3 d-flex justify-content-end'>
                                    {voiture && voiture.modele.annee}
                                </div>
                            </div>

                                {/*  carburant */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 p-3'>
                                    <FormattedMessage id="voitureDetail.carburant"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 p-3 d-flex justify-content-end'>
                                    {voiture && voiture.carburant.type}
                                </div>
                            </div>

                                {/* transmission */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 p-3'>
                                    <FormattedMessage id="voitureDetail.transmission"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 p-3 d-flex justify-content-end'>
                                    {voiture && voiture.transmission.type}
                                </div>
                            </div>

                                {/* carroserie */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 p-3'>
                                    <FormattedMessage id="voitureDetail.carrosserie"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 p-3 d-flex justify-content-end'>
                                    {voiture && voiture.carrosserie.type}
                                </div>
                            </div>
                        </div>

                        {/* boutons */}
                        <div className='container-detail-right-btn container d-flex w-100 p-3 justify-content-between'>

                            <div className='container-detail-right-btn-reserver container w-50 p-3 d-flex'>
                                <button type="button" className="btn btn-reserver ">
                                    <FormattedMessage id="voitureDetail.reserver"/>
                                </button>
                            </div>
                            <div className='container-detail-right-btn-acheter container w-50 p-3 d-flex d-flex justify-content-end'>
                                <button type="button" className="btn btn-acheter">
                                    <FormattedMessage id="voitureDetail.acheter"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </React.Fragment>
    )
}

export default VoitureDetail



 