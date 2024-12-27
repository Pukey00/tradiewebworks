import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-tradie-navy py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-tradie-orange">Tradie</span> Web Works
        </Link>
        <nav>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-tradie-orange transition-colors"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};