import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyTask = () => {


    const { data: taskManagement = [], refetch, isLoading } = useQuery({
        queryKey: ['taskManagement'],
        queryFn: async () => {
            const res = await fetch('https://patient-details-server.vercel.app/taskManagement');
            const data = await res.json();
            return data;
        }
    });

    const handleTaskDelete = task => {
        fetch(`https://patient-details-server.vercel.app/taskManagement/${task._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Task Deleting Successfully');
                    refetch()
                }
            })
    }



    if (isLoading) {
        return <h1>Loading..........</h1>
    }

    return (


        <section className="antialiased bg-gray-100 text-gray-600 py-5 px-4" x-data="app">
            <div className="flex flex-col justify-center h-full">

                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <div className="font-semibold text-gray-800">Patient List</div>
                    </header>

                    <div className="overflow-x-auto p-3">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Image</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Name</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Disease</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left"> Date</div>
                                    </th>

                                    <th className="p-2">
                                        <div className="font-semibold text-left"> Details</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">Delete</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">Update</div>
                                    </th>

                                </tr>
                            </thead>

                            <tbody className="text-sm divide-y divide-gray-100">

                                {
                                    taskManagement.map(task => task?.taskCondision !== 'complated' && <tr key={task._id} >
                                        <td className="p-2">
                                            <div className="font-medium text-gray-800">
                                                Image
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="font-medium text-gray-800">
                                                {task.taskTitle}
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="font-medium text-gray-800">
                                                {task.taskWork}
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="font-medium text-gray-800">
                                                {task.startDate}
                                            </div>
                                        </td>

                                        <td className="p-2">
                                            <div className="text-left font-medium text-green-500">
                                                <Link to={`/details/${task._id}`}><button className='bg-green-500 text-white py-1 px-2 rounded'>Details</button></Link>
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <button onClick={() => handleTaskDelete(task)}>
                                                    <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <Link to={`/update/${task._id}`}><button className='bg-red-500 text-white py-1 px-2 rounded'>Update</button></Link>
                                            </div>
                                        </td>

                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>


                    <div className="flex justify-end">

                        <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
                    </div>
                </div>
            </div>

        </section>

    );
};

export default MyTask;