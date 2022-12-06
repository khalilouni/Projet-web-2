import { Component, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {URL} from "../../constantes";

class  InscriptionClient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courriel : '',
            nom : '',
            prenom : '',
            adresse : '',
            telephone : '',
            code_postal : '',
            cellulaire : '',
            anniversaire : '',
            villeId: '',
            villes : [],
            error_courriel : '',
            error_nom : '',
            error_prenom : '',
            error_adresse : '',
            error_anniversaire : '',
            error_telephone : '',
            error_cellulaire : '',
            error_code_postal : '',
        }


        this.courriel = this.courriel.bind(this);
        this.nom = this.nom.bind(this);
        this.prenom = this.prenom.bind(this);
        this.telephone = this.telephone.bind(this);
        this.code_postal = this.code_postal.bind(this);
        this.cellulaire = this.cellulaire.bind(this);
        this.anniversaire = this.anniversaire.bind(this);
        this.adresse = this.adresse.bind(this);
        this.villeId = this.villeId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/v1/ville'
        })
         .then(res => {
            this.setState({villes : res.data})
            
         })
      }
    
    courriel(e) {
        this.setState({courriel : e.target.value})
    }
    nom(e) {
        this.setState({nom : e.target.value})
    }
    prenom(e) {
        this.setState({prenom : e.target.value})
    }
    adresse(e) {
        this.setState({adresse : e.target.value})
    }
    anniversaire(e) {
        this.setState({anniversaire : e.target.value})
    }
    code_postal(e) {
        this.setState({code_postal : e.target.value})
    }
    telephone(e) {
        this.setState({telephone : e.target.value})
    }
    cellulaire(e) {
        this.setState({cellulaire : e.target.value})
    }
    villeId(e) {
        this.setState({villeId : e.target.value})
    }
   

    onSubmit (event) {
        event.preventDefault();
        const data = {
            nom: this.state.nom,
            prenom : this.state.prenom,
            adresse : this.state.adresse,
            telephone : this.state.telephone,
            cellulaire : this.state.cellulaire,
            courriel : this.state.courriel,
            anniversaire : this.state.anniversaire,
            code_postal : this.state.code_postal,
            villeId : this.state.villeId
        }
       console.log(data);
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/v1/inscriptionClient',
            data: data,
        })
         .then(res => {
             console.log(res.data);
         }).catch(error => {
            //const errors = error.response.data.errors;
            this.setState({error_courriel : error.response.data.errors.courriel});
            this.setState({error_nom : error.response.data.errors.nom});
            this.setState({error_prenom : error.response.data.errors.prenom});
            this.setState({error_adresse : error.response.data.errors.adresse});
            this.setState({error_anniversaire : error.response.data.errors.anniversaire});
            this.setState({error_code_postal : error.response.data.errors.code_postal});
            this.setState({error_telephone : error.response.data.errors.telephone});
            this.setState({error_cellulaire : error.response.data.errors.cellulaire});
            //console.log(this.state.errors);
        })
            
    }

    
   

    

    render ()   {
        return (

            <form className='form px-5 border-opacity-25 rounded'>
                <h1 className='title-form font-weight-bold text-center m-4 p-3'>Devenir Client</h1>
                <div className="mb-3">
                    <label htmlFor="courriel" className="form-label">Courriel</label>
                    <input
                        type="email"
                        name="courriel"
                        className="form-control"
                        onChange={this.courriel}
                    />
                    <span className='text-danger'>{this.state.error_courriel}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input
                        type="text"
                        name="nom"
                        className="form-control"
                        onChange={this.nom}
                    />
                    <span className='text-danger'>{this.state.error_nom}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                    <input
                        type="text"
                        name="prenom"
                        className="form-control"
                        onChange={this.prenom}
                    />
                    <span className='text-danger'>{this.state.error_prenom}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="anniversaire" className="form-label">Date de naissance</label>
                    <input
                        type="date"
                        name="anniversaire"
                        className="form-control"
                        onChange={this.anniversaire}
                    />
                    <span className='text-danger'>{this.state.error_anniversaire}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse" className="form-label">Adresse</label>
                    <input
                        type="text"
                        name="adresse"
                        className="form-control"
                        onChange={this.adresse}
                    />
                    <span className='text-danger'>{this.state.error_adresse}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="code_postal" className="form-label">Code postale</label>
                    <input
                        type="text"
                        name="code_postal"
                        className="form-control"
                        onChange={this.code_postal}
                    />
                    <span className='text-danger'>{this.state.error_code_postal}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="telephone" className="form-label">Telephone</label>
                    <input
                        type="text"
                        name="telephone"
                        className="form-control"
                        onChange={this.telephone}
                    />
                    <span className='text-danger'>{this.state.error_telephone}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="cellulaire" className="form-label">Cellulaire</label>
                    <input
                        type="text"
                        name="cellulaire"
                        className="form-control"
                        onChange={this.cellulaire}
                    />
                    <span className='text-danger'>{this.state.error_cellulaire}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="villeId" className="form-label">Ville</label>
                    <select name="villeId" onChange={this.villeId} className="form-select" aria-label="Default select example">
                        <option>Choissir une ville</option>
                        {this.state.villes.map((ville) => <option key={ville.id} value={ville.id}>{ville.nom}</option>)}
                    </select>
                </div>
                <div className="mb-3 ">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>S'inscrire</button>
                    <Link className='btn btn-primary m-3' to='/'>Retour</Link>
                </div> 
            </form>
        );
    } 
}

export default InscriptionClient;
