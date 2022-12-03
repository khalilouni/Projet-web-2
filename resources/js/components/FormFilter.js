/* pour changement de langue */
import {FormattedMessage} from 'react-intl'; 

const FormFilter = ({size, color}) => {
    
    return (
        <form className="card p-5" style={{ width: size }}>

            <div className="mb-3 text-center">
                <span className="fs-5 fw-bold"><FormattedMessage id="home.titre_filtre"/></span>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <option selected>Marque</option>
                    <option defaultValue="1">Dodge</option>
                    <option defaultValue="2">BMW</option>
                    <option defaultValue="3">KIA</option>
                    <option defaultValue="4">Audi</option>
                    <option defaultValue="5">Wolkswagen</option>
                    <option defaultValue="6">Mercedes</option>
                    <option defaultValue="7">Toyota</option>
                    <option defaultValue="8">Honda</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <option selected>Modèle</option>
                    <option defaultValue="1">A5</option>
                    <option defaultValue="2">Corolla</option>
                    <option defaultValue="3">Civic</option>
                    <option defaultValue="4">Classic C</option>
                    <option defaultValue="5">Journey</option>
                    <option defaultValue="6">Sportage</option>
                    <option defaultValue="7">Atlas</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="vol" className="form-label">Année</label>
                <input type="range" className="form-range" id="vol" name="vol" min="1966" max="2023"/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block"><FormattedMessage id="home.form_rechercher"/></button>
            </div>
        </form>  
    )
}

FormFilter.defaultProps = {
    size: '25rem',
    color: '#d9d9d9'
}

export default FormFilter;