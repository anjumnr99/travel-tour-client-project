
import { Helmet, HelmetProvider } from "react-helmet-async";


const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Travel Beat | Home</title>
                </Helmet>
                Home
            </div>
        </HelmetProvider>
    );
};

export default Home;