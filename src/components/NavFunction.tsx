import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 w-4/5 mx-auto my-6 md:flex-row md:w-3/4">
      <input
        type="text"
        placeholder="Buscar..."
        className="font-semibold text-lg placeholder-sky-700 text-sky-600 rounded-md w-full sm:w-full px-4 py-2 bg-gray-200  md:w-3/4 max-w-5xl"
      />
      <button className=" font-semibold px-4 py-2 bg-gray-800 mx-5 my-3 text-white text-lg rounded w-1/2 md:w-1/4 md:max-w-2xl ">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
