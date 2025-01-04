import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully logged in user:", userCredential.user.email);
      
      toast({
        title: "Success",
        description: "Successfully logged in!",
      });
      
      navigate("/"); // Redirect to home page after successful login
    } catch (error: any) {
      console.error("Login error:", error);
      
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to login. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-tradie-navy">
              Welcome Back
            </h2>
            <p className="mt-2 text-tradie-gray">
              Sign in to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tradie-navy">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-tradie-navy">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full bg-tradie-orange hover:bg-orange-600 text-white"
              >
                Sign in
              </Button>
              
              <div className="text-center">
                <p className="text-tradie-gray">
                  Don't have an account?{" "}
                  <Button 
                    variant="link" 
                    className="text-tradie-orange hover:text-orange-600 p-0"
                    onClick={() => navigate('/signup')}
                  >
                    Get started
                  </Button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;