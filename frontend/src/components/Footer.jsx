function Footer() {
    return (
      <footer className="bg-gray-900/90 border-t border-white/10 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 py-10">
  
          <div className="grid gap-8 md:grid-cols-4">
  
            {/* Logo + About */}
            <div>
              <div className="flex items-center gap-2">
                <img
                  className="h-8"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="logo"
                />
                <span className="text-white font-semibold">Stock Pred</span>
              </div>
              <p className="mt-3 text-sm text-gray-400">
               Stock Predition Portam powered by React and Django REST Framework.
              </p>
            </div>
  
            {/* Links */}
            <div>
              <h3 className="mb-3 font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Dashboard</li>
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h3 className="mb-3 font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms</li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="mb-3 font-semibold text-white">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: support@hradmin.com</li>
                <li>Phone: +880 1XXX-XXXXXX</li>
                <li>Feni, Bangladesh</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Sayed. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  