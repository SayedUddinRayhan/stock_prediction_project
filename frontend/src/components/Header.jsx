import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isAuthenticated = false; 

  return (
    <nav className="bg-gray-800/80">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">
            <img
              className="h-8"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="logo"
            />
            <div className="hidden md:flex gap-4">
              <a className="text-white font-medium">Home</a>
              <a className="text-gray-300 hover:text-white">Services</a>
              <a className="text-gray-300 hover:text-white">About</a>
              <a className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Desktop Login/Register or Profile */}
            {!isAuthenticated ? (
              <div className="hidden md:flex gap-2">
                <button className="text-gray-300 hover:text-white border px-3 py-1 rounded">
                  Login
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded">
                  Register
                </button>
              </div>
            ) : (
              <div className="hidden md:block relative">
                <img
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="h-8 w-8 rounded-full cursor-pointer"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="profile"
                />
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded bg-gray-700 shadow">
                    <a className="block px-4 py-2 hover:bg-gray-600">Profile</a>
                    <a className="block px-4 py-2 hover:bg-gray-600">Settings</a>
                    <a className="block px-4 py-2 hover:bg-gray-600">Logout</a>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a className="block py-2 text-white">Home</a>
          <a className="block py-2 text-gray-300">Services</a>
          <a className="block py-2 text-gray-300">About</a>
          <a className="block py-2 text-gray-300">Contact</a>

          {!isAuthenticated && (
            <div className="flex flex-col gap-2 mt-2">
              <button className="w-full border text-white py-1 rounded">
                Login
              </button>
              <button className="w-full bg-indigo-600 text-white py-1 rounded">
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Header;
