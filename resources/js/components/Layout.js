import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className='container' style={{marginTop: '5vh'}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
