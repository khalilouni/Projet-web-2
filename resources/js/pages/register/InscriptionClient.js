import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {URL} from "../../constantes";

const InscriptionClient = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    let [villes, setVilles] = useState([])
    const token = localStorage.getItem('tk')

    useEffect(() => {
        axios.get(`${URL}/api/v1/ville`).then((res) => {
            setVilles(res.data)
        }).catch(error => {
            console.log(error)
        });
    }, []);


const initialValues = {
    courriel: '',
    nom: '',
    prenom: '',
    anniversaire: '',
    adresse: '',
    code_postal: '',
    telephone: '',
    cellulaire: '',
    villeId: '',
    userId: `${id}`
}

const validationSchema = Yup.object({
    courriel: Yup.string().email('profil.form_courriel_invalide').required('profil.form_courriel_required'),
    nom: Yup.string().max(35, 'profil.form_nom_invalide').required('profil.form_nom_required'),
    prenom: Yup.string().max(35, 'profil.form_prenom_invalide').required('profil.form_prenom_required'),
    anniversaire: Yup.date().max(new Date(Date.now() - 567648000000), 'profil.form_anniversaire_invalide').required('profil.form_anniversaire_required'),
    adresse: Yup.string().required('profil.form_adresse_required').min(6, 'profil.form_adresse_invalide'),
    code_postal: Yup.string().required('profil.form_code_postal_required').matches(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, 'profil.form_code_postal_format_invalide'),
    telephone: Yup.string().required('profil.form_telephone_required').min(10,'profil.form_telephone_invalide').max(10,'profil.form_telephone_invalide'),
    cellulaire: Yup.string().nullable().min(10,'profil.form_cellulaire_invalide').max(10,'profil.form_cellulaire_invalide'),
    villeId: Yup.string().required('profil.from_ville_required')
});

const onSubmit = (valeurs) => {
    console.log(valeurs)
     axios({
        method: 'POST',
        url: `${URL}/api/v1/inscription-client`,
        headers: {Authorization:`${token}`},
        data: valeurs
    })
        .then(res => {
            console.log(res.data)
            navigate(`/detail-profil/${res.data.profil.id}`)

        })
}

const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
})


return (

    <form className='form px-5 border-opacity-25 rounded' onSubmit={formik.handleSubmit}>
        <h1 className='title-form font-weight-bold text-center m-4 p-3'><FormattedMessage id="register.form_titre"/>
        </h1>
        <div className="mb-3">
            <label htmlFor="courriel" className="form-label"><FormattedMessage id="courriel.form_inscription"/></label>
            <input
                type="text"
                className="form-control"
                {...formik.getFieldProps('courriel')}
            />
            <span className='text-danger'>{formik.touched.courriel && formik.errors.courriel ?
                <FormattedMessage id={formik.errors.courriel}/> : ''}</span>
        </div>
        <div className="mb-3">
            <label htmlFor="nom" className="form-label"><FormattedMessage id="nom.form_inscription"/></label>
            <input
                type="text"
                className="form-control"
                {...formik.getFieldProps('nom')}
            />
            <span className='text-danger'>{formik.touched.nom && formik.errors.nom ?
                <FormattedMessage id={formik.errors.nom}/> : ''}</span>
        </div>
        <div className="mb-3">
            <label htmlFor="prenom" className="form-label"><FormattedMessage id="prenom.form_inscription"/></label>
            <input
                type="text"
                className="form-control"
                {...formik.getFieldProps('prenom')}
            />
            <span className='text-danger'>{formik.touched.prenom && formik.errors.prenom ?
                <FormattedMessage id={formik.errors.prenom}/> : ''}</span>
        </div>
        <div className="mb-3">
            <label htmlFor="anniversaire" className="form-label"><FormattedMessage id="anniversaire.form_inscription"/></label>
            <input
                type="date"
                className="form-control"
                {...formik.getFieldProps('anniversaire')}
            />
            <span className='text-danger'>{formik.touched.anniversaire && formik.errors.anniversaire ?
                <FormattedMessage id={formik.errors.anniversaire}/> : ''}</span>
        </div>
        <div className="mb-3">
            <label htmlFor="adresse" className="form-label"><FormattedMessage id="adresse.form_inscription"/></label>
            <input
                type="text"
                className="form-control"
                {...formik.getFieldProps('adresse')}
            />
            <span className='text-danger'>{formik.touched.adresse && formik.errors.adresse ?
                <FormattedMessage id={formik.errors.adresse}/> : ''}</span>
        </div>
        <div className="mb-3">
            <label htmlFor="code_postal" className="form-label"><FormattedMessage
                id="codePostal.form_inscription"/></label>
            <input
                type="text"
                className="form-control"
                {...formik.getFieldProps('code_postal')}
            />
            <span className='text-danger'>{formik.touched.code_postal && formik.errors.code_postal ?
                <FormattedMessage id={formik.errors.code_postal}/> : ''}</span>
        </div>
       <div className="mb-3">
                    <label htmlFor="telephone" className="form-label"><FormattedMessage id="telephone.form_inscription"/></label>
                    <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps('telephone')}
                    />
           <span className='text-danger'>{formik.touched.telephone && formik.errors.telephone ?
               <FormattedMessage id={formik.errors.telephone}/> : ''}</span>
                </div>
         <div className="mb-3">
                    <label htmlFor="cellulaire" className="form-label"><FormattedMessage id="cellulaire.form_inscription"/></label>
                    <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps('cellulaire')}
                    />
             <span className='text-danger'>{formik.touched.cellulaire && formik.errors.cellulaire ?
                 <FormattedMessage id={formik.errors.cellulaire}/> : ''}</span>
                </div>
        <div className="mb-3">
            <label htmlFor="villeId" className="form-label"><FormattedMessage id="ville.form_inscription"/></label>
            <select
                className="form-select"
                {...formik.getFieldProps('villeId')}
            >
                <option>Choissir une ville</option>
                {villes.map((ville) => <option key={ville.id} value={ville.id}>{ville.nom}</option>)}
            </select>
            <span className='text-danger'>{formik.touched.villeId && formik.errors.villeId ?
                <FormattedMessage id={formik.errors.villeId}/> : ''}</span>
        </div>
        <div className="mb-3 ">
            <button type="submit" className="btn btn-primary"><FormattedMessage id="enregistrer.form_inscription" /></button>
        </div>
    </form>
)
}

export default InscriptionClient;
