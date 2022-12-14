import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserType } from '../../type';
import TableHeader from '../components/TableHeader';
import User from '../components/User';

const Home: React.FC = (): JSX.Element => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async (): Promise<void> => {
        const result = await axios.get('http://localhost:3002/users');

        setUsers(result?.data.reverse());
    };

    return (
        <div className="md:px-20 px-5 py-10">
            <h1 className="font-bold mb-5 text-gray-700 text-2xl text-center">
                All Users
            </h1>
            <div className="inline-block rounded-lg border shadow-xl w-full">
                <table className="table-auto w-full">
                    <TableHeader />

                    {users &&
                        users.map((user: UserType, idx: number) => (
                            <User
                                key={user.id}
                                user={user}
                                idx={idx}
                                loadUser={loadUser}
                            />
                        ))}
                </table>
            </div>
        </div>
    );
};

export default Home;
