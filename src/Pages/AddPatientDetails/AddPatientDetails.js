import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../PrimaryButton/PrimaryButton';

const AddTask = () => {
    const [users, setUsers] = useState({});
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(users);


        fetch('https://patient-details-server.vercel.app/taskManagement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Added Sucessfully');
                    event.target.reset();
                    navigate('/my-task')
                }
            })
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...users };
        newUser[field] = value;
        setUsers(newUser);
    }

    return (
        <div className='container w-11/12 m-auto my-10'>
            <section className="p-6 bg-gray-200 text-black-50 rounded">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="text-3xl">Add Patient Details</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            <div className="col-span-full sm:col-span-3">
                                <input onBlur={handleInputBlur} type="text" name="taskTitle" placeholder="patient Name" className="w-full rounded focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <input onBlur={handleInputBlur} type="text" name="taskWork" placeholder="Disease" className="w-full rounded focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>


                            <div className="col-span-full sm:col-span-2">
                                <input onBlur={handleInputBlur} id="city" name="startDate" type="date" placeholder="DD/MM/YYYY Start Date" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <input onBlur={handleInputBlur} type="email" name="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>

                            <div className="col-span-full">
                                <textarea onBlur={handleInputBlur} name="taskDescription" placeholder='Details' id="" cols="30" rows="4" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" required></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex">
                                    <input onBlur={handleInputBlur} type="file" name="image" id="files" className="px-8 py-12 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-200" />
                                </div>
                            </div>

                            <PrimaryBtn> Submit</PrimaryBtn>


                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddTask;