"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoImg from "@/assets/protrianrathome-logo.png";

const navItems = ["About Us", "Programs", "Training Plans", "Contact Us"];

interface NavbarProps {
  onBookConsultation: () => void;
}

const Navbar = ({ onBookConsultation }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getNavLink = (item: string) => {
    if (item === "Programs") return "/programs";
    return `#${item.toLowerCase().replace(" ", "-")}`;
  };

  const isActive = (item: string) => {
    if (!mounted) return false;
    if (item === "Programs") return pathname === "/programs";
    return false;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-xl border-b border-border/20"
    >
      <div className="  flex items-center justify-between py-4 px-4">
        <a href="/" className="flex items-center gap-2 text-primary font-display text-2xl">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src={logoImg}
              alt="ProTrainrAtHome"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md"
            />
          </div>
          {/* <span className="hidden sm:block">MomFitConsult</span> */}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={getNavLink(item)}
              className={`text-sm transition-colors ${
                isActive(item)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={onBookConsultation}
          className="hidden md:inline-flex glow-button px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
        >
          Book Consultation
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/30 px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={getNavLink(item)}
              className={`block py-3 transition-colors ${
                isActive(item)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => { setIsOpen(false); onBookConsultation(); }}
            className="block w-full mt-2 text-center glow-button px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Book Consultation
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
