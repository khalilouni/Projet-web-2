import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const ModificationClient = () => {

    const [profil, setProfil] = useState();
    let id = window.location.pathname.split('/')[2];

    const [courriel,setCourriel] = useState('');
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [anniversaire,setAnniversaire] = useState('');
    const [adresse,setAdresse] = useState('');
    const [codePostal,setCodePostal] = useState('');
    const [ville,setVille] = useState('');
    const [telephone,setTelephone] = useState('');
    const [cellulaire,setCellulaire] = useState('');
   
   
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/profil/${id}`).then((response) => {
            setProfil(response.data[0]);
        }).catch(error => {
            setError(error);
        });
      }, []);

     // console.log(profil.nom);

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
        

        axios.put(`http://127.0.0.1:8000/api/v1/profil/${id}`, donneesClient)
         .then(res => {
             console.log(res.data);
         })

     }



    return (

        <form className='form px-5 border-opacity-25 rounded' onSubmit={onSubmit}>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'>Modifier Client</h1>
            <div className="mb-3">
                <label htmlFor="courriel" className="form-label">Courriel</label>
                <input
                    type="email"
                    name="courriel"
                    className="form-control"
                    onChange={(e) => setCourriel(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input
                    type="text"
                    name="nom"
                    className="form-control"
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prenom</label>
                <input
                    type="text"
                    name="prenom"
                    className="form-control"
                    onChange={(e) => setPrenom(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="anniversaire" className="form-label">Date de naissance</label>
                <input
                    type="date"
                    name="anniversaire"
                    className="form-control"
                    onChange={(e) => setAnniversaire(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="adresse" className="form-label">Adresse</label>
                <input
                    type="text"
                    name="adresse"
                    className="form-control"
                    onChange={(e) => setAdresse(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="code_postal" className="form-label">Code postale</label>
                <input
                    type="text"
                    name="code_postal"
                    className="form-control"
                    onChange={(e) => setCodePostal(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="ville" className="form-label">Ville</label>
                <input
                    type="text"
                    name="ville"
                    className="form-control"
                    onChange={(e) => setVille(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Telephone</label>
                <input
                    type="text"
                    name="telephone"
                    className="form-control"
                    onChange={(e) => setTelephone(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cellulaire" className="form-label">Cellulaire</label>
                <input
                    type="text"
                    name="cellulaire"
                    className="form-control"
                    onChange={(e) => setCellulaire(e.target.value)}
                />
            </div>
            <div className="mb-3 ">
                <button type="submit" className="btn btn-primary">Modifier</button>
                <Link className='btn btn-primary m-3' to='/'>Retour</Link>
            </div> 
        </form>
    );
}

export default ModificationClient;
