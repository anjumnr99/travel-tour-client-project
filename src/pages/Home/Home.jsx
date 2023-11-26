
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TabItems from "./TabsItems/TabItems";


const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Travel Beat | Home</title>
                </Helmet>
                <div>
                    <Banner></Banner>
                    <TabItems></TabItems>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;