
import { Outlet } from 'react-router-dom'; // Add this import


const Main = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;