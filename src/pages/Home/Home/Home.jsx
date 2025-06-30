import { Helmet } from "react-helmet";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";

const Home = () => {
    return (

       <div>
         <div>
             <Helmet>
        <title>Home | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
           <div>
            <Navbar></Navbar>
            <ExploreTfbButton></ExploreTfbButton>
           </div>
        </div>
       </div>
    );
};

export default Home;