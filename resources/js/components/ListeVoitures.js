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
        <div>
            {/*<div>
                <h1><FormattedMessage id="voitures.titre"/></h1>
            </div> */}
             <div className="container">
                <div className="d-flex flex-wrap">
                    <div className="d-flex flex-wrap">
                        <FormFilter size={"20rem"} />
                        { voitures.map(v => <div className="m-2" key={v.id}>
                            <CardVoiture voiture={v}/>
                    </div>)}</div>
                </div>
            </div>
        </div>
    );
}

export default ListeVoitures;
