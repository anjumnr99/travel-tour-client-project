
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Gallary from "./Gallary";
import TourGuideList from "./TourGuideList";


const PackageDetails = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    // console.log(id);

    const { data: packageDetail } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages/${id}`);
            // console.log('res data:',res.data);
            return res.data;
        }
    });

    console.log(packageDetail);

    const { _id, images, tour_type, trip_title, price, tour_description, tour_plan, tour_guides } = packageDetail || {};

    return (
        <div>
            <div className="mb-10">
                <Gallary images={images}></Gallary>
            </div>
            <div className="text-2xl px-5">
                {tour_description}
            </div>
            <div className="my-10 px-5">
                <h1 className="text-2xl mb-5 text-blue-500 font-bold">Tour Plan:</h1>
                <div>
                    {
                        tour_plan?.map((tour, index) => <div key={index}>
                            <h2>
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-xl font-semibold text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" >
                                    Day : {tour.day}
                                </button>
                            </h2>
                            <div  >
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-lg text-gray-700 dark:text-gray-400">{tour.place_description}</p>

                                </div>
                            </div>
                        </div>)
                    }
                </div>


            </div>

            <div className="bg-blue-100 py-4">
                <h1 className='text-3xl lg:text-5xl font-semibold text-slate-800 text-center my-10'>Our Tour Guides </h1>
                <TourGuideList></TourGuideList>

            </div>



        </div>
    );
};

export default PackageDetails;