import {useState, useEffect} from 'react'
import CardVoiture from "./CardVoiture";
import FormFilter from "./FormFilter";
import {FormattedMessage} from "react-intl";
import axios from 'axios'
import {URL} from "../constantes";

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
                const res = await fetch(`${URL}/api/v1/voiture`)
                const data = await res.json()
                setVoitures(await data)
            }
        }
        getVoitures()
    }, [])

    useEffect(() => {
        axios.get(`${URL}/api/v1/constructeur`)
            .then(res=> {
                setSelectConstructeurs(res.data)
            })
    }, [])

    const getResultat = (props)=>{
        setVoitures(props)
    }

    return (
        <div>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around">
                    <div className='m-2 align-items-center'>
                        <FormFilter
                            size={"18rem"}
                            height={"22rem"}
                            getResultat ={getResultat}
                            constructeurs = {selectConstructeurs}
                        />
                    </div>
                    {
                        voitures&&
                        voitures.map((voiture) => (
                        <div className="m-2" key={voiture.id}>
                            <CardVoiture voiture={voiture}/>
                        </div>
                    ))
                    }
  
                </div>
            </div>
        </div>
    );
}

export default ListeVoitures;
