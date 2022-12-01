import { Link } from 'react-router-dom' 
import React, {useContext} from 'react';
import {Context} from "./LangueWrapper";
/* pour changement de langue */
import {FormattedMessage} from 'react-intl'; 
import '../../css/header.css';

const Header = () => {
    const context = useContext(Context);
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
                <div className="container-fluid flex-header">
                    <div className='flex'>
                        <Link className="navbar-brand" to="/home">Ecom App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/home"><FormattedMessage id="header.accueil"/></Link>
                                <Link className="nav-link active" aria-current="page" to="/products"><FormattedMessage id="header.voitures"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        {/* bouton du changement de langue */}
                        <button type="button" className="btn btn-primary" onClick={context.selectLanguage}>{context.locale}</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header