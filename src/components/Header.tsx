import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";
import { LogOut, Menu, Shield } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HeaderProps {
  userEmail?: string;
  isLoggedIn?: boolean;
  onSignOut?: () => void;
}

export const Header = ({ userEmail, isLoggedIn, onSignOut }: HeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed:", user?.email);
      setCurrentUser(user?.email || null);
    });

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

  const isAdmin = currentUser === "lhollins0@gmail.com";

  const NavItems = () => (
    <>
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="text-white hover:text-tradie-orange transition-colors"
      >
        Contact Us
      </button>
      {currentUser ? (
        <>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-tradie-orange transition-colors p-0"
                  onClick={() => navigate('/dashboard')}
                >
                  {currentUser}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="px-4 py-2">
                Click to view dashboard
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {isAdmin && (
            <Button 
              variant="outline" 
              className="text-tradie-navy hover:text-tradie-orange border-white hover:border-tradie-orange flex items-center gap-2"
              onClick={() => navigate('/admin')}
            >
              <Shield className="h-4 w-4" />
              Admin
            </Button>
          )}
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
    </>
  );

  return (
    <header className="bg-tradie-navy py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-tradie-orange">Tradie</span> Web Works
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItems />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-tradie-navy w-[300px] p-6">
            <nav className="flex flex-col gap-6 mt-6">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};