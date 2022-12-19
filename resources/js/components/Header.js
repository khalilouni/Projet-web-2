import {Link} from 'react-router-dom'
import React, {useContext} from 'react';
import {Context} from "./LangueWrapper";
import Auth from '../route/Auth'
/* pour changement de langue */
import {FormattedMessage} from 'react-intl';
/* css */
import '../../css/header.css';
/* logo */
import logo from './img/logo.svg';

const Header = () => {
    const context = useContext(Context);
    const {authed,nomAuthed,logout, privilege} = Auth()
    const effacerStorgage = ()=> {
        if(localStorage.getItem('voituresInitiales')) {
            localStorage.removeItem('voituresInitiales')
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light navbar-style">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-logo" to="/app">
                        <img src={logo} alt="Logo" className='nav-logo'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-spacing" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {privilege && (privilege == 1 || privilege == 2) &&
                                (<li className="nav-item">
                                    <Link className="nav-link active" to="/crm"><FormattedMessage id="header.crm"/></Link>
                                </li>)
                            }
                            <li className="nav-item">
                                <Link className="nav-link active" to="/app"><FormattedMessage id="header.accueil"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/app/voiture/liste">
                                     <span onClick={()=>effacerStorgage()}><FormattedMessage id="header.voitures"/></span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {authed ? <Link className="nav-link active" aria-current="page"
                                                to="/app/client-index"><FormattedMessage id="header.client_centre"/>{nomAuthed}
                                </Link> : <Link className="nav-link active" aria-current="page"
                                                       to="/app/register"><FormattedMessage id="header.s_inscrire"/>
                                </Link>
                                }
                            </li>
                            <li className="nav-item">
                                {authed ?
                                    <Link className="btn btn-outline-dark nav-btn-connexion" aria-current="page"
                                          to="/app/home" onClick={logout}>
                                        <FormattedMessage id="header.deconnectionner"/>
                                    </Link> :
                                    <Link className="btn btn-outline-dark nav-btn-connexion" aria-current="page"
                                          to="/app/connexion">
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
