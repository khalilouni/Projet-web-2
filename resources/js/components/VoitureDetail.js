import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
/* pour changement de langue */
import { FormattedMessage } from 'react-intl';
/* css */
import '../../css/voitureDetail.css';


/* import image statique pour test rendu affichage*/
import test from './img/voiture-test.jpg'
import { ToastContainer, toast } from 'react-toastify';

import {URL} from "../constantes";
import axios from 'axios';


const VoitureDetail = () => {
    
    let { id } = useParams();
    const navigate = useNavigate();
    const [voiture, setVoiture] = useState();
    const [imagePrimaire, setImagePrimaire] = useState();
    const [imageSecondaires, setImageSecondaires] = useState();
    
    const ajoutReservation = () => {

        if (localStorage.reservations) {
            let panier = JSON.parse(localStorage.getItem('reservations'));
            panier = panier.filter(voiturePanier => voiturePanier.id != voiture.id);
            panier.push(voiture);
            localStorage.setItem(`reservations`, JSON.stringify(panier));
        }else {
            let panier = [];
            panier.push(voiture);
            localStorage.setItem(`reservations`, JSON.stringify(panier));
        }

        axios({
            method: 'post',
            url: `${URL}/api/v1/voiture-reserver/${voiture.id}`
        }).then(res => {
            console.log(res.data);
        })
        toast.success(<FormattedMessage id={"reservation_success"} /> , {
            position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
            navigate("/app/client-index")
        }, 2000);
        
    }


    const ajoutPanier = () => {

        if (localStorage.voitures) {
            
            let panier = JSON.parse(localStorage.getItem('voitures'));
            panier = panier.filter(voiturePanier => voiturePanier.id != voiture.id);
            panier.push(voiture);
            localStorage.setItem(`voitures`, JSON.stringify(panier));
            
            
        }else {

            
            let panier = [];
            panier.push(voiture);
            localStorage.setItem(`voitures`, JSON.stringify(panier));
            
        }
        toast.success(<FormattedMessage id={"ajout_panier_success"} /> , {
            position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
            navigate("/app/client-index")
        }, 3000);
        


    }

    const getData = async () => {

        const { data } = await axios.get(`${URL}/api/v1/voiture/${id}`);
        setVoiture(data);
        
        const photos = data.photos;

        const primaire = photos.filter(photo => photo.primaire === 1);
        setImagePrimaire(primaire[0]);

        const secondaire = photos.filter(photo => photo.primaire === 0);
        setImageSecondaires(secondaire);
        
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <React.Fragment>
            <div className='wrapper-detail d-flex flex-column w-100 m-auto'>
                <ToastContainer />
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
                            {imagePrimaire && <img src={`/storage/${imagePrimaire.path}`} className="w-100" alt="image"/>}
                        </div>

                        {/* images secondary */}
                        <div className='container-detail-left-img-secondary w-100 p-3 d-flex justify-content-around'>
                            {imageSecondaires && imageSecondaires.map((photo, index) =>(
                                <div key={index} className='container-detail-left-img-secondary-wrap justify-content-around'>
                                    <img src={`/storage/${photo.path}`} className="w-100 p-2 " alt="image"/>
                                </div> 
                            ))}
                        </div>     
                    </div>

                    {/* infos voiture */}
                    <div className='container-detail-right d-flex flex-column p-3'>
                        <div className='container-detail-right-infos container'>
                            {/* kilometrage */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50'>
                                    <FormattedMessage id="voitureDetail.kilometrage"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.kilometrage}
                                </div>
                            </div>

                            {/* constructeur */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <FormattedMessage id="voitureDetail.constructeur"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.modele.constructeur.nom}
                                </div>
                            </div>
                        
                                {/* modele */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <FormattedMessage id="voitureDetail.modele"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.modele.nom}
                                </div>
                            </div>

                                {/* annee */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <FormattedMessage id="voitureDetail.annee"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.modele.annee}
                                </div>
                            </div>

                                {/*  carburant */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <FormattedMessage id="voitureDetail.carburant"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.carburant.type}
                                </div>
                            </div>

                                {/* transmission */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <FormattedMessage id="voitureDetail.transmission"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.transmission.type}
                                </div>
                            </div>

                                {/* carroserie */}
                            <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <FormattedMessage id="voitureDetail.carrosserie"/>
                                </div>
                                <div className='container-detail-right-infos-wrap-right w-50 d-flex justify-content-end'>
                                    {voiture && voiture.carrosserie.type}
                                </div>
                            </div>
                        </div>

                        {/* boutons */}
                        <div className='container-detail-right-infos-wrap w-100 p-3 d-flex justify-content-between'>

                            <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                <button type="button" onClick={ajoutReservation} className="btn btn-reserver ">
                                    <FormattedMessage id="voitureDetail.reserver"/>
                                </button>
                            </div>
                            <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                <button type="button" onClick={ajoutPanier} className="btn btn-reserver">
                                    <FormattedMessage id="voitureDetail.panier"/>
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



 