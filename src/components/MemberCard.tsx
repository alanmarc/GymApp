import React from 'react';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

interface MemberCardProps {
  user: User;
}

const MemberCard: React.FC<MemberCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-auto max-w-sm">
      <div className="text-center">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.age} years old</p>
      </div>
      <div className="mt-4">
        <p className="text-gray-800">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-800">
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-800">
          <span className="font-medium">Address:</span> {user.address}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
