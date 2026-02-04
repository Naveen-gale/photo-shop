import React from "react";
// Import your components
import Hero from "../components/Hero";
import AboutPage from "./AboutPage";
import { Contact } from "lucide-react";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <main className="bg-[#1a1a1a] scroll-smooth">
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section - This will appear below the Hero */}
      <section id="about">
        <AboutPage />
      </section>
      <section id = "contact">
        <ContactPage />
      </section>

      <section id = "footer">
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;