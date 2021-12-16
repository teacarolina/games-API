import React from 'react';

function Navbar({ handleCategoryChanged }) {
  const handleCategoryChange = event => {
      const { value } = event.target;
      handleCategoryChanged(value);
  }

  return (
      <div>
        <div className="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
          <a href="/" className="ml-8 text-lg text-gray-700 hidden md:flex">Free-to-Play Games</a>
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars"></i>
          </div>
          <div className="flex flex-row-reverse mr-8 hidden md:flex">
            <div className=" relative inline-block text-left dropdown">
              <select onChange={handleCategoryChange}>
                <option value="" selected disabled hidden>Categories</option>
                <option value="mmorpg">Mmorpg</option>
                <option value="shooter">Shooter</option>
                <option value="strategy">Strategy</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar;