import { useState, useEffect } from 'react';
import {FormattedMessage} from "react-intl";
import CardVoiture from './CardVoiture';
import {URL} from "../constantes";

const SelectionVoitures = () => {

    const [voitures, setVoitures] = useState([]); 

    useEffect(() => {
        const getVoitures = async () => {
            const data = await fetchVoitures()
            setVoitures(data)
        }
        getVoitures()
    }, []);

    const fetchVoitures = async () => {
        const res = await fetch(`${URL}/api/v1/voiture`)
        const data = await res.json()
        return data
    }

    return(
        <div className="container py-3 px-5">
            <div>
                <FormattedMessage id="home.voiture_recent"/>
            </div>
            <div className="container col py-3 px-5">
                <div className='row'>
                    {
                        voitures.map(
                            v => <div className="col" key={v.id}>
                                    <CardVoiture voiture={v}/>
                                </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default SelectionVoitures

