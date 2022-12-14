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
        <div className='container'>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'>Espace de gestion client</h1>
            <h4>Bienvenue cher {nomAuthed}</h4>
            <div className="my-4">
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
                    <button type="button"  className="btn btn-reserver">
                        <FormattedMessage id="panier.commander"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClientIndex
