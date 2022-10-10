import React from 'react';
import { UserType } from '../../type';
import { Link } from 'react-router-dom';

interface UserProp {
    user: UserType;
    idx: number;
}

const User: React.FC<UserProp> = ({ user, idx }): JSX.Element => {
    const { name, username, email, website } = user;
    return (
        <tbody className="bg-gray-300 even:bg-gray-200">
            <tr className="font-semibold text-gray-700">
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4">{name}</td>
                <td className="py-3 px-4">{username}</td>
                <td className="py-3 px-4">{email}</td>
                <td className="py-3 px-4">{website}</td>
                <td className="py-3 px-4 space-x-2">
                    <Link to="view">
                        <button className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md shadow-green-600/50">
                            View
                        </button>
                    </Link>
                    <Link to="edit">
                        <button className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md shadow-blue-600/50">
                            Edit
                        </button>
                    </Link>
                    <Link to="delete">
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
