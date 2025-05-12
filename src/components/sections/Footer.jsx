'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SETMySpace</h3>
            <p className="text-gray-300 text-sm">
              We help you create magical birthday celebrations with the best professionals in your area.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white text-sm">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white text-sm">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">For Professionals</h4>
            <ul className="space-y-2">
              <li><a href="/join" className="text-gray-300 hover:text-white text-sm">Join as Professional</a></li>
              <li><a href="/success-stories" className="text-gray-300 hover:text-white text-sm">Success Stories</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white text-sm">Pricing</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white text-sm">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {/* Example social icon */}
              <a href="#" className="bg-pink-500 p-2 rounded-full hover:bg-pink-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12..." />
                </svg>
              </a>
              {/* Add other icons similarly */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
