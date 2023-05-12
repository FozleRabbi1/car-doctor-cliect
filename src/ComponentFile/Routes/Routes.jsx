import Home from '../HomeFile/Home.jsx';
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/MainFile/Main.jsx';
import Login from '../LoginFile/Login.jsx';
import Register from '../RegisterFile/Register.jsx';
import CheckOut from '../CheckOutFile/CheckOut.jsx';
import MainCheckOut from '../CheckOutFile/MainCheckOut.jsx';
import NotFound from '../SharedFile/NotFoundFile/NotFound.jsx';
import BookingData from '../BookingFile/BookingData.jsx';
import PrivateRoute from '../PrivateRouteFile/PrivateRoute.jsx';
import UpdateBooking from '../UpdateBookingFile/UpdateBooking.jsx';


const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            {
                path: "/", element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/services")
            },
            {
                path: "bookingData", element: <PrivateRoute>
                    <BookingData></BookingData>
                </PrivateRoute>
            },
            {path : "updateBooking/:id", element : <UpdateBooking></UpdateBooking>,
        loader : ({params})=> fetch(`http://localhost:5000/booking/${params.id}`) 
        },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> },

        ],
    },
    {
        path: "checkOut", element: <MainCheckOut></MainCheckOut>,
        children: [
            {
                path: ":id", element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            // { path: "bookingData", element: <BookingData></BookingData> },  // ei route ekhane kaj kore ni

        ]
    },
    { path: "*", element: <NotFound></NotFound> }
]);

export default router;