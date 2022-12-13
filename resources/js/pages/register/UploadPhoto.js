import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'

import {URL} from "../../constantes";
import { ToastContainer, toast } from 'react-toastify';

const UploadPhoto = () => {


    const [image, setImage] = useState([]);

    useEffect(() => {
       
    }, []);

    const onSubmit = (e) => {
        e.preventDeafult();

        // axios({
        //     method: 'post',
        //     url: `${URL}/api/v1/photo`,
        //     data: image
        // }).then(res => {
        //     if (res.status == 200) {
        //         toast.success(<FormattedMessage id={"ajout_voiture_success"} /> , {
        //             position: toast.POSITION.TOP_CENTER
        //         })
        //     }
        // })

    }

   

    return (
        <form className='form px-5 border-opacity-25 rounded bg-light' enctype="multipart/form-data" style={{ margin: '15vh' }} onSubmit={onSubmit}>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'><FormattedMessage id="ajout_voiture.form_titre" /></h1>
            {/* <ToastContainer />   */}
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">image</label>
                    <input
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.current.value)}
                    />
                </div>

                <div className="mb-3 ">
                    <button type="submit" className="btn btn-primary"><FormattedMessage id="enregistrer.form_inscription" /></button>
                    <Link className='btn btn-primary m-3' to='/'><FormattedMessage id="register.form_bt_retour" /></Link>
                </div>
        </form>
    )


}

export default UploadPhoto;