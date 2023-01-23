import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddPatientDetails from "../Pages/AddPatientDetails/AddPatientDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Patient Data/Details";
import PatientData from "../Pages/Patient Data/PatientData";
import Register from "../Pages/Register/Register";
// import About from '../Pages/About/About'
import Blogs from '../Pages/Blogs/Blogs'
import Update from "../Pages/Update/Update";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-details',
                element: <AdminRoutes><AddPatientDetails></AddPatientDetails></AdminRoutes>
            },
            {
                path: '/patient-data',
                // element: <PrivateRoutes><PatientData></PatientData></PrivateRoutes>
                element: <AdminRoutes><PatientData></PatientData></AdminRoutes>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://patient-details-server.vercel.app/taskManagement/${params.id}`),
                element: <Update></Update>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://patient-details-server.vercel.app/taskManagement/${params.id}`),
                element: <PrivateRoutes><Details></Details></PrivateRoutes>
            }

        ]
    }
]);

export default router;