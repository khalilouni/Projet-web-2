import { Link } from 'react-router-dom' 
import carImage from './img/com-soon.png'


const CardVoiture = ({size, width, height}) => {
    return(
        <div className="card px-0" style={{ width: width, height: height}}>
            <Link className="text-decoration-none" to="/voiture/:id">
                <img src={carImage} style={{ width: size}} alt="Voiture blanche" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Hyundaï Santa Fe 2013</h5>
                    <div className="card-text text-black d-flex justify-content-between">
                        <p className="">110 430 km</p>
                        <p className="fw-bold fs-4">12 500$</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

CardVoiture.defaultProps = {
    size: '100%',
    width: '18rem',
    height: '25rem',
}

export default CardVoiture

