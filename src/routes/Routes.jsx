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
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;