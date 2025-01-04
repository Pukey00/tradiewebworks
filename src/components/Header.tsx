import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";

interface HeaderProps {
  userEmail?: string;
  isLoggedIn?: boolean;
  onSignOut?: () => void;
}

export const Header = ({ userEmail, isLoggedIn, onSignOut }: HeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed:", user?.email);
      setCurrentUser(user?.email || null);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      toast({
        title: "Signed out successfully",
      });
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "Please try again",
      });
    }
  };

  return (
    <header className="bg-tradie-navy py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-tradie-orange">Tradie</span> Web Works
        </Link>
        <nav className="flex items-center gap-6">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-tradie-orange transition-colors"
          >
            Contact Us
          </button>
          {currentUser ? (
            <>
              <span className="text-white">{currentUser}</span>
              <Button 
                variant="outline" 
                className="text-red-500 hover:text-red-600 border-red-500 hover:border-red-600 flex items-center gap-2"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="text-tradie-navy hover:text-tradie-orange border-white hover:border-tradie-orange"
                onClick={() => navigate('/login')}
              >
                Log In
              </Button>
              <Button 
                className="bg-tradie-orange hover:bg-orange-600 text-white"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};