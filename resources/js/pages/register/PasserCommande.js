import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {URL} from "../../constantes";
import { ToastContainer, toast } from 'react-toastify';
import CardVoiture from "../../components/CardVoiture";



const NouvelleCommande = () => {

    
    const navigate = useNavigate();
    const [voitures, setVoitures] = useState([]);
    const [total, setTotal] = useState();


    const getData = () => {

        setVoitures(JSON.parse(localStorage.getItem('voitures')));
        let paniers = JSON.parse(localStorage.getItem('voitures'));
        
        let prixTotal = 0;
        
        paniers.forEach(function(panier) {
            prixTotal += panier.prix;
            setTotal(prixTotal);
        })
        
    };
    useEffect(() => {
        getData();
    }, []);

    const initialValues = {
        expeditionId: '',
        modePaiementId: '',
        userId: localStorage.getItem('idAuthed'),
        voitures: JSON.parse(localStorage.getItem('voitures'))
    }

    const validationSchema = Yup.object({
        expeditionId: Yup.string().required('expedition.type-requierd'),
        modePaiementId: Yup.string().required('expedition.type-requierd'),
        
    });


const onSubmit = valeurs => {
   
    console.log(valeurs);
    axios({
        method: 'post',
        url: `${URL}/api/v1/commande`,
        data: valeurs
    }).then(res => {
        //console.log(res.data);
        if (res.status == 200) {
            toast.success(<FormattedMessage id={"commande_success"} /> , {
                position: toast.POSITION.TOP_CENTER
            })
        }
        setTimeout(() => {
            localStorage.removeItem('voitures');
            navigate("/app/voiture/liste")
        }, 3000);
    })

}

const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
})


return (

    <div className='container bg-light py-3 my-3'>
        <ToastContainer />
        <h1 className='title-form font-weight-bold text-center m-4 p-3'>Detail de commande</h1>
        <div className="container">
            <h2 className='font-weight-bold my-3'>Liste de voitures</h2>
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {voitures.map((voiture) => (
                    <div className="col" key={voiture.id}>
                        <CardVoiture voiture={voiture}/>
                    </div>
                    ))
                }
            </div>
        </div>
        <hr/>
        
        
        <div className="container">
            <h2 className='font-weight-bold my-5'>Prix total avec taxes</h2>
            <h5 className="mt-2">Total HT : {total} $</h5>
            <h5 className="mt-2">TPS - 5 %  = {total * 0.05}  $</h5>
            <h5 className="mt-2">TPQ - 9.975 %  = {total * 0.09975} $</h5>
            <h5 className="mt-2">TOTAL TAXES - 14.975 %  = {(total * 0.09975) + (total * 0.05)} $</h5>
            <h5 className="mt-2">Total TTC = {(total * 0.09975) + (total * 0.05) + total}  $</h5>
        </div>
        <hr />
        <form className='form  border-opacity-25 rounded my-5' onSubmit={formik.handleSubmit}>
            <div className='row row-cols-1 row-cols-md-2 g-4 my-3'>
                
                <div className="container">
                    <h2 className='font-weight-bold my-3 text-center'>Mode de paiement</h2>
                    <select className="form-select form-select-sm my-3" 
                    aria-label=".form-select-sm example" 
                    {...formik.getFieldProps('modePaiementId')}
                    >
                        <option >Choisir mode de paiement</option>
                        <option value="1">Cash</option>
                        <option value="2">Carte de credit</option>
                    </select>
                    <span className='text-danger'>{formik.touched.modePaiementId && formik.errors.modePaiementId ?
                            <FormattedMessage id={formik.errors.modePaiementId}/> : ''}</span>
                </div>
                <div className="container">
                    <h2 className='font-weight-bold my-3 text-center'>Mode de livraison</h2>
                    <select className="form-select form-select-sm my-3" 
                    aria-label=".form-select-sm example"
                    {...formik.getFieldProps('expeditionId')}
                    >
                        <option >Choisir mode de livraison</option>
                        <option value="1">A votre adresse</option>
                        <option value="2">En magazin</option>
                    </select>
                    <span className='text-danger'>{formik.touched.expeditionId && formik.errors.expeditionId ?
                            <FormattedMessage id={formik.errors.expeditionId}/> : ''}</span>
                </div>
            </div>
            <div className='container my-4'>
                <button type="submit" className="btn btn-outline-primary">
                    Valider
                </button>
            </div>
        </form>
    
        
    </div>
)
}

export default NouvelleCommande;
