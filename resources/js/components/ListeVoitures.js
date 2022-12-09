import {useState, useEffect} from 'react'
import CardVoiture from "./CardVoiture";
import FormFilter from "./FormFilter";
import {FormattedMessage} from "react-intl";

const ListeVoitures = () => {

    const [voitures, setVoitures] = useState([])
    const [voituresFiltrees, setVoituresFiltrees] = useState(voitures)
    const [selectConstructeurs, setSelectConstructeurs] = useState('')
    const [selectModeles, setSelectModeles] = useState('')
    const [selectAnnees, setSelectAnnees] = useState('')

    useEffect(() => {
        const getConstructeurs = async () => {
            const res = await fetch('http://127.0.0.1:8000/api/v1/constructeur')
            const data = await res.json()
            setSelectConstructeurs(await data)
        }

        getConstructeurs()
    }, [])

    const filtrerParConstructeurs = (data) => {
        if (!selectConstructeurs) {
            return data;
        }

        const dataFiltrees = data.filter(
            (voiture) => voiture.modele.constructeur.nom.split(" ").indexOf(selectConstructeurs) !== -1
          );
          return dataFiltrees;
    }

    const filtrerParModeles = (data) => {
        if (!selectModeles) {
            return data;
        }

        const dataFiltrees = data.filter(
            (voiture) => voiture.modele.nom.split(" ").indexOf(selectModeles) !== -1
          );
          return dataFiltrees;
    }

    const filtrerParAnnees = (data) => {
        if (!selectAnnees) {
            return data;
        }

        const dataFiltrees = data.filter(
            (voiture) => voiture.modele.annee.toString().split(" ").indexOf(selectAnnees) !== -1
          );
          return dataFiltrees;
    }

    const handleConstructeurChange = (event) => {
        setSelectConstructeurs(event.target.value);
    };

    const handleModeleChange = (event) => {
        setSelectModeles(event.target.value);
    };

    const handleAnneeChange = (event) => {
        setSelectAnnees(event.target.value);
    };

    useEffect(() => {
        const getVoitures = async () => {
            const res = await fetch('http://127.0.0.1:8000/api/v1/voiture')
            const data = await res.json()
            setVoitures(await data)
        }
        getVoitures()

        let dataFiltrees = filtrerParConstructeurs(voitures)
        dataFiltrees = filtrerParModeles(dataFiltrees)
        dataFiltrees = filtrerParAnnees(dataFiltrees)
        setVoituresFiltrees(dataFiltrees)

    }, [selectConstructeurs, selectModeles, selectAnnees])

    return (
        <div>
             <div className="container">
                <div className="d-flex flex-wrap">
                    <div className="d-flex flex-wrap">
                    <FormFilter 
                            size={"22rem"} 
                            selectConstructeurs={selectConstructeurs}
                            selectModeles={selectModeles}
                            selectAnnees={selectAnnees}
                            handleConstructeurChange={handleConstructeurChange}
                            handleModeleChange={handleModeleChange}
                            handleAnneeChange={handleAnneeChange}
                        />
                        {
                            voituresFiltrees.map((voiture, index)=> (
                                <div className="m-2" key={index}>
                                    <CardVoiture voiture={voiture}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListeVoitures;
