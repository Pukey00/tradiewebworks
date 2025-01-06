import { Code2, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const TechHeader = () => {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ];

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {item.label}
        </a>
      ))}
      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
        Get Started
      </Button>
    </>
  );

  return (
    <header className="bg-[#0A0F1C] py-4 px-6 border-b border-[#1A1F2C] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold text-white">
            ByteForge<span className="text-blue-500">Labs</span>
          </span>
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
          <SheetContent side="right" className="bg-[#0A0F1C] w-[300px] p-6">
            <nav className="flex flex-col gap-6 mt-6">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};