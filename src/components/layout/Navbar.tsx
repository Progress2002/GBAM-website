import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { cn } from "@/lib/utils";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
  function handleClickOutside(e: MouseEvent) {
    if (isOpen && navRef.current && !navRef.current.contains(e.target as Node )) {
      setIsOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isOpen]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    ref={navRef}
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ",
        isScrolled || isOpen
          ? "bg-gbam-dark/90 backdrop-blur shadow-lg py-2 "
          : "bg-[#1a212e79] py-4"
      )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/gbam logo.png"
              alt="GBAM Logo"
              className="!h-12 md:!h-14 mr-2"
            />
          </a>
          <div className="hidden lg:flex ">
            <NavbarContent />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden !text-white">
            {isOpen ? <IoClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gbam-dark/95 backdrop-blur-md absolute top-full left-0 w-full py-4 px-4 animate-fade-in">
            <NavbarContent closeMenu={closeMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
