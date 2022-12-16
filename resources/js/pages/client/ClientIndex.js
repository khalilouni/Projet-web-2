import {useContext,useState,useEffect} from "react"
import {Context} from "../../components/LangueWrapper"
import Auth from "../../route/Auth"
import {URL} from "../../constantes";
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

const ClientIndex = ( ) => {

    const context = useContext(Context)
    const {nomAuthed} = Auth();
    const [panier, setPanier] = useState([]); 

    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("tk");

    const getPanier = () => {
        setPanier(JSON.parse(localStorage.getItem('voitures')));
    }

    useEffect(() => {
        getPanier();
        axios({
            url: `${URL}/api/v1/user`,
        })
            .then(res => {
                console.log(res.data)
            })
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
                                <span className="fw-bold">Detail de votre compte</span>
                                <span className="fab fa-cc-paypal">
                                </span>
                            </a>
                        </p>
                        <div className="collapse p-3 pt-0" id="collapseExample">
                            <div className="row">
                                <div className='m-5'>
                                    <p><strong><FormattedMessage id="prenom.form_inscription" /> : </strong></p>
                                    <p><strong><FormattedMessage id="nom.form_inscription" /> : </strong></p>
                                    <p><strong><FormattedMessage id="anniversaire.form_inscription" /> : </strong></p>
                                    <p><strong><FormattedMessage id="adresse.form_inscription" /> : </strong></p>
                                    <p><strong><FormattedMessage id="ville.form_inscription" /> : </strong></p>
                                    <p><strong><FormattedMessage id="telephone.form_inscription" /> : </strong></p>
                                </div>
                                <div className='container-detail-right-infos-wrap-left w-50 d-flex'>
                                    <a href="" type="button"  className="btn btn-reserver">
                                        Modifier vos donnees
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body border p-0 align-content-center">
                        <p>
                            <a className="btn btn-secondary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold">Votre panier {panier ? <span>  {panier.length} </span> : "est vide" }</span>
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
                                        <h2>Panier : {panier.length} Voitures</h2>
                                        <table className="table">
                                            <thead>
                                            
                                                <tr>
                                                    <th scope="col">Modele</th>
                                                    <th scope="col">Constructeur</th>
                                                    <th scope="col">kilometrage</th>
                                                    <th scope="col">Prix</th>
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
                                        </div>
                                </div> : ""} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            {/* <h1 className=' font-weight-bold  my-5'>Bienvenue cher {nomAuthed}</h1>
            
            <div className="accordion" id="accordionExample">
                <h4>Bienvenue cher {nomAuthed}</h4>
            </div>
            {panier ? <div className="my-4">
                <h2>Panier : {panier.length} Voitures</h2>
                <table className="table">
                    <thead>
                    
                        <tr>
                            <th scope="col">Modele</th>
                            <th scope="col">Constructeur</th>
                            <th scope="col">kilometrage</th>
                            <th scope="col">Prix</th>
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
                </div>
            </div> : ""} */}
        </div>
    )
}

export default ClientIndex
