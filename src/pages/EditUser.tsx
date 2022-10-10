import React, { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser: React.FC = (): JSX.Element => {
    let navigate = useNavigate();
    const { id } = useParams();

    const loadUser = async (): Promise<void> => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result?.data);
    };

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        website: '',
    });

    useEffect(() => {
        loadUser();
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleEditUser = async (
        e: MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();

        await axios.put(`http://localhost:3002/users/${id}`, user);
        navigate('/');
    };

    const { name, email, username, website } = user;

    return (
        <div className="md:px-20 px-10 py-10">
            <h1 className="font-bold mb-5 text-gray-700 text-2xl text-center">
                Edit a User
            </h1>
            <div className="md:mx-20 bg-gray-200 px-14 py-10 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 ">
                        <div>
                            <label className="text-gray-700" htmlFor="username">
                                Name:
                            </label>
                            <input
                                onChange={(e) => handleInputChange(e)}
                                value={name}
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700" htmlFor="username">
                                Username:
                            </label>
                            <input
                                onChange={(e) => handleInputChange(e)}
                                value={username}
                                name="username"
                                type="text"
                                placeholder="Enter Username"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700" htmlFor="username">
                                Email:
                            </label>
                            <input
                                onChange={(e) => handleInputChange(e)}
                                value={email}
                                name="email"
                                type="text"
                                placeholder="Enter Email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700" htmlFor="username">
                                Website:
                            </label>
                            <input
                                onChange={(e) => handleInputChange(e)}
                                value={website}
                                name="website"
                                type="text"
                                placeholder="Enter Website"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            onClick={(e) => handleEditUser(e)}
                            className="px-4 py-3 bg-blue-600 rounded-lg shadow-md shadow-blue-600/50 text-white"
                        >
                            Update User Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
