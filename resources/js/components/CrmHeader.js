import {Link} from 'react-router-dom'
import React, {useContext} from 'react';
import {Context} from "./LangueWrapper";
import Auth from '../route/Auth'
/* pour changement de langue */
import {FormattedMessage} from 'react-intl';
/* css */
import '../../css/crmHeader.css';
/* logo */
import crmlogo from './img/crm-logo.svg';

const Header = () => {
    const context = useContext(Context);
    const {authed,nomAuthed,logout} = Auth()
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-crm navbar-style">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-logo" to="/">
                        <img src={crmlogo} alt="Logo" className='nav-logo'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-spacing" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/app"><FormattedMessage id="crmHeader.accueil.return.ecom"/></Link>
                            </li>
                            <li className="nav-item font-crm">
                                <Link className="nav-link active text-white" aria-current="page"
                                      to="/app/voiture/liste"><FormattedMessage id="crmHeader.nos.voitures"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page"
                                      to="/home"><FormattedMessage id="crmHeader.ajouter.voiture"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/"><FormattedMessage id="crmHeader.journal.connexion"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/"><FormattedMessage id="crmHeader.gestion.employés"/></Link>
                            </li>
                            <li className="nav-item">
                                {authed ? <Link className="nav-link active text-white" aria-current="page"
                                                to="/client-index"><FormattedMessage id="header.client_centre"/>{nomAuthed}
                                </Link> : <Link className="nav-link active text-white" aria-current="page"
                                                       to="/register"><FormattedMessage id="header.s_inscrire"/>
                                </Link>
                                }
                            </li>
                            {/* deconnexion */}
                            <li className="nav-item">
                                {authed ?
                                    <Link className="btn btn-outline-light nav-btn-connexion text-white" aria-current="page"
                                          to="/home" onClick={logout}>
                                        <FormattedMessage id="header.deconnectionner"/>
                                    </Link> :
                                    <Link className="btn btn-outline-dark nav-btn-connexion text-white" aria-current="page"
                                          to="/connexion">
                                        <FormattedMessage id="header.connexion"/>
                                    </Link>
                                }
                            </li>
                            <li className="nav-item">
                                {/* bouton du changement de langue */}
                                <button type="button" className="btn nav-btn-lang btn-lang"
                                        onClick={context.selectLanguage}>{context.locale}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
