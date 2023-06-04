import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Send from "../components/Send";
import Award from "../components/Award";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Send />
      <Award />
      <Footer />
    </div>
  );
}
