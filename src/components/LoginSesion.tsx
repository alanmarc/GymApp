import Image from 'next/image';
import React from 'react';
import Sesion from '../../public/effort.jpg'

const LoginSesion: React.FC = () => {
  return (
    <div className="w-4/5 flex flex-col bg-gradient-to-r from-sky-300 to-blue-600 hover:from-blue-400 hover:to-blue-800 ">
      <div>
        <Image src={Sesion} width={900} height={640} alt='Inicio de sesión'/>
      </div>
      <div className="bg-tra rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSesion;
