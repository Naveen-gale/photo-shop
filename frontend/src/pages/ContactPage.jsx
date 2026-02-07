import React, { useState } from 'react';
import { Mail, Phone, Send, Camera } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);


  // --- LOGIC REMAINS UNCHANGED ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://photo-shop-backend-p0zb.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  // -------------------------------

  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center py-24 px-6 md:px-20 relative overflow-hidden">

      {/* Background Decorative Elements - Updated Colors */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#9bc7c5] opacity-[0.08] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#f2c2a2] opacity-[0.05] blur-[120px] rounded-full"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

        {/* Left Side: Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-[#9bc7c5] font-mono tracking-widest uppercase text-sm mb-4">// Booking & Inquiries</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Let's Frame <br />
              <span className="text-[#f2c2a2]">Your Story.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6 max-w-md">
              Ready to book a session or have a creative concept in mind?
              Let's discuss lighting, location, and how to capture the perfect shot.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#9bc7c5] group-hover:bg-[#9bc7c5] group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Email For Rates</p>
                <p className="text-white font-medium">hello@naveencaptures.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#f2c2a2] group-hover:bg-[#f2c2a2] group-hover:text-black transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Studio Line</p>
                <p className="text-white font-medium">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
          {submitted ? (
            <div className="bg-[#9bc7c5]/10 border border-[#9bc7c5]/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#9bc7c5]/20 text-[#9bc7c5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Sent!</h3>
              <p className="text-[#9bc7c5]">I will review your concept and reply within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-gray-500 hover:text-white transition-colors underline decoration-dotted"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Naveen"
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#9bc7c5] transition-all placeholder:text-gray-700"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="naveen@example.com"
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#f2c2a2] transition-all placeholder:text-gray-700"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>


              {/* phone number */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#9bc7c5] transition-all placeholder:text-gray-700"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2 font-medium">Your Vision</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about the shoot type (Portrait, Event, Product)..."
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#9bc7c5] transition-all placeholder:text-gray-700 resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#9bc7c5] hover:bg-white text-black font-bold py-5 rounded-2xl shadow-lg shadow-[#9bc7c5]/20 transition-all active:scale-95 group"
              >
                Send Request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContactPage;