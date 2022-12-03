import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {FormattedMessage} from 'react-intl';



const InscriptionClient = () => {

    
    const [courriel,setCourriel] = useState('');
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [anniversaire,setAnniversaire] = useState('');
    const [adresse,setAdresse] = useState('');
    const [codePostal,setCodePostal] = useState('');
    const [ville,setVille] = useState('');
    const [telephone,setTelephone] = useState('');
    const [cellulaire,setCellulaire] = useState('');

    let message = "";


    const onSubmit = (e) => {
        e.preventDefault();
        let donneesClient = {}
        donneesClient.courriel = courriel
        donneesClient.nom = nom
        donneesClient.prenom = prenom
        donneesClient.anniversaire = anniversaire
        donneesClient.adresse = adresse
        donneesClient.code_postal = codePostal
        donneesClient.ville = ville
        donneesClient.telephone = telephone
        donneesClient.cellulaire = cellulaire

       axios({
           method: 'post',
           url: 'http://127.0.0.1:8000/api/v1/inscriptionClient',
           data: donneesClient,
       })
           .then(res => {
               message = res.data.message;
               console.log(message);
           }).catch(e  => {
            console.log(e);
       })

     }


    return (
                <div className="container p-4 m-3">
                    <form className='form px-5 border-opacity-25 rounded bg-light' onSubmit={onSubmit}>
                        <h1 className=' font-weight-bold text-center text-dark mt-5 py-5'><FormattedMessage id="titre.form_inscription"/></h1>
                        <div className="mb-3">
                            <label htmlFor="courriel" className="form-label"><FormattedMessage id="courriel.form_inscription"/></label>
                            <input
                                type="email"
                                name="courriel"
                                className="form-control"
                                onChange={(e) => setCourriel(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nom" className="form-label"><FormattedMessage id="nom.form_inscription"/></label>
                            <input
                                type="text"
                                name="nom"
                                className="form-control"
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prenom" className="form-label"><FormattedMessage id="prenom.form_inscription"/></label>
                            <input
                                type="text"
                                name="prenom"
                                className="form-control"
                                onChange={(e) => setPrenom(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="anniversaire" className="form-label"><FormattedMessage id="anniversaire.form_inscription"/></label>
                            <input
                                type="date"
                                name="anniversaire"
                                className="form-control"
                                onChange={(e) => setAnniversaire(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="adresse" className="form-label"><FormattedMessage id="adresse.form_inscription"/></label>
                            <input
                                type="text"
                                name="adresse"
                                className="form-control"
                                onChange={(e) => setAdresse(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="code_postal" className="form-label"><FormattedMessage id="codePostal.form_inscription"/></label>
                            <input
                                type="text"
                                name="code_postal"
                                className="form-control"
                                onChange={(e) => setCodePostal(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ville" className="form-label"><FormattedMessage id="ville.form_inscription"/></label>
                            <input
                                type="text"
                                name="ville"
                                className="form-control"
                                onChange={(e) => setVille(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telephone" className="form-label"><FormattedMessage id="telephone.form_inscription"/></label>
                            <input
                                type="text"
                                name="telephone"
                                className="form-control"
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cellulaire" className="form-label"><FormattedMessage id="cellulaire.form_inscription"/></label>
                            <input
                                type="text"
                                name="cellulaire"
                                className="form-control"
                                onChange={(e) => setCellulaire(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 ">
                            <button type="submit" className="btn btn-primary"><FormattedMessage id="submit.form_inscription"/></button>
                            <Link className='btn btn-primary m-3' to='/'><FormattedMessage id="back.form_inscription"/></Link>
                        </div> 
                    </form>
                </div>
        
       
    );
}

export default InscriptionClient;
