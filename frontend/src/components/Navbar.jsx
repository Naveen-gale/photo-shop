import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure to npm install lucide-react

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false); // New state for mobile toggle
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
    { name: "LOGIN", path: "/login" },
  ];

  const handleNav = (item) => {
    setActive(item.name);
    navigate(item.path);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <div className="h-20"></div>

      <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
        <nav
          className={`
      relative
      transition-all duration-500 ease-in-out mt-4
      ${scrolled
              ? "w-[90%] md:w-[75%] bg-[#1b1b1b]/95 shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
              : "w-[94%] bg-[#242424]/80"}
      backdrop-blur-xl border border-white/10
      rounded-2xl px-6 py-4
      flex flex-col md:flex-row items-center
    `}
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-extrabold tracking-widest text-white uppercase">
              Photo
              <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]">
                Shop
              </span>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Menu */}
          <div
            className={`
        md:flex items-center gap-10
        absolute md:static top-full left-0 w-full md:w-auto
        bg-[#141414]/95 md:bg-transparent
        rounded-b-2xl md:rounded-none
        mt-4 md:mt-0 py-6 md:py-0
        transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}
      `}
          >
            {menu.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item)}
                className={`
            relative group text-sm font-semibold tracking-widest
            transition-all duration-300 px-4 py-2
            ${active === item.name
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-400"}
          `}
              >
                {item.name}

                {/* Underline */}
                <span
                  className={`
              absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300
              ${active === item.name ? "w-full" : "w-0 group-hover:w-full"}
            `}
                ></span>

                {/* Glow dot */}
                <span
                  className={`
              absolute -top-1 -right-2 w-2 h-2 rounded-full bg-orange-500
              transition-all duration-300
              ${active === item.name
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}
            `}
                ></span>
              </button>
            ))}
          </div>
        </nav>
      </div>

    </>
  );
};

export default Navbar;