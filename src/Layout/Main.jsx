
import { Outlet } from 'react-router-dom'; // Add this import
import Navbar from '../pages/Shared/Navbar/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer/Footer';


const Main = () => {
    return (
        <div>

            <Navbar></Navbar>
            <div  className="pt-[96px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;