"use client";
import { OurServices } from "@/components/OurServices";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { useContext } from "react";
import { Preloader } from "@/components/Preloader";
import { PreloaderContext } from "./context";

export default function Home() {
  const preload = useContext(PreloaderContext);
  return (
    <>
      {
        preload?.isLoading ? <Preloader /> : (
          <>
            <div className="hero-sticky-fixed">
              <button className="hero-sticky_becomeClient">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
                <span><span>Become a Client</span><span>Become a Client</span></span>
              </button>
              <button className="menu-button_button hero-sticky_menuBtn"><div className="menu-button_button_block"><span></span><span></span><span></span></div></button>
            </div>
            <main className="main-layout">
              <Hero />
              <Marquee />
              <OurServices />
            </main>
          </>
        )
      }
    </>
  )
}
