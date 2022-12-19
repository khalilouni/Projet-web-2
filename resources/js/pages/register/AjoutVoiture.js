import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {URL} from "../../constantes";
import { ToastContainer, toast } from 'react-toastify';

const AjoutVoiture = () => {

const [modeles, setModeles] = useState([]);
const [transmissions, setTransmissions] = useState([]);
const [carroseries, setCarroseries] = useState([]);
const [carburants, setCarburants] = useState([]);

const navigate = useNavigate();

  const  getModele = () => {
        axios.get(`${URL}/api/v1/modele`)
        .then(res => {
            setModeles(res.data);
            
        })
    }
    const  getTransmission = () => {
        axios.get(`${URL}/api/v1/transmission`)
        .then(res => {
            setTransmissions(res.data);
            
        })
    }
    const  getCarroserie = () => {
        axios.get(`${URL}/api/v1/carrosserie`)
        .then(res => {
            setCarroseries(res.data);
            
        })
    }
    const  getCarburant = () => {
        axios.get(`${URL}/api/v1/carburant`)
        .then(res => {
            setCarburants(res.data);
           
        })
    }
    const initialValues = {
        date_arrivee: '',
        prix : '',
        carroserieId : '',
        nom_modele : '',
        transmissionId : '',
        carburantId : '',
        kilometrage: ''
    }
    const validationSchema = Yup.object({
        date_arrivee: Yup.date().required('voiture.form_date_arrivee_required'),
        prix: Yup.number().required('voiture.form_prix_required'),
        carroserieId: Yup.number().required('voiture.form_carroserieId_required'),
        nom_modele: Yup.number().required('voiture.form_nom_modele_required'),
        transmissionId: Yup.number().required('voiture.form_transmissionId_required'),
        carburantId: Yup.number().required('voiture.form_carburantId_required'),
        kilometrage: Yup.number().required('voiture.form_kilometrage_required'),
    });

    useEffect(() => {
        getModele();
        getTransmission();
        getCarroserie();
        getCarburant();
    }, []);

    const onSubmit = valeurs => {
        
        axios({
            method: 'post',
            url: `${URL}/api/v1/voiture`,
            data: valeurs
        }).then(res => {
            if (res.status == 200) {
                toast.success(<FormattedMessage id={"ajout_voiture_success"} /> , {
                    position: toast.POSITION.TOP_CENTER
                })
                setTimeout(() => {
                    navigate("/crm/ajout-photo")
                }, 3000);
            }
        })

    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <form className='form px-5 border-opacity-25 rounded bg-light' style={{ margin: '15vh' }} onSubmit={formik.handleSubmit}>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'><FormattedMessage id="ajout_voiture.form_titre" /></h1>
            <ToastContainer />  
                <div className="mb-3">
                    <label htmlFor="date_arrivee" className="form-label"><FormattedMessage id="ajout_voiture.form_label_date" /></label>
                    <input
                        type="date"
                        name="date_arrivee"
                        className="form-control"
                        {...formik.getFieldProps('date_arrivee')}
                    />
                    <span className='text-danger'>{formik.touched.date_arrivee && formik.errors.date_arrivee ?
                        <FormattedMessage id={formik.errors.date_arrivee}/> : ''}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="prix" className="form-label"><FormattedMessage id="ajout_voiture.form_label_prix" /></label>
                    <input
                        type="numeric"
                        {...formik.getFieldProps('prix')}
                        className="form-control"
                        
                    />
                    <span className='text-danger'>{formik.touched.prix && formik.errors.prix ?
                        <FormattedMessage id={formik.errors.prix}/> : ''}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="kilometrage" className="form-label"><FormattedMessage id="ajout_voiture.form_label_kilometrage" /></label>
                    <input
                        type="numeric"
                        {...formik.getFieldProps('kilometrage')}
                        className="form-control"
                        
                    />
                    <span className='text-danger'>{formik.touched.kilometrage && formik.errors.kilometrage ?
                        <FormattedMessage id={formik.errors.kilometrage}/> : ''}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="carroserieId" className="form-label"><FormattedMessage id="voitureDetail.carrosserie" /></label>
                    <select {...formik.getFieldProps('carroserieId')} className="form-select" aria-label="Default select example">
                        <option >Type carroserie</option>
                        {carroseries.map((carroserie) => <option key={carroserie.id} value={carroserie.id}>{carroserie.type}</option>)}
                    </select>
                    <span className='text-danger'>{formik.touched.carroserieId && formik.errors.carroserieId ?
                        <FormattedMessage id={formik.errors.carroserieId}/> : ''}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="nom_modele" className="form-label"><FormattedMessage id="voitureDetail.modele" /></label>
                    <select {...formik.getFieldProps('nom_modele')} className="form-select">
                        <option>Choissir un modele</option>
                        {modeles.map((modele) => <option key={modele.id} value={modele.id}>{modele.nom}</option>)}
                    </select>
                    <span className='text-danger'>{formik.touched.nom_modele && formik.errors.nom_modele ?
                        <FormattedMessage id={formik.errors.nom_modele}/> : ''}</span>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="transmissionId" className="form-label"><FormattedMessage id="voitureDetail.transmission" /></label>
                    <select {...formik.getFieldProps('transmissionId')} className="form-select" aria-label="Default select example">
                        <option>Choissir un type de transmission</option>
                        {transmissions.map((transmission) => <option key={transmission.id} value={transmission.id}>{transmission.type}</option>)}
                    </select>
                    <span className='text-danger'>{formik.touched.transmissionId && formik.errors.transmissionId ?
                        <FormattedMessage id={formik.errors.transmissionId}/> : ''}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="carburantId" className="form-label"><FormattedMessage id="voitureDetail.carburant" /></label>
                    <select {...formik.getFieldProps('carburantId')} className="form-select" aria-label="Default select example">
                        <option>Choissir un type de carburant</option>
                        {carburants.map((carburant) => <option key={carburant.id} value={carburant.id}>{carburant.type}</option>)}
                    </select>
                    <span className='text-danger'>{formik.touched.carburantId && formik.errors.carburantId ?
                        <FormattedMessage id={formik.errors.carburantId}/> : ''}</span>
                </div>

                <div className="mb-3 ">
                    <button type="submit" className='btn btn-primary m-3'><FormattedMessage id="enregistrer.form_inscription" /></button>
                    <Link className='btn btn-primary m-3' to='/app'><FormattedMessage id="register.form_bt_retour" /></Link>
                </div>
        </form>
    )


}

export default AjoutVoiture;