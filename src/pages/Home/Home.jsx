
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TabItems from "./TabsItems/TabItems";
import TourType from "./TourType/TourType";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel Beat | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <TabItems></TabItems>
                <TourType></TourType>
            </div>
        </div>
    );
};

export default Home;