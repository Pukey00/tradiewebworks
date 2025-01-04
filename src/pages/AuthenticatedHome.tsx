import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AuthenticatedHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-tradie-navy mb-8">Welcome to Your Dashboard</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Create Website</h3>
                <p className="text-gray-600">Start building your professional website</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">View Analytics</h3>
                <p className="text-gray-600">Check your website performance</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Edit Profile</h3>
                <p className="text-gray-600">Update your business information</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthenticatedHome;