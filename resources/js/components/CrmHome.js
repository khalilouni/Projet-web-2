/* pour changement de langue */
import {FormattedMessage} from 'react-intl';

/* photo*/
 import espacecrm from './img/espace-crm.jpg'; 

/* css */
import '../../css/crmHome.css';

const CrmHome = () => {
    return(
        <main className='wrapper-crm-home'>
            <div className='container-title-crm-home'>
                <FormattedMessage id="crmHome.titre"/>
            </div>
            <div className='container-img-crm-home'>
                <img src={espacecrm} className='col-sm-8 d-flex img-presentation-container' alt="Image hero CRM"/> 
            </div>
        </main>
    )
}

export default CrmHome