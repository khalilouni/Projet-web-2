import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'
import {FormattedMessage} from 'react-intl';
import {URL} from "../../constantes";


const DetailClient = () => {

    const [profil, setProfil] = useState({});
    const { id } = useParams();
   
        
    
    useEffect(() => {
        axios.get(`${URL}/api/v1/profil/${id}`).then((response) => {
            setProfil(response.data[0]);
        }).catch(error => {
            setError(error);
        });
        }, []);

       

    return (

        <div className='container p-4 m-3 '>
            <h1 className=' font-weight-bold text-center mt-5 py-5'><FormattedMessage id="titre.detail_client"/></h1>
            <div className='col-md-12 '>
                <div className="card mb-3">
                    <div className="card-body bg-light">
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="courriel.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.courriel}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="nom.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.nom}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="prenom.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.prenom}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="anniversaire.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.anniversaire}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="adresse.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.adresse}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="codePostal.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.code_postal}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="telephone.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.telephone}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0"><FormattedMessage id="ville.form_inscription"/> :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.ville}
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='btn btn-primary m-3' to={`/modifier-profil/${profil.id}`}><FormattedMessage id="modifier.form_inscription"/></Link>
                <Link className='btn btn-primary m-3' to='/'><FormattedMessage id="back.form_inscription"/></Link>
            </div>
        </div>
    );
}

export default DetailClient;
