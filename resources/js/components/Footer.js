import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

const Footer = () => {
    return (
        <footer className="container-fluid bg-primary pt-5 pb-3">
            <div className=" container-sm">
                <div className="row">
                    <div className="col-md-4 footer-column text-start">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">LOGO</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><FormattedMessage id="header.a_propos"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><FormattedMessage id="footer.contactez_nous"/></Link>
                            </li>
                            <li className="nav-item">
                                <span className="footer-title"><FormattedMessage id="footer.nous_suivre"/> :</span>
                                <div className="col-md-4 box">
                                    <ul className="list-inline social-buttons d-flex">
                                        <li className="list-inline-item">
                                            <Link to="/">Twitter</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#">Facebook</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#">LinkedIn</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><FormattedMessage id="footer.politiques_de_ventes"/></Link>
                            </li>
                            <li className="nav-item">
                                <span className="footer-title"><FormattedMessage id="footer.s_inscrire_infolettre"/> :</span>
                            </li>
                            <form className="col-md-8">
                                <input type="email" className="form-control my-3" placeholder="Email" id="email"/>
                                <button type="submit" className="btn btn-outline-light btn-block"><FormattedMessage id="footer.envoyer"/></button>
                            </form>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <span className="footer-title"><FormattedMessage id="footer.partenaires"/></span>
                        <div className="container text-center">
                            <div className="row row-cols-2">
                                <div className="col">Ford</div>
                                <div className="col">Hyundai</div>
                                <div className="col">Citroen</div>
                                <div className="col">Honda</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row text-center mt-5">
                    <div className="col-md-12 box">
                        <span className="copyright quick-links">Copyright &copy; Auto app 2022</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer