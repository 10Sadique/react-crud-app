import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import About from './pages/About';
import AddUser from './pages/AddUser';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

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
            { path: 'add-user', element: <AddUser /> },
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
