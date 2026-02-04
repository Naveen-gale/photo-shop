import React from 'react'
import { Camera, Aperture, ArrowRight, Instagram } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  const handelAbouteClick = () => {
    navigate("/about");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden text-white flex items-center px-6 md:px-20">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#9bc7c5] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-96 h-96 bg-blue-600 opacity-5 blur-[150px] rounded-full"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-[#9bc7c5]">
            <Aperture size={14} className="animate-spin-slow" /> Framing Your Best Moments
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[#9bc7c5]">
            Capture <br /> 
            <span className="text-white">the </span>
            <span className="italic font-light text-[#f2c2a2]">Essence.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-md leading-relaxed">
            Professional storytelling through a lens. From intimate portraits to grand landscapes, we turn fleeting moments into everlasting memories.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button 
              className="group flex items-center gap-2 px-8 py-4 bg-[#9bc7c5] text-black rounded-xl font-bold shadow-[0_10px_20px_rgba(155,199,197,0.3)] hover:bg-white hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate("/about")}
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="px-8 py-4 bg-transparent border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all" 
              onClick={handleContactClick}
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Rotating decorative border */}
          <div className="absolute inset-0 border-2 border-dashed border-[#9bc7c5]/20 rounded-full animate-[spin_30s_linear_infinite] scale-110"></div>
          
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1000&q=80"
              alt="Professional Photographer"
              className="rounded-[3rem] w-full max-w-[420px] h-[550px] object-cover shadow-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 border border-white/10"
            />
            
            {/* Floating Glassmorphism Card */}
            <div className="absolute -bottom-6 -right-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f2c2a2] text-black rounded-lg">
                  <Camera size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Experience</p>
                  <p className="text-xl font-bold">500+ Shoots</p>
                </div>
              </div>
            </div>

             {/* Social Tag */}
             <div className="absolute top-10 -left-12 p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hidden md:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center">
                  <Instagram size={16} />
                </div>
                <span className="pr-2 text-sm font-medium">@n99av80n</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;