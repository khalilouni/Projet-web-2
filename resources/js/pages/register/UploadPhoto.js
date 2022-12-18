import { useState} from "react";
import {URL} from "../../constantes";
import axios from "axios";
import {FormattedMessage} from 'react-intl'

const UploadPhoto = () => {

    const [imageData, setImageData] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleChangeCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleChange = (e) => {
        const imagesArray = [];

        for (let i = 0; i < e.target.files.length; i++) {
            imagesArray.push(e.target.files[i]);
        }
        setImageData(imagesArray);
    };

    const submitData = (e) => {
        e.preventDefault();

        const fileData = new FormData();

        for (let i = 0; i < imageData.length; i++) {
            fileData.append("photos[]", imageData[i]);
        }

        axios
        .post(`${URL}/api/v1/ajout-photo`, fileData)
        .then((res) => {
            console.log(res, "response");
            setTimeout(() => {
                setImageData("");
            }, 1000);
    
            document.querySelector("#imageForm").reset();

        })
        .catch((e) => {
            console.error("failure", e);
        });
    };

    return (
        <form onSubmit={submitData} encType="multipart/form-data" id="imageForm">
            <h1 className='title-form text-center m-4 p-3'><FormattedMessage id="ajout_photo.form_titre" /></h1>
            <div className="mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="primaire"
                    checked={isChecked}
                    onChange={handleChangeCheck}
                />
            </div>
            <div className="mb-3">
                <input
                    type="file"
                    name="photo"
                    className="form-control mt-3"
                    onChange={handleChange}
                    multiple
                />
            </div>
            <button className="btn btn-success mt-3" type="submit">
                <FormattedMessage id="ajout_photo.bouton_ajout" />
            </button>
        </form>

    );
}

export default UploadPhoto;
