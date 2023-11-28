import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Row from "./Row";


const DataTable = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    console.log(user);
    const { data: bookings } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookings?email=${user?.email}`, {
                withCredentials: true
            });
            // console.log('res data:',res.data);
            return res.data;
        }
    });
    console.log(bookings);



    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                #
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Package
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tour guide
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tour date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bookings?.map((booking, index) => <tr key={index}>
                            <Row index={index} booking={booking}></Row>
                        </tr>)
                    }

                </tbody>



            </table>
        </div>

        // <div className="relative shadow-md sm:rounded-lg">

        //     <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        //         <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        //             <tr>
        //                 <th scope="col" className="p-4">
        //                     <div className="flex items-center">
        //                         #
        //                     </div>
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Package
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Tour guide
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Tour date
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Price
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Status
        //                 </th>
        //                 {/* <th scope="col" className="px-6 py-3">
        //                     Price
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Weight
        //                 </th> */}
        //                 <th scope="col" className="px-6 py-3">
        //                     Action
        //                 </th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 bookings?.map((booking, index) => <Row key={index} index={index} booking={booking}></Row> )
        //             }

        //         </tbody>
        //     </table>
        // </div>

    );
};

export default DataTable;