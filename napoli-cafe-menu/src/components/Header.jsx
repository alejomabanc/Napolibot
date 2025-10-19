import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Napoli Café Logo" className="h-10 mr-2" />
          <div>
            <h1 className="text-2xl font-semibold text-cocoa">Napoli Café</h1>
            <p className="text-sm text-gray-500">Menú Digital</p>
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/profile" className="text-gray-600 hover:text-cocoa">
            <img src="/images/user-icon.png" alt="User Icon" className="h-8 w-8 rounded-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;