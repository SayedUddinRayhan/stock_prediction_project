function Footer() {
  return (
    <footer className="bg-gray-900/90 border-t border-white/10 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

          {/* Logo + About */}
          <div className="w-full md:w-1/2 min-w-0">
            <div className="flex items-center gap-2">
              <img
                className="h-8"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="logo"
              />
              <span className="text-white font-semibold truncate">Stock Pred</span>
            </div>
            <p className="mt-3 text-sm text-gray-400 break-words">
              Stock Prediction Portal using React and Django REST Framework.
            </p>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/2 min-w-0">
            <h3 className="mb-3 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm break-words">
              <li>Email: sayeduddin.cse@gmail.com</li>
              <li>Phone: +8801518-963010</li>
              <li>Feni, Bangladesh</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sayed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
