import {FormattedMessage} from 'react-intl';  /* pour changement de langue */
import {useState, useEffect} from 'react'
/* css */
import '../../css/formFilter.css';
import axios from 'axios'
import {URL} from "../constantes";

const FormFilter = ({size, height, constructeurs,getResultat}) => {


    const [constructeurSelected, setConstructeur] = useState('')
    const [modeleSelected, setModele] = useState('')
    const [anneeSelected, setAnnee] = useState('')
    const [modelesListe,setModeleListe] = useState(null)
    const [objSelected,setObj] = useState([])

    const changeConstructeur = (e) => {
        const idConstructeur = e.target.value
        setConstructeur(idConstructeur)
        axios.get(`${URL}/api/v1/modeles/${idConstructeur}`)
            .then(res=> {
                const modeles = res.data
                setModeleListe(modeles)
            })

    }


    const changeModele = (e) => {
        const idModele = e.target.value
        setModele(idModele)


    };

    const changeAnnee = (e) => {
        const annee = e.target.value
        setAnnee(annee)
    };

    const envoyerRecherche = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            url: `${URL}/api/v1/filtre`,
            data: {constructeur:`${constructeurSelected}`,modele:`${modeleSelected}`,annee:`${anneeSelected}`}
        }).then(res => {

            getResultat(res.data.data.voitureInfo)

        })
    }


    return (
        <form className="card p-4" style={{width: size, height: height}} onSubmit={envoyerRecherche}>
            <div className="mb-3 text-center">
                <span className="fs-5 fw-bold"><FormattedMessage id="home.titre_filtre"/></span>
            </div>
            <div className="mb-3">
                <select className="form-select"
                        style={{backgroundColor: '#d9d9d9'}}
                        value={constructeurSelected}
                        onChange={(e) => changeConstructeur(e)}
                        name = 'constructeur'
                >
                    <FormattedMessage id="home.form_marque">
                        {selectOption => <option>{selectOption}</option>}
                    </FormattedMessage>
                    {constructeurs.map((c, index) => <option key={index} value={c.id}>{c.nom}</option>)}
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select"
                        style={{backgroundColor: '#d9d9d9'}}
                        value={modeleSelected}
                        onChange={(e) => changeModele(e)}
                        name='modele'
                >
                    <FormattedMessage id="home.form_modele">
                        {selectOption => <option value="">{selectOption}</option>}
                    </FormattedMessage>
                    {
                     modelesListe!==null? modelesListe.map((m, index) => <option key={index} value={m.id}>{m.nom}</option>):null
                    }
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select"
                        style={{backgroundColor: '#d9d9d9'}}
                        value={anneeSelected}
                        onChange={(e) => changeAnnee(e)}
                        name='annee'
                >
                    <FormattedMessage id="home.form_annee">
                        {selectOption => <option value="">{selectOption}</option>}
                    </FormattedMessage>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2015">2015</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2000">2000</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-filter-search btn-block"><FormattedMessage
                    id="home.form_rechercher"/></button>
            </div>
        </form>
    )
}

export default FormFilter;
