import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export const LandscapeHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/landscape-design" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">GreenScape Gardens</span>
          </Link>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="#" className="text-green-700 hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-green-700 hover:text-green-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="#" className="text-green-700 hover:text-green-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="#contact" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};