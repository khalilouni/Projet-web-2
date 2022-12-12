import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {URL} from "../../constantes";
import { ToastContainer, toast } from 'react-toastify';



const NouvelleCommande = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    let [voiture, setVoiture] = useState();
    


    const getData = async () => {
        const { data } = await axios.get(`${URL}/api/v1/voiture/${id}`);
        setVoiture(data[0]);
       
    };
    useEffect(() => {
        getData();
    }, []);


const initialValues = {
    expedition: '',
    cardNumber : '',
    dateExpiration : '',
    cvvCode : '',
    nom : '',
    voitureId: `${id}`
}

const validationSchema = Yup.object({
    expedition: Yup.number().required('expedition.type-requierd'),
    cardNumber: Yup.string().matches(/([0-9]{16})/,'paiement.carte-invalide').required('paiement.carte-requierd'),
    nom: Yup.string().required('nom.paiement-requierd'),
    dateExpiration: Yup.string().matches(/([0-9]{2})\/([0-9]{2})/,'date.expiration-invalide').required('date.expiration-requierd'),
    cvvCode: Yup.string().matches(/([0-9]{3})/,'code.format').required('cvv.requierd'),
});

const onSubmit = valeurs => {
   

    axios({
        method: 'post',
        url: `${URL}/api/v1/commande`,
        data: valeurs
    }).then(res => {
        
        if (res.status == 200) {
            toast.success(<FormattedMessage id={"commande_success"} /> , {
                position: toast.POSITION.TOP_CENTER
            })
            setTimeout(() => {
                navigate("/voiture/liste")
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

    <div className='container bg-light p-2'>
        <ToastContainer />
        <div className=' m-5'>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'><FormattedMessage id="detail.titre-commande" /></h1>
            <h2 className='mb-4'><FormattedMessage id="detail.voiture" /></h2>
            <p><strong><FormattedMessage id="voitureDetail.annee" /> : </strong>{voiture && voiture.date_arrivee}</p>
            <p><strong><FormattedMessage id="voitureDetail.modele" /> : </strong>{voiture && voiture.modele.nom}</p>
            <p><strong><FormattedMessage id="voitureDetail.constructeur" /> : </strong>{voiture && voiture.modele.constructeur.nom}</p>
            <p><strong><FormattedMessage id="ajout_voiture.form_label_prix" /> : </strong>{voiture && voiture.prix} $</p>
            <p><strong><FormattedMessage id="voitureDetail.transmission" /> : </strong>{voiture && voiture.transmission.type}</p>
            <p><strong><FormattedMessage id="voitureDetail.carburant" /> : </strong>{voiture && voiture.carburant.type}</p>
        </div>
        <div className="col-12">
                <div className="card p-3 m-5">
                    <div className="card-body border p-0">
                        <p>
                            <a className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold">PayPal</span>
                                <span className="fab fa-cc-paypal">
                                </span>
                            </a>
                        </p>
                        <div className="collapse p-3 pt-0" id="collapseExample">
                            <div className="row">
                                <div className="col-8">
                                    <p className="h4 mb-0"><FormattedMessage id="sommaire.commande" /></p>
                                    <p className="mb-0"><span className="fw-bold">Product:</span><span className="c-green">: Name of
                                            product</span></p>
                                    <p className="mb-0"><span className="fw-bold"><FormattedMessage id="prix.commande" /> :</span><span
                                            className="c-green">:$452.90</span></p>
                                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                                        nihil neque
                                        quisquam aut
                                        repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
                                        quis,
                                        iste harum ipsum hic, nemo qui!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body border p-0 align-content-center">
                        <p>
                            <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold">Credit Card</span>
                                <span className="">
                                    <span className="fab fa-cc-amex"></span>
                                    <span className="fab fa-cc-mastercard"></span>
                                    <span className="fab fa-cc-discover"></span>
                                </span>
                            </a>
                        </p>
                        <div className="collapse show p-3 pt-0" id="collapseExample">
                            <div className="row">
                                <div className="col-lg-5 mb-lg-0 mb-3">
                                    <p className="h4 mb-0"><FormattedMessage id="sommaire.commande" /></p>
                                    <p className="mb-0"><span className="fw-bold">Product : </span>
                                                        <span className="c-green"> {voiture && voiture.modele.nom} , {voiture && voiture.modele.constructeur.nom}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="fw-bold"><FormattedMessage id="prix.commande" /> :</span>
                                        <span className="c-green">  {voiture && voiture.prix} $</span>
                                    </p>
                                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                                        nihil neque
                                        quisquam aut
                                        repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
                                        quis,
                                        iste harum ipsum hic, nemo qui!</p>
                                </div>
                                <div className="col-lg-7">
                                    <form  className="form" onSubmit={formik.handleSubmit}>
                                        <fieldset className="border p-2">
                                            <legend className="w-auto float-none"><FormattedMessage id="legend.expedition" /></legend>
                                            <div className="mb-3">
                                                
                                                <select className="form-select" {...formik.getFieldProps('expedition')}>
                                                    <option>Choisir</option>
                                                    <option value="1">Chez vous !</option>
                                                    <option value="2">En magazin</option>
                                                </select>
                                                <span className='text-danger'>{formik.touched.expedition && formik.errors.expedition ? <FormattedMessage id={formik.errors.expedition} />: ''}</span>
                                            </div>
                                        </fieldset>
                                        <fieldset className="border p-2">
                                            <legend className="w-auto float-none"><FormattedMessage id="legend.paiement" /></legend>
                                            <div className="row mt-2">
                                                <span className='text-danger'>{formik.touched.cardNumber && formik.errors.cardNumber ? <FormattedMessage id={formik.errors.cardNumber} />: ''}</span>
                                                <div className="col-12">
                                                    <div className="form__div">
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder=" "
                                                        {...formik.getFieldProps('cardNumber')}
                                                        />
                                                        <label htmlFor="cardNumber" className="form__label"><FormattedMessage id="numero.carte" /></label>
                                                    </div>
                                                </div>
                                                <span className='text-danger'>{formik.touched.dateExpiration && formik.errors.dateExpiration ? <FormattedMessage id={formik.errors.dateExpiration} />: ''}</span>
                                                <div className="col-6">
                                                    <div className="form__div">
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        {...formik.getFieldProps('dateExpiration')}
                                                        
                                                        />
                                                        <label htmlFor="" className="form__label">MM / yy</label>
                                                    </div>
                                                </div>
                                                <span className='text-danger'>{formik.touched.cvvCode && formik.errors.cvvCode ? <FormattedMessage id={formik.errors.cvvCode} />: ''}</span>
                                                <div className="col-6">
                                                    <div className="form__div">
                                                        <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        {...formik.getFieldProps('cvvCode')}
                                                        
                                                        />
                                                        <label htmlFor="" className="form__label">cvv code</label>
                                                    </div>
                                                </div>
                                                <span className='text-danger'>{formik.touched.nom && formik.errors.nom ? <FormattedMessage id={formik.errors.nom} />: ''}</span>
                                                <div className="col-12">
                                                    <div className="form__div">
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        {...formik.getFieldProps('nom')}
                                                        
                                                        />
                                                        <label htmlFor="" className="form__label"><FormattedMessage id="nom.carte" /></label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button type="submit" className="btn btn-primary"><FormattedMessage id="btn.submit-paiement" /></button>
                                                    <Link className='btn btn-primary m-3' to='/'><FormattedMessage id="register.form_bt_retour" /></Link>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
    
        
    </div>
)
}

export default NouvelleCommande;
