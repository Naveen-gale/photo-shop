import React from 'react'

const AboutPage = () => {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center py-20 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Photo Wrapper */}
        <div className="w-full md:w-1/2 relative group">
          {/* Decorative Background Square - Using your Teal Brand Color */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#9bc7c5] rounded-2xl group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
          
        {/* Main Image Container */}
<div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/5 bg-black/40 flex justify-center items-center">
  <img 
    src="https://imgs.search.brave.com/UnSI1DyelR22pcR1RNUuGzmT5MSUb5opeQ8MWkFE7VA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2Zl/LzIyLzM4ZmUyMmE4/MGM0NWU2MTIyMmRl/ODQ5ZjA2NDk2Yjcx/LmpwZw"
    alt="Photographer Portrait" 
    // CHANGE 1: Used 'object-contain' instead of 'cover' so the full image shows
    // CHANGE 2: Added 'w-auto' so it doesn't stretch
    className="w-auto h-[500px] object-contain hover:scale-105 transition-transform duration-700"
  />
</div>

          {/* Small Floating Tag - Changed to Peach color for contrast */}
          <div className="absolute bottom-8 -right-4 bg-[#f2c2a2] text-black px-6 py-2 rounded-lg font-bold shadow-xl rotate-3">
            Since 2024
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[#9bc7c5] font-mono tracking-widest uppercase text-sm">
            // About The Artist
          </h2>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Freezing Time, <br /> 
            <span className="text-[#9bc7c5]">Preserving Soul.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            I don't just click a shutter; I capture the silence between the beats. 
            My philosophy is simple: authentic moments outweigh perfect poses. 
            Whether it's the chaotic joy of a wedding or the quiet solitude of a portrait, 
            I look for the story that words cannot tell.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div>
              <h4 className="text-white font-bold text-xl italic border-b border-[#f2c2a2] inline-block mb-2">My Vision</h4>
              <p className="text-gray-500 text-sm">To turn the fleeting into the eternal.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl italic border-b border-[#f2c2a2] inline-block mb-2">My Gear</h4>
              <p className="text-gray-500 text-sm">Sony Alpha & Vintage Prime Lenses.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutPage