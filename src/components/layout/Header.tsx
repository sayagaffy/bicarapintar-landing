"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn, scrollToElement } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Platform", href: "#platform", hasDropdown: true },
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Implementation", href: "#implementation" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (href: string) => {
    const elementId = href.replace("#", "");
    scrollToElement(elementId, 80);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-void-black/95 backdrop-blur-md border-b border-charcoal/50"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* BicaraPintar Logo Mark */}
              <div className="flex justify-center items-center w-8 h-8">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-arctic-white"
                  fill="currentColor"
                >
                  {/* Simplified infinity symbol with B integration */}
                  <path
                    d="M25,50 C25,35 35,25 50,25 C65,25 75,35 75,50 C75,65 65,75 50,75 C35,75 25,65 25,50 Z M75,50 C75,35 85,25 100,25 C85,25 75,35 75,50 C75,65 85,75 100,75 C85,75 75,65 75,50 Z"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <div className="font-goli font-semibold text-arctic-white text-xl">
                bicarapintar
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-1 py-2 text-light-gray hover:text-arctic-white transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Dropdown placeholder for future implementation */}
                {item.hasDropdown && (
                  <div className="invisible group-hover:visible top-full left-0 absolute bg-droplet opacity-0 group-hover:opacity-100 shadow-xl mt-2 border border-charcoal rounded-lg w-48 transition-all duration-200">
                    <div className="p-2">
                      <div className="p-2 text-light-gray text-sm">
                        Coming soon...
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleNavClick("#demo")}
            >
              View Demo
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick("#contact")}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-light-gray hover:text-arctic-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden top-full right-0 left-0 absolute bg-void-black/95 backdrop-blur-md border-charcoal/50 border-b">
            <nav className="space-y-4 px-4 py-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block py-2 w-full text-light-gray hover:text-arctic-white text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <div className="space-y-3 pt-4 border-charcoal border-t">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleNavClick("#demo")}
                >
                  View Demo
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleNavClick("#contact")}
                >
                  Schedule Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
