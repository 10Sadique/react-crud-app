import React from 'react';
import { UserType } from '../../type';
import { Link } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

interface UserProp {
    user: UserType;
    idx: number;
    loadUser: Function;
}

const User: React.FC<UserProp> = ({ user, idx, loadUser }): JSX.Element => {
    const { id, name, username, email, website } = user;

    const deleteUser = async (id: number): Promise<void> => {
        await axios.delete(`http://localhost:3002/users/${id}`);

        loadUser();
    };

    return (
        <tbody className="bg-gray-300 even:bg-gray-200">
            <tr className="font-semibold text-gray-700">
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4">{name}</td>
                <td className="py-3 px-4">{username}</td>
                <td className="py-3 px-4">{email}</td>
                <td className="py-3 px-4">{website}</td>
                <td className="py-3 px-4 space-x-2 flex items-center">
                    <Link to={`/users/${id}`}>
                        <button className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md shadow-blue-600/50">
                            <EyeIcon className="h-6 w-6 text-white" />
                        </button>
                    </Link>
                    <Link to={`/users/edit/${id}`}>
                        <button className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md shadow-green-600/50">
                            Edit
                        </button>
                    </Link>
                    <Link onClick={() => deleteUser(id)} to="/">
                        <button className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md shadow-red-600/50">
                            Delete
                        </button>
                    </Link>
                </td>
            </tr>
        </tbody>
    );
};

export default User;
