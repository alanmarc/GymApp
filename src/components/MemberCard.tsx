import Image from 'next/image';
import React, { useState } from 'react';
import FadeAnimation from '../components/FadeAnimation';

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
  const imageDefault = "https://www.flaticon.es/icono-gratis/usuario-de-perfil_64572?term=miembros&page=1&position=8&origin=tag&related_id=64572";
  const [isShowing, setIsShowing] = useState(false);

  const toggleAnimation = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className='text-center w-full'>
       
      <FadeAnimation show={isShowing}>
      <div className={`flex flex-col bg-white items-center rounded-lg shadow-lg p-2 my-5 w-1/2 ${isShowing ? 'hover:bg-gray-200' : ''} md:w-4/5 md:items-center mx-auto`} onMouseEnter={toggleAnimation} onMouseLeave={toggleAnimation}>

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
      </FadeAnimation>
    </div>
  );
};

export default MemberCard;