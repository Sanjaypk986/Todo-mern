import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-100 mb-4 md:mb-0">&copy; 2024 Taskly. All rights reserved.</p>
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div>
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">Privacy Policy</a>
            <span className="text-gray-100"> | </span>
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
