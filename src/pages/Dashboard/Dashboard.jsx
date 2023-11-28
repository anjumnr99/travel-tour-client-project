import { FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";
const Dashboard = () => {
    return (
        <div className="pt-[140px] md:pt-[180px] lg:pt:[127] pb-20 px-2 md:px-5">
            <div className= " grid grid-cols-1 md:grid-cols-12 gap-2">
                {/* dashboard side bar */}
                <div className="w-full md:col-span-4 lg:col-span-2 h-fit md:min-h-fit bg-blue-400">
                    <div className="menu p-1 md:p-4 ">
                        {
                            // isAdmin ? <>

                            //     <li>
                            //         <NavLink to="/dashboard/adminHome">
                            //             <FaHome></FaHome>
                            //             Admin Home</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to="/dashboard/addItems">
                            //             <FaUtensils></FaUtensils>
                            //             Add Items</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to="/dashboard/manageItems">
                            //             <FaList></FaList>
                            //             Manage Items ({cart.length})</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to="/dashboard/manageBookings">
                            //             <FaBook></FaBook>
                            //             Manage Bookings</NavLink>
                            //     </li>
                            //     <li>
                            //         <NavLink to="/dashboard/allUsers">
                            //             <FaUsers></FaUsers>
                            //             All Users</NavLink>
                            //     </li>

                            // </> : 
                            <ul className="flex md:flex-col">
                                <li>
                                    <NavLink to="/dashboard/my-profile"  className={`p-2 rounded-sm`}>
                                        <FaUser/>
                                        My profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-bookings" className={`p-2 rounded-sm`}>
                                    <BsBookmarkCheckFill />
                                        My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-wishlist" className={`p-2 rounded-sm`}>
                                    <RiFileList3Fill />
                                        My Wishlist 
                                        {/* ({cart.length}) */}
                                        </NavLink>
                                </li>

                            </ul>
                        }

                        {/* Common Nav links between admin and users */}
                        {/* <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad">
                                <FaSearch></FaSearch>
                                Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/contact">
                                <FaEnvelope></FaEnvelope>
                                Contact</NavLink>
                        </li> */}
                    </div>
                </div>
                {/* dashboard content */}
                <div className="w-full md:col-span-8 lg:col-span-10 ">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;