import React from "react";

import image1 from '../../image/blog-1.jpg'
import image2 from '../../image/blog-2.jpg'
import image3 from '../../image/blog-3.jpg'
import image4 from '../../image/doc-1.jpg'
import image5 from '../../image/doc-2.jpg'
import image6 from '../../image/doc-3.jpg'
import image7 from '../../image/doc-4.jpg'
import image8 from '../../image/doc-5.jpg'
import image9 from '../../image/doc-6.jpg'
import image10 from '../../image/homeimage.JPG'
const Gallery = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <h2 className="text-3xl font-bold text-teal-500 sm:text-4xl text-center py-6">
                Our Doctors
            </h2>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img
                    src={image1}
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 object-cover rounded shadow-md min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 shadow-teal-200 aspect-square"
                />
                <img
                    alt=""
                    className="w-full h-full rounded object-cover shadow-md shadow-teal-200 min-h-48 dark:bg-gray-500 aspect-square"
                    src={image2}
                />
                <img
                    alt=""
                    className="w-full h-full rounded object-cover shadow-md shadow-teal-200 min-h-48 dark:bg-gray-500 aspect-square"
                    src={image3}
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-md shadow-teal-200 object-cover min-h-48 dark:bg-gray-500 aspect-square"
                    src={image4}
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-md shadow-teal-200 object-cover min-h-48 dark:bg-gray-500 aspect-square"
                    src={image5}
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-md shadow-teal-200 object-cover min-h-48 dark:bg-gray-500 aspect-square"
                    src={image6}
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-md shadow-teal-200 object-cover min-h-48 dark:bg-gray-500 aspect-square"
                    src={image7}
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-md shadow-teal-200 min-h-48 object-cover dark:bg-gray-500 aspect-square"
                    src={image8}
                />
                <img
                    alt=""
                    className="w-full h-full rounded shadow-md shadow-teal-200 min-h-48 object-cover dark:bg-gray-500 aspect-square"
                    src={image9}
                />
                <img
                    src={image10}
                    alt=""
                    className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-md shadow-teal-200 min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                />
            </div>
        </section>
    );
};

export default Gallery;