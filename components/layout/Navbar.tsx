"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data";
import Logo from "../ui/logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Auto-close Sheet when screen resizes to md+
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (mediaQuery.matches) setOpen(false);
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <header className="w-full border-b border-border bg-background z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center lg:space-x-8 md:space-x-4 space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-rose-700 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-rose-600 py-6 px-6  cursor-pointer text-white hover:bg-rose-700 transition-colors">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Sheet Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <nav className="flex flex-col gap-6 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-rose-800"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-rose-600 cursor-pointer text-white hover:bg-rose-700 w-full mt-4 py-6 px-4 transition-colors">
                Free Consultation
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
