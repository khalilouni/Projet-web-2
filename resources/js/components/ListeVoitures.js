import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const ListeVoitures = () => {
    const [ voitures,setVoitures ] = useState([])
    useEffect(() => {
        const getVoitures = async () => {
            const voituresDeServeur = await fetchVoitures()
            setVoitures(voituresDeServeur)
        }
        getVoitures()
    }, [])

    const fetchVoitures = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/v1/voiture')
        const data = await res.json()
        return data
    }
    return (
        <div>
            <h1>Liste de Voitures</h1>
            <ul>
                {voitures.map(v => <Link key={v.id} to={`/voiture/${v.id}`}><li>
                    <span className='mx-3'>{v.modele.constructeur.nom}</span>
                    <span className='mx-3'>{v.modele.nom}</span>
                    <span className='mx-3'>{v.date_arrivee}</span>
                    <span className='mx-3'>{v.prix}</span>
                </li></Link>)}
            </ul>

        </div>
    );
}

export default ListeVoitures;

