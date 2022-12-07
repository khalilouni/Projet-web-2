import { useState } from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
import {FormattedMessage} from 'react-intl';
import {URL} from "../../constantes";


const ModificationClient = () => {

    const { id } = useParams();
    const [profil, setProfil] = useState([]);
    const [villes, setVilles] = useState([]);
    const inputCourriel = useRef(null);
    const inputNom = useRef(null);
    const inputPrenom = useRef(null);
    const inputAnniversaire = useRef(null);
    const inputAdresse = useRef(null);
    const inputCodePostal = useRef(null);
    const inputVilleId = useRef(null);
    const inputTelephone = useRef(null);
    const inputCellulaire = useRef(null);

    const getProfil = async () => {
        
        const { data } = await axios.get(`${URL}/api/v1/profil/${id}`)
        setProfil(data[0]);
        
    };

    const getVilles =  () => {
        axios.get(`${URL}/api/v1/ville`)
        .then(res => {
            setVilles(res.data)
            console.log(res.data);  
        })
    };

    useEffect(() => {
        getProfil();
        getVilles();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(profil);
        axios.put(`${URL}/api/v1/profil/${id}`, profil)
            .then(res => {
                console.log(res.data);
            })

    }


    return (
        <div className="container p-4 m-3">
            <form className='form px-5 border-opacity-25 rounded bg-light' onSubmit={onSubmit}>
                <h1 className=' font-weight-bold text-center text-dark mt-5 py-5'><FormattedMessage id="titre.form_modification"/></h1>
                <div className="mb-3">
                    <label htmlFor="courriel" className="form-label"><FormattedMessage id="courriel.form_inscription"/></label>
                    <input
                        ref={inputCourriel}
                        type="email"
                        name="courriel"
                        defaultValue={profil.courriel}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,courriel:inputCourriel.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label"><FormattedMessage id="nom.form_inscription"/></label>
                    <input
                        ref={inputNom}
                        type="text"
                        name="nom"
                        defaultValue={profil.nom}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,nom:inputNom.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label"><FormattedMessage id="prenom.form_inscription"/></label>
                    <input
                        ref={inputPrenom}
                        type="text"
                        name="prenom"
                        defaultValue={profil.prenom}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,prenom:inputPrenom.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="anniversaire" className="form-label"><FormattedMessage id="anniversaire.form_inscription"/></label>
                    <input
                        ref={inputAnniversaire}
                        type="date"
                        name="anniversaire"
                        defaultValue={profil.anniversaire}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,anniversaire:inputAnniversaire.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse" className="form-label"><FormattedMessage id="adresse.form_inscription"/></label>
                    <input
                        ref={inputAdresse}
                        type="text"
                        name="adresse"
                        defaultValue={profil.adresse}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,adresse:inputAdresse.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="code_postal" className="form-label"><FormattedMessage id="codePostal.form_inscription"/></label>
                    <input
                        ref={inputCodePostal}
                        type="text"
                        name="code_postal"
                        defaultValue={profil.code_postal || ''}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,code_postal:inputCodePostal.current.value})}
                    />
                </div>
                
                
                <div className="mb-3">
                    <label htmlFor="telephone" className="form-label"><FormattedMessage id="telephone.form_inscription"/></label>
                    <input
                        ref={inputTelephone}
                        type="text"
                        name="telephone"
                        defaultValue={profil.telephone || ''}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,telephone:inputTelephone.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cellulaire" className="form-label"><FormattedMessage id="cellulaire.form_inscription"/></label>
                    <input
                        ref={inputCellulaire}
                        type="text"
                        name="cellulaire"
                        defaultValue={profil.cellulaire || ''}
                        className="form-control"
                        onChange={(e) => setProfil({...profil,cellulaire:inputCellulaire.current.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="villeId" className="form-label"><FormattedMessage id="ville.form_inscription"/></label>
                    <select name="villeId" ref={inputVilleId}  onChange={(e) => setProfil({...profil,villeId:inputVilleId.current.value})} className="form-select" aria-label="Default select example">
                        <option>Choissir une ville</option>
                        {villes.map((ville) => <option key={ville.id} value={ville.id}>{ville.nom}</option>)}
                        
                    </select>
                </div>
                <div className="mb-3 ">
                    <button type="submit" className="btn btn-primary"><FormattedMessage id="modifier.form_inscription"/></button>
                    <Link className='btn btn-primary m-3' to='/'><FormattedMessage id="back.form_inscription"/></Link>
                </div>

            </form>
        </div>

    );
}

export default ModificationClient;
