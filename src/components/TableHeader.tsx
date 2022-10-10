import React from 'react';

const TableHeader: React.FC = (): JSX.Element => {
    return (
        <thead className="bg-gray-500 text-white w-full">
            <tr className="w-full">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Username</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Website</th>
                <th className="py-3 px-4 text-left">Action</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
