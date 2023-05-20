import Image from 'next/image';
import React, { use } from 'react';

interface User {
  id: number;
  name: string;
  image: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

interface MemberCardProps {
  user: User;
}

const MemberCard: React.FC<MemberCardProps> = ({ user }) => {
  const imageDefault = "https://www.flaticon.es/icono-gratis/usuario-de-perfil_64572?term=miembros&page=1&position=8&origin=tag&related_id=64572"
  return (
    <div className="flex flex-col bg-white items-center rounded-lg shadow-lg p-2 mx-1 my-4 w-3/4">
      <Image 
        src={"https://cdn-icons-png.flaticon.com/512/2883/2883885.png"}
        alt='foto'
        width={140}
        height={140}
      />
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
