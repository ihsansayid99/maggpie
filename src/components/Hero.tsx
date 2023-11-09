"use client";

import React from "react";
import Typewriter from '@/components/Typewriter';
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const Hero = () => {
    const text = ['Website', 'Design', 'MobileApp']
    const scrollToSection = () => {
        const section = document.getElementById('our-services');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSectionReusable = (id: string) => {
        const section = document.getElementById(`${id}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="hero">
            <div className="hero-wrapper">
                <video className="hero-background_video" src="/hero.mp4" loop muted autoPlay playsInline />
                <div className="hero-background-child">
                    <header className="header-header">
                        <a href="/" className="logo-logo">
                            <span className="logo-text">Maggpie.</span>
                        </a>
                        <div className="header-nav">
                            <button className="header-nav-item">
                                <span>
                                    <span>About Us</span>
                                    <span>About Us</span>
                                </span>
                            </button>
                            <button className="header-nav-item">
                                <span>
                                    <span>Cases</span>
                                    <span>Cases</span>
                                </span>
                            </button>
                            <button className="header-nav-item">
                                <span>
                                    <span>Reviews</span>
                                    <span>Reviews</span>
                                </span>
                            </button>
                            <button className="header-nav-item">
                                <span>
                                    <span>Contact Us</span>
                                    <span>Contact Us</span>
                                </span>
                            </button>
                        </div>
                        <div className="header-flex"></div>
                    </header>
                    <div className="hero-content">
                        <div className="hero-content-left">
                            <div className="hero-title">
                                <h1 className="hero-title-create">We create</h1>
                                <p className="hero-title-awesome">
                                    <button className="hero-scroll-btn" onClick={scrollToSection}>
                                        <div><svg className="hero-scroll-button_button_arrow_1" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174" data-stroke="true" stroke-width="1.5"></path></svg><svg className="hero-scroll-button_button_arrow_2" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174" data-stroke="true" stroke-width="1.5"></path></svg></div>
                                    </button>
                                    <i className="mr-2">A</i>
                                    wesome
                                </p>
                                <div className="hero-title-typing">
                                    <Typewriter textArray={text} />
                                </div>
                            </div>
                            <div className="hero-desc-left">
                                <div className="hero-desc-box">
                                    <p>🤖🤖 Our Customers love to work with us, 20+ Projects 🤖🤖</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <nav className="hero_hero_nav">
                                <button className={`${plusJakartaSans.className} hero_hero_nav_item`}>Home</button>
                                <button className={`${plusJakartaSans.className} hero_hero_nav_item`} onClick={() => scrollToSectionReusable('our-services')}>Our Services</button>
                                <button className={`${plusJakartaSans.className} hero_hero_nav_item`}>About Us</button>
                                <button className={`${plusJakartaSans.className} hero_hero_nav_item`}>Portfolio</button>
                                <button className={`${plusJakartaSans.className} hero_hero_nav_item`}>Reviews</button>
                                <button className={`${plusJakartaSans.className} hero_hero_nav_item`}>Contact Us</button>
                            </nav>
                            <div className="hero-video_root">
                                <img alt="Listen Perunggu!" className="hero-video_main_iframe" src="https://asset-2.tstatic.net/wow/foto/bank/images/perunggu.jpg" />
                                <a className="hero-video_root_playBtn" target="_blank"
                                    rel="noopener noreferrer" href='https://www.youtube.com/watch?v=60GpWHUwaA0'>
                                    <img src="https://awsmd.com/_next/static/media/play.74b390f7.svg" alt="play icon" />
                                    <img src="https://awsmd.com/_next/static/media/click-to-play.5ca0164c.png" className="hero-video_root_playBtn_click" alt="click icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}