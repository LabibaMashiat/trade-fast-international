import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";

const Gallery = () => {
    return (
        <div>
             <Helmet>
        <title>Gallery | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
      <div>
         <Navbar></Navbar>
      <ExploreTfbButton></ExploreTfbButton>
      </div>
        </div>
    );
};

export default Gallery;