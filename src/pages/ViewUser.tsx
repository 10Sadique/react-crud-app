import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
    let { id } = useParams();

    console.log(id, typeof id);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        website: '',
    });

    const loadUser = async (id: string | undefined): Promise<void> => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);

        setUser(result?.data);
    };

    useEffect(() => {
        if (id === undefined) return;
        loadUser(id);
    }, []);

    const { name, email, username, website } = user;

    return (
        <div className="md:px-20 px-5 py-10 h-screen">
            <h1 className="font-bold text-gray-700 text-2xl text-center">
                User ID: {id}
            </h1>
            <div className="bg-gray-300 p-10 my-10 rounded-lg shadow-lg md:mx-20 text-gray-700 space-y-2">
                <h1 className="text-3xl font-semibold">Name: {name}</h1>
                <p className="text-xl">Username: {username}</p>
                <p className="text-xl">Email: {email}</p>
                <p className="text-xl">Website: {website}</p>
            </div>
        </div>
    );
};

export default ViewUser;
