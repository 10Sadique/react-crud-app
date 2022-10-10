import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
    return (
        <nav className="px-20 bg-gray-200 flex items-center justify-between py-3">
            <div className="font-bold">
                <NavLink to="/">React CRUD</NavLink>
            </div>
            <div className="space-x-3 font-semibold">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `text-blue-700` : ''
                    }
                    to="/home"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `text-blue-700` : ''
                    }
                    to="/contact"
                >
                    Contact
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `text-blue-700` : ''
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </div>
            <div>
                <NavLink to="adduser">
                    <button className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md shadow-blue-700/50">
                        Add New User
                    </button>
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
