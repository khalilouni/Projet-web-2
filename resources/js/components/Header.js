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
            <nav className="position-fixed top-0 navbar navbar-expand-lg container-fluid py-3">
                <div className="container-sm">
                    <Link className="navbar-brand" to="/home">LOGO</Link>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home"><FormattedMessage id="header.accueil"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products"><FormattedMessage id="header.voitures"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home"><FormattedMessage id="header.a_propos"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/register"><FormattedMessage id="header.s_inscrire"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-dark" aria-current="page" to="/login"><FormattedMessage id="header.connexion"/></Link>
                            </li>
                            <li className="nav-item">
                                {/* bouton du changement de langue */}
                                <button type="button" className="btn btn-primary btn-lang" onClick={context.selectLanguage}>{context.locale}</button>                        
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
