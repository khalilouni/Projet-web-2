import { Link } from 'react-router-dom'
import React, {useContext} from 'react';
import {Context} from "./LangueWrapper";

/* pour changement de langue */
import {FormattedMessage} from 'react-intl';

/* css */
import '../../css/header.css';

/* logo */
import logo from './img/logo.svg';

const Header = () => {
    const context = useContext(Context);

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light navbar-style">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-logo" to="/">
                        <img src={logo} alt="Logo" className='nav-logo'/>
                    </Link>     
                    

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse nav-spacing" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><FormattedMessage id="header.accueil"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/voiture/liste"><FormattedMessage id="header.voitures"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><FormattedMessage id="header.a_propos"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/register"><FormattedMessage id="header.s_inscrire"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-dark nav-btn-connexion" aria-current="page" to="/login"><FormattedMessage id="header.connexion"/></Link>
                            </li>
                            <li className="nav-item">
                                {/* bouton du changement de langue */}
                                <button type="button" className="btn nav-btn-lang btn-lang" onClick={context.selectLanguage}>{context.locale}</button>
                            </li>
                            {/*<li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a> */}
                                {/*<ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul> */}
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        )
    }
    export default Header
    