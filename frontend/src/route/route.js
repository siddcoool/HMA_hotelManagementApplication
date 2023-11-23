import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Booking from '../pages/Booking'
import HorizontalLayout from '../layout/HorizontalLayout';
import BlankLayout from '../layout/BlankLayout';
import AboutUs from '../pages/About';
import ContactUs from '../pages/ContactUs';
import MyBookings from '../pages/MyBookings'
import CreateRoom from '../pages/CreateRoom';
import Users from '../pages/Users';
import AuthenticationProvider from '../common/provider/AuthenticationProvider';
import ThankYou from '../pages/Thankyou';

const routes = [
    {
        path: "/",
        layout: HorizontalLayout,
        component: Home,
        isAdminProtected: false,
    }, {
        path: "/login",
        layout: BlankLayout,
        component: Login,
        isAdminProtected: false,
    }, {
        path: "/register",
        layout: BlankLayout,
        component: Signup,
        isAdminProtected: false,
    }, {
        path: "/users",
        layout: HorizontalLayout,
        component: Users,
        isAdminProtected: true,
    },
    {
        path: "/about",
        layout: HorizontalLayout,
        component: AboutUs,
        isAdminProtected: false,
    },
    {
        path: "/contact",
        layout: HorizontalLayout,
        component: ContactUs,
        isAdminProtected: false,
    },
    {
        path: "/mybookings",
        layout: HorizontalLayout,
        component: MyBookings,
        isAdminProtected: false,
    },
    {
        path: "/thank-you",
        layout: HorizontalLayout,
        component: ThankYou,
        isAdminProtected: false,
    },
    {
        path: "/room/:roomId/booking",
        layout: HorizontalLayout,
        component: Booking,
        isAdminProtected: false,
    },{
        path: "/room/create",
        layout: HorizontalLayout,
        component: CreateRoom,
        isAdminProtected: false,
    }
]

export const createRoutes = () => {
    const newRoutes = routes.map((route) => {
        const Layout = route.layout
        const Component = route.component
        return {
            path: route.path,
            element: <AuthenticationProvider isAdminProtected={route.isAdminProtected}>
                <Layout>
                    <Component />
                </Layout>
            </AuthenticationProvider>,
        }
    })
    return newRoutes
}