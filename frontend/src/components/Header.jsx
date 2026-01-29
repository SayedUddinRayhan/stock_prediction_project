import { useState } from 'react'

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

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
              <a className="text-white font-medium">Dashboard</a>
              <a className="text-gray-300 hover:text-white">Team</a>
              <a className="text-gray-300 hover:text-white">Projects</a>
              <a className="text-gray-300 hover:text-white">Calendar</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Profile */}
            <div className="relative">
              <img
                onClick={() => setProfileOpen(!profileOpen)}
                className="h-8 w-8 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt=""
              />

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded bg-gray-700 shadow">
                  <a className="block px-4 py-2 hover:bg-gray-600">Profile</a>
                  <a className="block px-4 py-2 hover:bg-gray-600">Settings</a>
                  <a className="block px-4 py-2 hover:bg-gray-600">Logout</a>
                </div>
              )}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <a className="block py-2 text-white">Dashboard</a>
          <a className="block py-2 text-gray-300">Team</a>
          <a className="block py-2 text-gray-300">Projects</a>
          <a className="block py-2 text-gray-300">Calendar</a>
        </div>
      )}
    </nav>
  );
}

export default Header