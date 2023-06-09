import React from 'react';
import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../components/pages/Home/Home';
import Category from '../components/pages/Category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../components/pages/News/News';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../components/pages/LoginAndRegister/Login';
import Register from '../components/pages/LoginAndRegister/Register';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    
    {
        path: 'category',
        element: <Main></Main>,
        children: [

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-johuruljoy69.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-johuruljoy69.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;