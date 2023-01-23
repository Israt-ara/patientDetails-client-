import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const signOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }


    const mainMenu = <>
        <Link to="/add-details" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Add Patient Details
        </Link>
        <Link to="/patient-data" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Patient Data
        </Link>

        <Link to="/blogs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Blogs
        </Link>

    </>
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to='/'>
                    <span className="ml-2 text-xl font-bold tracking-wide text-sky-300 ">
                        Patient Care
                    </span>
                </Link>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

                <div>
                    {
                        user?.email ?
                            <div>
                                <div className="text-sm lg:flex-grow">
                                    {mainMenu}
                                    <button onClick={signOut} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
                                </div>


                            </div>
                            :
                            <>

                                <Link to="/blogs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                    Blogs
                                </Link>
                                <Link to='/login' className="mx-3 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                                <Link to='/signup' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Register</Link>


                            </>

                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;