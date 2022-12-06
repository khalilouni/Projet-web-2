/* pour changement de langue */
import {FormattedMessage} from 'react-intl';

/* css */
import '../../css/formFilter.css';

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
                    <option selected><FormattedMessage id="home.titre_filtre"/></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <option selected>Choisissez un modèle</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : color}}
                >
                    <option selected>Choisissez une année</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>
                <button type="submit" class="btn btn-filter-search btn-block"><FormattedMessage id="home.form_rechercher"/></button>
            </div>
        </form>  
    )
}

FormFilter.defaultProps = {
    size: '25rem',
    color: '#d9d9d9'
}

export default FormFilter;