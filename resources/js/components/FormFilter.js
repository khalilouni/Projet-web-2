
/* pour changement de langue */
import {FormattedMessage} from 'react-intl';

/* css */
import '../../css/formFilter.css';

const FormFilter = ({
    selectConstructeurs, handleConstructeurChange,
    selectModeles, handleModeleChange,
    selectAnnees, handleAnneeChange
}) => {

    return (
        <form className="card p-5" style={{ width: '25rem' }}>
            <div className="mb-3 text-center">
                <span className="fs-5 fw-bold"><FormattedMessage id="home.titre_filtre"/></span>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : '#d9d9d9'}}
                    value={selectConstructeurs}
                    onChange={handleConstructeurChange}
                >
                    <FormattedMessage id="home.form_marque">
                        { selectOption => <option value="">{selectOption}</option>}
                    </FormattedMessage>
                    <option value="BMW">BMW</option>
                    <option value="Dodge">Dodge</option>
                    <option value="KIA">KIA</option>
                    <option value="Audi">Audi</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : '#d9d9d9'}}
                    value={selectModeles}
                    onChange={handleModeleChange}
                >
                    <FormattedMessage id="home.form_modele">
                        { selectOption => <option value="">{selectOption}</option>}
                    </FormattedMessage>
                    <option value="A5">A5</option>
                    <option value="Corolla">Corolla</option>
                    <option value="M2">M2</option>
                    <option value="Civic">Civic</option>
                    <option value="Classe C">Classe C</option>
                    <option value="Journey">Journey</option>
                    <option value="Sportage">Sportage</option>
                    <option value="Atlas">Atlas</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" 
                    style={{backgroundColor : '#d9d9d9'}}
                    value={selectAnnees}
                    onChange={handleAnneeChange}
                >
                    <FormattedMessage id="home.form_annee">
                        { selectOption => <option value="">{selectOption}</option>}
                    </FormattedMessage>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2015">2015</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2000">2000</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-filter-search btn-block"><FormattedMessage id="home.form_rechercher"/></button>
            </div>
        </form>  
    )
}

export default FormFilter;