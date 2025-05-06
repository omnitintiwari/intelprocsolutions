import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span style={{ color: '#1d3865' }}>Intelproc</span>
                <span style={{ color: '#4699d3' }}>Solutions</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              End-to-end procurement services tailored for your industry's toughest challenges.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Supplier Selection</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Product Sourcing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Deal Negotiation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Delivery Management</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Telecom</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Oil & Gas</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">IT</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Shipping & Marine</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} IntelProc Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;