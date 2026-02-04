import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Mail, Phone, Instagram, Facebook, Youtube, ChevronRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] text-gray-400 relative overflow-hidden">

            {/* 1. Beautiful Gradient Top Border (The Glow Effect) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9bc7c5] to-transparent opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* Brand Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-white flex items-center gap-3 tracking-tighter">
                        <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#9bc7c5] border border-white/10">
                            <Camera size={22} />
                        </span>
                        Photo Studio
                    </h2>
                    <p className="text-sm leading-7 text-gray-500 max-w-sm">
                        Capturing your special moments with creativity and passion. We turn fleeting seconds into timeless memories.
                    </p>

                    <div className="flex gap-4 pt-2">
                        {/* Social Icons with nice hover bubbles */}
                        {[
                            { icon: <Instagram size={20} />, label: "Instagram" },
                            { icon: <Facebook size={20} />, label: "Facebook" },
                            { icon: <Youtube size={20} />, label: "YouTube" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9bc7c5] hover:text-black transition-all duration-300"
                                title={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
                    <ul className="space-y-4">
                        {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="group flex items-center gap-2 text-sm hover:text-[#9bc7c5] transition-colors duration-300"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#f2c2a2] transition-colors"></span>
                                    {item}
                                    <ChevronRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                            <div className="p-2 bg-white/5 rounded-lg text-[#f2c2a2] group-hover:bg-[#f2c2a2] group-hover:text-black transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <span className="block text-white text-sm font-medium">Location</span>
                                <span className="text-xs">Bengaluru, India</span>
                            </div>
                        </li>

                        <li className="flex items-start gap-4 group">
                            <a href="mailto:studio@gmail.com" className="flex items-start gap-4 w-full">
                                <div className="p-2 bg-white/5 rounded-lg text-[#f2c2a2] group-hover:bg-[#f2c2a2] group-hover:text-black transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="block text-white text-sm font-medium">Email</span>
                                    <span className="text-xs group-hover:text-[#9bc7c5] transition-colors">studio@gmail.com</span>
                                </div>
                            </a>
                        </li>

                        <li className="flex items-start gap-4 group">
                            <a href="tel:+919876543210" className="flex items-start gap-4 w-full">
                                <div className="p-2 bg-white/5 rounded-lg text-[#f2c2a2] group-hover:bg-[#f2c2a2] group-hover:text-black transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="block text-white text-sm font-medium">Phone</span>
                                    <span className="text-xs group-hover:text-[#9bc7c5] transition-colors">+91 98765 43210</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Photo Studio. All rights reserved.</p>
                    <p className="flex gap-6">
                        <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 order-1 md:order-2 group">
      <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 group-hover:bg-[#9bc7c5] transition-all duration-500"></div>
      
      <h3 className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-medium flex items-center gap-2">
        Developed by 
        <span className="text-white font-bold tracking-[0.3em] group-hover:text-[#9bc7c5] transition-colors duration-300">
          NAVEEN
        </span>
      </h3>

      <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 group-hover:bg-[#9bc7c5] transition-all duration-500"></div>
    </div>

     
        </footer>
    )
}

export default Footer;