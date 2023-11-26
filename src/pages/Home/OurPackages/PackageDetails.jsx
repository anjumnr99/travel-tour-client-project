
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Gallary from "./Gallary";


const PackageDetails = () => {

    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    
    // console.log(id);

    const { data: packageDetail } = useQuery({
        queryKey: ['package'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/packages/${id}`);
            // console.log('res data:',res.data);
            return res.data;
        }
    });
   
    console.log(packageDetail);

    const {_id, images, tour_type, trip_title, price, tour_description, tour_plan, tour_guides}= packageDetail || {};

    return (
        <div>
            <section className="">
                <Gallary images={images}></Gallary>
            </section>
            
        </div>
    );
};

export default PackageDetails;