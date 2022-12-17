import {useState, useEffect} from 'react'
import CardVoiture from "./CardVoiture";
import FormFilter from "./FormFilter";
import {FormattedMessage} from "react-intl";
import axios from 'axios'

const ListeVoitures = () => {

    let voituresInitiales = JSON.parse(localStorage.getItem('voituresInitiales'))
    if(voituresInitiales) {
        voituresInitiales=JSON.parse(localStorage.getItem('voituresInitiales'))
    }
    const [voitures, setVoitures] = useState(voituresInitiales)
    const [selectConstructeurs, setSelectConstructeurs] = useState([])

    useEffect(() => {
        const getVoitures = async () => {
            if(!voituresInitiales) {
                const res = await fetch('http://127.0.0.1:8000/api/v1/voiture')
                const data = await res.json()
                setVoitures(await data)
            }
        }
        getVoitures()
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/constructeur')
            .then(res=> {
                setSelectConstructeurs(res.data)
            })
    }, [])

    const getResultat = (props)=>{
        setVoitures(props)
    }

    return (
        <div>
            <h1><FormattedMessage id="voitures.titre"/></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FormFilter
                            size={"22rem"}
                            getResultat ={getResultat}
                            constructeurs = {selectConstructeurs}
                        />
                    </div>
                    <div className="col">
                        <div className="row">
                            {
                                voitures?
                                voitures.map((voiture) => (
                                <div className="col" key={voiture.id}>
                                    <CardVoiture voiture={voiture}/>
                                </div>
                            )):<div>Nous sommes sur le point de trouver la voiture que vous voulez pour vous. Merci de revenir la prochaine fois.</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListeVoitures;
