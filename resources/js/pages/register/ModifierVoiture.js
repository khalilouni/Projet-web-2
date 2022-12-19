import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { URL } from "../../constantes";
import { ToastContainer, toast } from 'react-toastify';

const ModifierVoiture = () => {

    const initialValues = {
        date_arrivee: '',
        prix: '',
        kilometrage: '',
        carrosserieId: '',
        nom_modele: '',
        transmissionId: '',
        carburantId: ''
    }

    const [modeles, setModeles] = useState([]);
    const [transmissions, setTransmissions] = useState([]);
    const [carroseries, setCarroseries] = useState([]);
    const [carburants, setCarburants] = useState([]);
    const [values, setValues] = useState(initialValues);


    const { id } = useParams();

    const getVoiture = async () => {
        const { data } = await axios.get(`${URL}/api/v1/voiture/${id}`);
        initialValues.date_arrivee = data.date_arrivee;
        initialValues.prix = data.prix,
        initialValues.kilometrage = data.kilometrage,
        initialValues.carrosserieId = data.carrosserieId,
        initialValues.nom_modele = data.modeleId,
        initialValues.transmissionId = data.transmissionId,
        initialValues.carburantId = data.carburantId

        const apiValues = {
            date_arrivee: data.date_arrivee,
            prix: data.prix,
            kilometrage: data.kilometrage,
            carrosserieId: data.carrosserieId,
            nom_modele: data.modeleId,
            transmissionId: data.transmissionId,
            carburantId: data.carburantId
        };
        setValues(apiValues);
    };

    const getModele = () => {
        axios.get(`${URL}/api/v1/modele`)
            .then(res => {
                setModeles(res.data);

            })
    }
    const getTransmission = () => {
        axios.get(`${URL}/api/v1/transmission`)
            .then(res => {
                setTransmissions(res.data);

            })
    }
    const getCarroserie = () => {
        axios.get(`${URL}/api/v1/carrosserie`)
            .then(res => {
                setCarroseries(res.data);

            })
    }
    const getCarburant = () => {
        axios.get(`${URL}/api/v1/carburant`)
            .then(res => {
                setCarburants(res.data);

            })
    }
    
    const validationSchema = Yup.object({
        date_arrivee: Yup.date().required(),
        prix: Yup.number().required(),
        kilometrage: Yup.number().required()
    });

    useEffect(() => {
        getModele();
        getTransmission();
        getCarroserie();
        getCarburant();
        getVoiture();
    }, []);

    const onSubmit = valeurs => {
        
        axios({
            method: 'put',
            url: `${URL}/api/v1/voiture/${id}`,
            data: valeurs
        }).then(res => {
            if (res.status == 200) {
                console.log(res.data.message);
                toast.success(<FormattedMessage id={"modification_voiture_success"} />, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        })
    }

    const formik = useFormik({
        initialValues: initialValues,
        values: values,
        validationSchema,
        onSubmit
    })

    return (
    
        <form className='form px-5 border-opacity-25 rounded bg-light' style={{ margin: '15vh' }} onSubmit={formik.handleSubmit}>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'><FormattedMessage id="modifier_voiture.form_titre" /></h1>
            <ToastContainer />
            <div className="mb-3">
                <label htmlFor="date_arrivee" className="form-label"><FormattedMessage id="ajout_voiture.form_label_date" /></label>
                <input
                    type="date"
                    id="date_arrivee"
                    value={formik.values.date_arrivee}
                    name="date_arrivee"
                    onChange={formik.handleChange}
                    className="form-control"
                />
                <span className='text-danger'>{formik.touched.date_arrivee && formik.errors.date_arrivee ?
                    <FormattedMessage id="voiture.form_date_arrivee_required" /> : ''}</span>
            </div>
    
            <div className="mb-3">
                <label htmlFor="prix" className="form-label"><FormattedMessage id="ajout_voiture.form_label_prix" /></label>
                <input
                    type="numeric"
                    id="prix"
                    value={formik.values.prix}
                    name="prix"
                    onChange={formik.handleChange}
                    className="form-control"
                />
                <span className='text-danger'>{formik.touched.prix && formik.errors.prix ?
                    <FormattedMessage id="voiture.form_prix_required" /> : ''}</span>
            </div>
            <div className="mb-3">
                <label htmlFor="kilometrage" className="form-label"><FormattedMessage id="ajout_voiture.form_label_kilometrage" /></label>
                <input
                    type="numeric"
                    value={formik.values.kilometrage}
                    name="kilometrage"
                    onChange={formik.handleChange}
                    className="form-control"
                />
                <span className='text-danger'>{formik.touched.kilometrage && formik.errors.kilometrage ?
                    <FormattedMessage id="voiture.form_kilometrage_required" /> : ''}</span>
            </div>
            <div className="mb-3">
                <label htmlFor="carroserieId" className="form-label"><FormattedMessage id="voitureDetail.carrosserie" /></label>
                <select name="carrosserieId" value={formik.values.carrosserieId}  onChange={formik.handleChange} className="form-select" aria-label="Default select example">
                    {carroseries.map((carroserie) => <option key={carroserie.id} value={carroserie.id}>{carroserie.type}</option>)}
                </select>
                <span className='text-danger'>{formik.touched.carrosserieId && formik.errors.carroserieId ?
                    <FormattedMessage id={formik.errors.carrosserieId} /> : ''}</span>
            </div>
            <div className="mb-3">
                <label htmlFor="nom_modele" className="form-label"><FormattedMessage id="voitureDetail.modele" /></label>
                <select name="nom_modele" value={formik.values.nom_modele}  onChange={formik.handleChange} className="form-select">
                    {modeles.map((modele) => <option key={modele.id} value={modele.id}>{modele.nom}</option>)}
                </select>
                <span className='text-danger'>{formik.touched.nom_modele && formik.errors.nom_modele ?
                    <FormattedMessage id={formik.errors.nom_modele} /> : ''}</span>
            </div>

            <div className="mb-3">
                <label htmlFor="transmissionId" className="form-label"><FormattedMessage id="voitureDetail.transmission" /></label>
                <select name="transmissionId" value={formik.values.transmissionId}  onChange={formik.handleChange} className="form-select" aria-label="Default select example">
                    {transmissions.map((transmission) => <option key={transmission.id} value={transmission.id}>{transmission.type}</option>)}
                </select>
                <span className='text-danger'>{formik.touched.transmissionId && formik.errors.transmissionId ?
                    <FormattedMessage id={formik.errors.transmissionId} /> : ''}</span>
            </div>
            <div className="mb-3">
                <label htmlFor="carburantId" className="form-label"><FormattedMessage id="voitureDetail.carburant" /></label>
                <select name="carburantId" value={formik.values.carburantId}  onChange={formik.handleChange} className="form-select" aria-label="Default select example">
                    {carburants.map((carburant) => <option key={carburant.id} value={carburant.id}>{carburant.type}</option>)}
                </select>
                <span className='text-danger'>{formik.touched.carburantId && formik.errors.carburantId ?
                    <FormattedMessage id={formik.errors.carburantId} /> : ''}</span>
            </div>

            <div className="mb-3 ">
                <button type="submit" className="btn btn-primary" ><FormattedMessage id="modifier_voiture.form_label_btn_modifier" /></button>
                <Link className='btn btn-primary m-3' to='/crm/voiture/liste'><FormattedMessage id="register.form_bt_retour" /></Link>
            </div>
        </form>
    )


}

export default ModifierVoiture;