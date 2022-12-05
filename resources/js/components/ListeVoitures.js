import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CardVoiture from "./CardVoiture";
import FormFilter from "./FormFilter";
import {FormattedMessage} from "react-intl";
import {URL} from "../constantes";

const ListeVoitures = () => {
    const [voitures, setVoitures] = useState([])
    useEffect(() => {
        const getVoitures = async () => {
            const voituresDeServeur = await fetchVoitures()
            setVoitures(voituresDeServeur)
        }
        getVoitures()
    }, [])

    const fetchVoitures = async () => {
        const res = await fetch(`${URL}/api/v1/voiture`)
        const data = await res.json()
        return data
    }
    return (
        <div >
            <h1><FormattedMessage id="voitures.titre"/></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                      <FormFilter size={"22rem"} />
                    </div>
                    <div className="col">
                        <div className="row"> {
                            voitures.map(v => <div className="col" key={v.id}>
                                <CardVoiture voiture={v}/>
                            </div>)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListeVoitures;
