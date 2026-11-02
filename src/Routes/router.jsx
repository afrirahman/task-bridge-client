import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayouts";
import Home from '../Pages/Home';
import AddTask from "../Pages/AddTask";
import BrowseTasks from "../Pages/BrowseTasks";
import TaskDetails from "../Pages/TaskDetails";
import MyPostedTasks from "../Pages/MyPostedTasks";
import UpdateTask from "../Pages/UpdateTask";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
   {
      path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            path:'/',
        Component: Home   },
        {
            path:'add-task',
            Component: AddTask
        },
        {
            path:'browse-tasks',
            Component: BrowseTasks
        },
        {
            path:'task-details/:id',
            Component: TaskDetails
        },
        {
            path:'my-posted-tasks',
            Component: MyPostedTasks
        },
        {
            path:'update-task/:id',
            Component: UpdateTask
        },
        {
            path:'login',
            Component: Login
        },
        {
            path:'register',
            Component: Register
        },
        {
            path:'*',
            Component: NotFound
        }

    ]
   }
])

export default router;