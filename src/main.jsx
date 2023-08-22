import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Main from './Component/Main/Main.jsx'
import SingUp from './Component/Authencation/SingUp/SingUp.jsx'
import Login from './Component/Authencation/Login/Login.jsx'
import AuthProvider from './Component/Authencation/AuthProvider/AuthProvider.jsx'
// import CheckOut from './Component/CheckOut/CheckOut.jsx'
// import Booking from './Component/Booking/Booking.jsx'
// import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx'
import About from './Component/CommonWork/About/About.jsx'



let route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/booking",
        element: <PrivateRoute> <Booking></Booking> </PrivateRoute>
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://care-doctor-server.vercel.app/services/${params.id}`)
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
  {
    path: "*",
    element: <div><h1>400000000000000044444444444</h1></div>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
