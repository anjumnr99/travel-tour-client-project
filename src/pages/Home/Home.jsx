
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Travel Beat | Home</title>
                </Helmet>
                <div>
                    <Banner></Banner>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;