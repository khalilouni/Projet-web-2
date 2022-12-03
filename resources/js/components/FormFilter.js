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
                    <option value="1">Dodge</option>
                    <option value="2">BMW</option>
                    <option value="3">KIA</option>
                    <option value="4">Audi</option>
                    <option value="5">Wolkswagen</option>
                    <option value="6">Mercedes</option>
                    <option value="7">Toyota</option>
                    <option value="8">Honda</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <option selected>Modèle</option>
                    <option value="1">A5</option>
                    <option value="2">Corolla</option>
                    <option value="3">Civic</option>
                    <option value="4">Classic C</option>
                    <option value="5">Journey</option>
                    <option value="6">Sportage</option>
                    <option value="7">Atlas</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="vol" className="form-label">Année</label>
                <input type="range" className="form-range" id="vol" name="vol" min="1966" max="2023"/>
            </div>
            <div>
                <button type="submit" class="btn btn-primary btn-block"><FormattedMessage id="home.form_rechercher"/></button>
            </div>
        </form>  
    )
}

FormFilter.defaultProps = {
    size: '25rem',
    color: '#d9d9d9'
}

export default FormFilter;