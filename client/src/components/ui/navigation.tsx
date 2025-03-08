import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import logoBlue from "../../assets/black.png"; // Static Blue Logo

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Packages & Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed w-full h-auto z-50 bg-white border-b shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <img
              src={logoBlue} // Static logo
              alt="Auto Levels Logo"
              className="h-24 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`cursor-pointer text-black hover:text-gray-700 ${location === link.href ? "text-yellow-400" : ""}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white text-black border-b shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition ${location === link.href ? "bg-primary/10 text-yellow-400" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
