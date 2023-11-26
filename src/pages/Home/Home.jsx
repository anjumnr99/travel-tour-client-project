
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TabItems from "./TabsItems/TabItems";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel Beat | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <TabItems></TabItems>
            </div>
        </div>
    );
};

export default Home;