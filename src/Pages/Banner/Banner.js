import React from "react";
import { Link } from "react-router-dom";
import banner from "../../image/online-doctor-app.gif";

const Banner = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        {/* banner text  */}

                        <div className="p-8 sm:p-16 lg:p-24 text-teal-400">
                            <h2 className="text-2xl font-bold sm:text-3xl">Patient Care</h2>
                            <p className="text-xl my-3">Doctor Service</p>

                            <p className="mt-4 text-gray-600">
                                Patient Information means the health information in your medical or other healthcare records. It also includes information in your records that can identify you. For example, it can include your name, address, phone number, birthdate, and medical record number
                            </p>

                            <Link
                                to="/add-details"
                                className="mt-8 inline-block rounded border border-teal-400 bg-teal-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Add Patient Details
                            </Link>
                        </div>
                    </div>

                    {/* banner image  */}
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-96 sm:h-80 lg:h-full rounded-lg shadow-lg overflow-hidden">
                            <img
                                alt="House"
                                src={banner}
                                className="absolute inset-0 mx-auto z-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;