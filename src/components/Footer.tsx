export const Footer = () => {
  return (
    <footer className="bg-tradie-navy text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-tradie-orange">Tradie</span> Web Works
          </h2>
          <p className="text-tradie-gray">
            Simple, effective websites for tradies
          </p>
          <p className="mt-4 text-sm text-tradie-gray">
            © {new Date().getFullYear()} Tradie Web Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};