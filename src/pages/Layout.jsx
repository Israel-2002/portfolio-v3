import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "lenis/dist/lenis.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const lenisRef = useRef();
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Navbar />
      <Outlet />
      <Footer />
    </ReactLenis>
  );
};

export default Layout;
