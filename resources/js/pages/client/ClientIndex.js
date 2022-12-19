import {useContext,useState,useEffect} from "react"
import {Context} from "../../components/LangueWrapper"
import Auth from "../../route/Auth"
import {URL} from "../../constantes";
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import {Link, useParams} from 'react-router-dom'

const ClientIndex = ( ) => {

    const context = useContext(Context)
    const {nomAuthed} = Auth();
    const [panier, setPanier] = useState([]); 
    const [profil, setProfil] = useState({});
    const [reservations, setReservations] = useState([]);
    const token = localStorage.getItem('tk');


    
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("tk");
    

    const viderPanier = () => {

       
        localStorage.removeItem('voitures');
        setPanier([]);
        

    }
    const reserverToPanier = () => {

        let reserve = JSON.parse(localStorage.getItem('reservations'));
        
        if (localStorage.voitures) {

            let voitures = JSON.parse(localStorage.getItem('voitures'));
            let panierNouveau = reserve.concat(voitures);
            localStorage.setItem('voitures', JSON.stringify(panierNouveau));
            setPanier(JSON.parse(localStorage.getItem('voitures')));
            
        }
        else {

            localStorage.setItem('voitures', JSON.stringify(reserve));
            setPanier(JSON.parse(localStorage.getItem('voitures')));
        }
        localStorage.removeItem('reservations');
        setReservations([]);

        
    }



    const getPanier = () => {
        setPanier(JSON.parse(localStorage.getItem('voitures')));
        setReservations(JSON.parse(localStorage.getItem('reservations')))
    }



    const getProfil = () => {
        let userId = JSON.parse(localStorage.getItem('idAuthed'));
        
        
        axios({
            url: `${URL}/api/v1/profil-userId/${userId}`
        })
            .then((response) => {
                console.log(response);
                setProfil(response.data[0]);
        })
    }

    useEffect(() => {
        getProfil();
        getPanier();
    },[])

    return(
        <div className='mb-5'>
            <div className="col-12">
                <div className="card p-3 m-5">
                    <div className="card-body border p-0">
                        <p>
                            <a className="btn btn-secondary w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold"><FormattedMessage id="titre.collapse-profil" /></span>
                                <span className="fab fa-cc-paypal">
                                </span>
                            </a>
                        </p>
                        <div className="collapse p-3 pt-0" id="collapseExample">
                            <div className="row">
                                <div className='m-5'>
                                    <p><strong><FormattedMessage id="prenom.form_inscription" /> : </strong>{profil.prenom}</p>
                                    <p><strong><FormattedMessage id="nom.form_inscription" /> : </strong>{profil.nom}</p>
                                    <p><strong><FormattedMessage id="anniversaire.form_inscription" /> : </strong>{profil.anniversaire}</p>
                                    <p><strong><FormattedMessage id="adresse.form_inscription" /> : </strong>{profil.anniversaire}</p>
                                    <p><strong><FormattedMessage id="ville.form_inscription" /> : </strong>{profil.adresse}</p>
                                    <p><strong><FormattedMessage id="telephone.form_inscription" /> : </strong>{profil.telephone}</p>
                                </div>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <Link className='btn btn-reserver' to={`/app/modifier-profil/${profil.id}`}><FormattedMessage id="btn.modifier-profil" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body border p-0 align-content-center">
                        <p>
                            <a className="btn btn-secondary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold"><FormattedMessage id="titre.collapse-panier" /> {panier ? <span>  {panier.length} </span> : "est vide" }</span>
                                <span className="">
                                    <span className="fab fa-cc-amex"></span>
                                    <span className="fab fa-cc-mastercard"></span>
                                    <span className="fab fa-cc-discover"></span>
                                </span>
                            </a>
                        </p>
                        <div className="collapse show p-3 pt-0" id="collapseExample">
                            <div className="row">
                                {panier ? <div className="my-4">
                                        <h2>{panier.length} Voitures</h2>
                                        <table className="table">
                                            <thead>
                                            
                                                <tr>
                                                    <th scope="col"><FormattedMessage id="voitureDetail.modele" /></th>
                                                    <th scope="col"><FormattedMessage id="voitureDetail.constructeur" /></th>
                                                    <th scope="col"><FormattedMessage id="voitureDetail.kilometrage" /></th>
                                                    <th scope="col"><FormattedMessage id="ajout_voiture.form_label_prix" /></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {panier.map((voiture) => 
                                                        <tr key={voiture.id}>
                                                            <td>{voiture && voiture.modele.nom}</td>
                                                            <td>{voiture && voiture.modele.constructeur.nom}</td>
                                                            <td>{voiture && voiture.kilometrage}</td>
                                                            <td>{voiture && voiture.prix}</td>
                                                        </tr>
                                                    )}
                                            </tbody>
                                        </table>
                                        <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                            <a href="/app/nouvelle-commande" type="button"  className="btn btn-reserver">
                                                <FormattedMessage id="panier.commander"/>
                                            </a>
                                            <button type="button" onClick={viderPanier} className="btn btn-outline-danger mx-3">
                                                <FormattedMessage id="vider.panier"/>
                                            </button>
                                        </div>
                                        
                                </div> : <h3><FormattedMessage id="panier.vide" /></h3>} 
                            </div>
                        </div>
                    </div>
                    <div className="card-body border p-0 align-content-center">
                        <p>
                            <a className="btn btn-secondary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold"><FormattedMessage id="titre.collapse-reservation" /> {reservations ? <span>  {reservations.length} </span> : "" }</span>
                                <span className="">
                                    <span className="fab fa-cc-amex"></span>
                                    <span className="fab fa-cc-mastercard"></span>
                                    <span className="fab fa-cc-discover"></span>
                                </span>
                            </a>
                        </p>
                        <div className="collapse show p-3 pt-0" id="collapseExample">
                            <div className="row">
                                {reservations ? <div className="my-4">
                                        <h2>{reservations.length} Voitures</h2>
                                        <table className="table">
                                            <thead>
                                            
                                                <tr>
                                                    <th scope="col"><FormattedMessage id="voitureDetail.modele" /></th>
                                                    <th scope="col"><FormattedMessage id="voitureDetail.constructeur" /></th>
                                                    <th scope="col"><FormattedMessage id="voitureDetail.kilometrage" /></th>
                                                    <th scope="col"><FormattedMessage id="ajout_voiture.form_label_prix" /></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {reservations.map((voiture) => 
                                                        <tr key={voiture.id}>
                                                            <td>{voiture && voiture.modele.nom}</td>
                                                            <td>{voiture && voiture.modele.constructeur.nom}</td>
                                                            <td>{voiture && voiture.kilometrage}</td>
                                                            <td>{voiture && voiture.prix}</td>
                                                        </tr>
                                                    )}
                                            </tbody>
                                        </table>
                                        <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                            <button type="button" onClick={reserverToPanier} className="btn btn-reserver">
                                                <FormattedMessage id="voitureDetail.panier"/>
                                            </button>
                                        </div>
                                </div> : <h3><FormattedMessage id="panier.vide" /></h3>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default ClientIndex
