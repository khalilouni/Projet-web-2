import {useState, useEffect} from 'react'
import CardVoiture from "./CardVoiture";
import FormFilter from "./FormFilter";
import {FormattedMessage} from "react-intl";

const ListeVoitures = () => {

    const [voitures, setVoitures] = useState([])
    const [voituresFiltrees, setVoituresFiltrees] = useState(voitures)
    // const [voituresFiltrees, setVoituresFiltrees] = useState([])
    const [selectConstructeurs, setSelectConstructeurs] = useState('')
    const [selectModeles, setSelectModeles] = useState('')
    const [selectAnnees, setSelectAnnees] = useState('')
    
    useEffect(() => {
        const getVoitures = async () => {
            const res = await fetch('http://127.0.0.1:8000/api/v1/voiture')
            const data = await res.json()
            setVoitures(await data)
        }
        getVoitures()
    }, [])
    
    useEffect(() => {
        const getConstructeurs = async () => {
            const arr = []
            await axios.get('http://127.0.0.1:8000/api/v1/constructeur')
                .then((res) => {
                let result = res.data;
                console.log(result, "result")
                result.map((voiture) => {
                     arr.push({
                        value: voiture.nom,
                        label: voiture.nom
                    });
                     console.log(arr , "arr")
                     return arr
                });
                setSelectConstructeurs(arr)
            });
        }
        getConstructeurs()
    }, [])

    const filtrerParConstructeurs = (data) => {
        if (!selectConstructeurs) {
            console.log(data, "data")
            return data;
        }

        const dataFiltrees = data.filter(
            (voiture) => voiture.modele.constructeur.nom.indexOf(selectConstructeurs) !== -1
        );
        return dataFiltrees;
    }

    const filtrerParModeles = (data) => {
        if (!selectModeles) {
            return data;
        }

        const dataFiltrees = data.filter(
            (voiture) => voiture.modele.nom.indexOf(selectModeles) !== -1
        );
        return dataFiltrees;
    }

    const filtrerParAnnees = (data) => {
        if (!selectAnnees) {
            return data;
        }

        const dataFiltrees = data.filter(
            (voiture) => voiture.modele.annee.toString().indexOf(selectAnnees) !== -1
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
        let dataFiltrees = filtrerParConstructeurs(voitures)
        dataFiltrees = filtrerParModeles(dataFiltrees)
        dataFiltrees = filtrerParAnnees(dataFiltrees)
        setVoituresFiltrees(dataFiltrees)

    }, [selectConstructeurs, selectModeles, selectAnnees])

    return (
        <div>
            <h1><FormattedMessage id="voitures.titre"/></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FormFilter 
                            size={"22rem"} 
                            selectConstructeurs={selectConstructeurs}
                            selectModeles={selectModeles}
                            selectAnnees={selectAnnees}
                            handleConstructeurChange={handleConstructeurChange}
                            handleModeleChange={handleModeleChange}
                            handleAnneeChange={handleAnneeChange}
                        />
                    </div>
                    <div className="col">
                        <div className="row"> 
                            {
                                voituresFiltrees.map((voiture) => (
                                    <div className="col" key={voiture.id}>
                                        <CardVoiture voiture={voiture}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListeVoitures;
