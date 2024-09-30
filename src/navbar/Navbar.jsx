import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'; // Import icons from react-icons

const Navbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search button click
  function handleSearchButton() {
  handleSearch(searchQuery);
  }

  // Function to clear the search bar
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <h1>
            <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-3xl font-medium text-grey-900 ring-1 ring-inset ring-gray-500/10">
              La - Galleria
            </span>
          </h1>

          {/* Search Bar Section */}
          <div className="flex-1 mx-4 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-gray-400" size={20} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cats, dogs, cars, mountains, etc ...."
              className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={handleClearSearch}
              >
                <AiOutlineClose className="text-gray-400" size={20} />
              </span>
            )}
          </div>

          {/* Login & Signup Section */}
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              type='submit'
              onClick={handleSearchButton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
