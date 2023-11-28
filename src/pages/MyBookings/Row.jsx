

const Row = ({ booking, index }) => {
    const { _id, name, email, guide, date, image, price, packageName, status } = booking || {};
    return (
        <>
            <td >

                {index + 1}

            </td>
            <th >
                {packageName}
            </th>
            <td >
                {guide}
            </td>
            <td >
                {date}
            </td>
            <td >
                {price}
            </td>
            <td >
                {status}
            </td>

            <td className="flex items-center gap-3 px-6 py-4">
                {
                    status === 'Accepted' ? <button className="font-sm btn btn-outline hover:bg-blue-300 hover:text-blue-900 text-blue-600 dark:text-blue-500 ">Pay</button>
                        : <button disabled className="font-sm btn btn-outline hover:bg-blue-300 hover:text-blue-900 text-blue-600 dark:text-blue-500 ">Pay</button>
                }
                {
                    status === "In Review" && <button className="font-sm btn btn-outline hover:bg-red-300 hover:text-red-900 text-red-600 dark:text-red-500 ">Cancel</button>
                }


                <button disabled className="font-sm btn  btn-outline hover:bg-yellow-300 hover:text-yellow-900 text-yellow-400 dark:text-yellow-500  ">Apply</button>
            </td>
        </>

    );
};

export default Row;