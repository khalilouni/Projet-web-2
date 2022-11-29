import React from 'react';
import ReactDOM from 'react-dom';

function ClientEdit() {
    return (
        <div className="container">
            <form className='form px-5 border-opacity-25 rounded'>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'>Modification de vos données</h1>
                    <div className="mb-3">
                        <label for="courriel" className="form-label">Courriel</label>
                        <input type="email" name="courriel" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="nom" className="form-label">Nom</label>
                        <input type="text" name="nom" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="prenom" className="form-label">Prenom</label>
                        <input type="text" name="prenom" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="anniversaire" className="form-label">Date de naissance</label>
                        <input type="text" name="anniversaire" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="adresse" className="form-label">Adresse</label>
                        <input type="text" name="adresse" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="code_postal" className="form-label">Code postale</label>
                        <input type="text" name="code_postal" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="ville" className="form-label">Ville</label>
                        <input type="text" name="ville" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="telephone" className="form-label">Telephone</label>
                        <input type="text" name="telephone" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="cellulaire" className="form-label">Cellulaire</label>
                        <input type="text" name="cellulaire" className="form-control"  />
                    </div>
                    <div className="mb-3 ">
                        <button type="submit" className="btn btn-primary">Modifier</button>
                        <a href="#" className='btn btn-primary m-3'>Retour</a>
                    </div> 
            </form>
        </div>
    );
}

export default ClientEdit;

if (document.getElementById('ClientEdit')) {
    ReactDOM.render(<ClientEdit />, document.getElementById('ClientEdit'));
}
