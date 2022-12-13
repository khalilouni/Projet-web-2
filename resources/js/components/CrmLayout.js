import {Outlet} from "react-router-dom";
import CrmHeader from './CrmHeader';

const CrmLayout = () => {
    return (
        <div>
            <CrmHeader/>
            <div className='container' style={{marginTop: '5vh'}}>
                <Outlet/>
            </div>
        </div>
    );
};

export default CrmLayout;
