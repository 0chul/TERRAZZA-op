import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Cafe & Wine", href: "#menu" },
    { name: "Space Rental", href: "#rental" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reservation", href: "#reservation" },
    { name: "Location", href: "#location" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory border-b border-charcoal/10">
      <div className="flex justify-between items-center px-4 md:px-12 py-6">
        
        {/* Desktop Left Nav */}
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/70">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="hover:text-charcoal transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="text-2xl md:text-3xl font-serif tracking-tight text-center text-charcoal"
        >
          {siteConfig.name}
        </a>

        {/* Desktop Right Nav */}
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/70 items-center">
          {navLinks.slice(3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="hover:text-charcoal transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-charcoal hover:text-terracotta focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ivory border-b border-charcoal/10 flex flex-col px-4 py-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal/70 py-4 border-b border-charcoal/5 hover:text-terracotta"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
