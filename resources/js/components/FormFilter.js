import {useState, useEffect} from 'react'
/* pour changement de langue */
import {FormattedMessage} from 'react-intl';

/* css */
import '../../css/formFilter.css';

const FormFilter = ({size, color}) => {
    const [constructeurs, setConstructeurs] = useState([])
    const [modeles, setModeles] = useState([])
    useEffect(() => {
        const getConstructeurs = async () => {
            const data = await fetchConstructeurs()
            setConstructeurs(data)
        }

        const getModeles = async () => {
            const data = await fetchModeles()
            setModeles(data)
        }
        getConstructeurs()
        getModeles()
    }, [])
    
    const fetchConstructeurs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/v1/constructeur')
        const data = await res.json()
        return data
    }

    const fetchModeles = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/v1/modele')
        const data = await res.json()
        return data
    }
    
    return (
        <form className="card p-5" style={{ width: size }}>
            <div className="mb-3 text-center">
                <span className="fs-5 fw-bold"><FormattedMessage id="home.titre_filtre"/></span>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <FormattedMessage id="home.form_marque">
                        { selectOption => <option>{selectOption}</option>}
                    </FormattedMessage>
                    {
                        constructeurs.map(c => <option key={c.id} value={c.id}>{c.nom}</option>)
                    }
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <FormattedMessage id="home.form_modele">
                        { selectOption => <option>{selectOption}</option>}
                    </FormattedMessage>
                    {
                        modeles.map(m => <option key={m.id} value={m.id}>{m.nom}</option>)
                    }
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="vol" className="form-label">Année</label>
                <input type="range" className="form-range" id="vol" name="vol" min="1966" max="2023"/>
            </div>
            <div>
                <button type="submit" className="btn btn-filter-search btn-block"><FormattedMessage id="home.form_rechercher"/></button>
            </div>
        </form>  
    )
}

FormFilter.defaultProps = {
    size: '25rem',
    color: '#d9d9d9'
}

export default FormFilter;