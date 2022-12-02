import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const DetailClient = () => {

    const [profil, setProfil] = useState({});
    let id = window.location.pathname.split('/')[2];
   
        
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/profil/${id}`).then((response) => {
            setProfil(response.data[0]);
        }).catch(error => {
            setError(error);
        });
        }, []);

       

    return (

        <div className='container p-4 m-3'>
            <h1 className=' font-weight-bold text-center mt-5 py-5'>Detail Profil</h1>
            <div className='col-md-12'>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Courriel :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.courriel}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Nom :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.nom}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Prenom :</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.prenom}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Date d'anniversaire</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.anniversaire}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Adresse</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.adresse}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Code postal</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.code_postal}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Telephone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.telephone}
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Ville</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {profil.ville}
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='btn btn-primary m-3' to='/ModifierProfil/{profil.id}'>Modifier</Link>
                <Link className='btn btn-primary m-3' to='/'>Retour</Link>
            </div>
        </div>
    );
}

export default DetailClient;
