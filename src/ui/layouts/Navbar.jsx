import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" }
];

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "py-3 glass-strong" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tight hover:text-primary" href="#">CB<span className="text-primary">.</span></a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-2">
          <div className="rounded-full px-2 py-1 flex items-center gap-1 glass">
            {navLinks.map((link, index) => (
              <a className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface" href={link.href} key={index}>{link.label}</a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Nav Button */}
        <button className="md:hidden block text-foreground p-2 cursor-pointer" onClick={() => setIsMobileNavOpen((prev) => !prev)}>
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navbar */}
      {isMobileNavOpen && (
        <div className="md:hidden glass-strong">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, navIndex) => (
              <a href={link.href} key={navIndex} className="text-lg text-muted-foreground hover:text-foreground py-2" onClick={() => setIsMobileNavOpen(false)}>{link.label}</a>
            ))}

            <Button size="sm" onClick={() => setIsMobileNavOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  )
}
