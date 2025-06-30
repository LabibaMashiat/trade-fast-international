
import { Outlet } from 'react-router-dom'; // Add this import
import Navbar from '../pages/Shared/Navbar/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer/Footer';


const Main = () => {
    return (
        <div>

            
            
           <div className='pt-[96px] sm:pt-[96px] md:pt-[128px] lg:pt-[128px] '>
            <Outlet></Outlet>
           </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Main;