

const Row = ({booking,index}) => {
       const {_id, name, email, guide, date, image, price, packageName,status} = booking || {} ;
    return (
        <tr  className="bg-white border-b text-base dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    {index+1}
                </div>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {packageName}
            </th>
            <td className="px-6 py-4">
                {guide}
            </td>
            <td className="px-6 py-4">
                {date}
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 py-4">
                {status}
            </td>

            <td className="flex items-center gap-3 px-6 py-4">
                {
                    status === 'Accepted' ? <button className="font-xl btn btn-outline hover:bg-blue-300 hover:text-blue-900 text-blue-600 dark:text-blue-500 ">Pay</button>
                    : <button disabled className="font-xl btn btn-outline hover:bg-blue-300 hover:text-blue-900 text-blue-600 dark:text-blue-500 ">Pay</button>
                }
                {
                    status === "In Review" && <button  className="font-xl btn btn-outline hover:bg-red-300 hover:text-red-900 text-red-600 dark:text-red-500 ">Cancel</button>
                }
              
                
                <button disabled className="font-xl btn  btn-outline hover:bg-yellow-300 hover:text-yellow-900 text-yellow-400 dark:text-yellow-500  ">Apply</button>
            </td>
        </tr>

    );
};

export default Row;