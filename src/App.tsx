import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import About from './pages/About';
import AddUser from './pages/AddUser';
import Contact from './pages/Contact';
import EditUser from './pages/EditUser';
import Error from './pages/Error';
import Home from './pages/Home';
import ViewUser from './pages/ViewUser';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about', element: <About /> },
            { path: '*', element: <Error /> },
            { path: '/users/add', element: <AddUser /> },
            { path: '/users/edit/:id', element: <EditUser /> },
            { path: '/users/:id', element: <ViewUser /> },
        ],
    },
]);

const App: React.FC = (): JSX.Element => {
    return (
        <div className="bg-gray-50">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
