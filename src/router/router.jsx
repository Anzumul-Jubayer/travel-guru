import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import Blog from '../pages/Blog';

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
              path:'/',
              element:<Home/>  
            },
            {
              path:'/blog',
              element:<Blog/>  
            }
        ]
    }
])

export default router;