import { Helmet } from "react-helmet";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Home | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
           <div>
            <ExploreTfbButton></ExploreTfbButton>
           </div>
        </div>
    );
};

export default Home;