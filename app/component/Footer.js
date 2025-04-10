'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };
  
    return (
        <div className=''>
            <div className='pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[70px] xl:pt-[90px] 2xl:pt-[120px] container mx-auto w-full px-[24px] sm:px-0'>
                <div className='flex items-center sm:items-start justify-between sm:flex-row flex-col gap-[40px] pb-[15px] sm:pb-[16px] md:pb-[20px] lg:pb-[24px] xl:pb-[32px] 2xl:pb-[37px]'>
                    <div className='flex flex-col gap-[24px] sm:gap-[28px] md:gap-[32px] lg:gap-[36px] xl:gap-[40px] 2xl:gap-[47px]'>
                        <div className='flex items-center justify-start gap-[18px] sm:gap-[25px] lg:gap-[37px]'>
                            <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Products" onClick={(e) => handleScroll(e, "Products")}>
                            Products</a>

                            <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Tokenomics" onClick={(e) => handleScroll(e, "Tokenomics")}>
                            Tokenomics</a>

                            <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#BuyCRX" onClick={(e) => handleScroll(e, "BuyCRX")}>
                            Buy CRX</a>
                            
                            <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Team" onClick={(e) => handleScroll(e, "Team")}>
                            Team</a>
                        </div>
                        <div className='flex items-center justify-center sm:justify-start gap-[7px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12.50px]'>
                            <button className='buttonaudit-3 cursor-pointer text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[17.233px] flex items-center h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] pl-[13px] sm:pl-[14px] md:pl-[15px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[25px] pr-[7px] sm:pr-[8px] md:pr-[9px] lg:pr-[10px] xl:pr-[11px] 2xl:pr-[12px] gap-[7px] group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-md'>
                                Request Audit
                            </button>
                            <svg className='w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[50px] hover:scale-[1.1] cursor-pointer transition-transform duration-300 ease-in-out' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25.1168" cy="24.8243" r="23.8917" fill="white" fill-opacity="0.05" stroke="url(#paint0_linear_1239_2488)" stroke-width="0.783333"/>
                            <path d="M18.1296 18.201C18.4782 18.1604 18.8206 18.3164 19.0186 18.6061C20.4119 20.6448 22.0853 21.4929 23.9422 21.6859C24.0333 20.8915 24.2477 20.1066 24.6507 19.4155C25.2417 18.4016 26.2031 17.6552 27.5764 17.3794C29.4739 16.9982 30.9188 17.6854 31.7572 18.527L33.4493 18.2107C33.8108 18.1432 34.1785 18.2915 34.3919 18.591C34.6053 18.8904 34.6255 19.2864 34.4436 19.606L32.8198 22.4599C32.9678 26.5786 31.8233 29.453 29.383 31.4333C28.0885 32.4837 26.2361 33.0795 24.2028 33.2634C22.1537 33.4488 19.8373 33.2246 17.5347 32.5522C17.1307 32.4343 16.8536 32.0632 16.8551 31.6424C16.8565 31.2215 17.1363 30.8525 17.5411 30.7374C18.6991 30.4081 19.5805 30.1233 20.3772 29.6261C19.2454 29.0253 18.4115 28.2397 17.8213 27.3442C17.0009 26.0995 16.6967 24.7118 16.6363 23.4603C16.576 22.2089 16.7568 21.0498 16.9473 20.2133C17.0557 19.7371 17.1823 19.2587 17.3569 18.8016C17.4837 18.4722 17.781 18.2416 18.1296 18.201Z" fill="url(#paint1_linear_1239_2488)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1239_2488" x1="25.1168" y1="0.541016" x2="25.1168" y2="49.1077" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2D2F42"/>
                            <stop offset="1" stop-color="#222338" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1239_2488" x1="25.5958" y1="17.2715" x2="25.5958" y2="33.3259" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4E27BC"/>
                            <stop offset="1" stop-color="#A68AF9"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <svg className='w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[50px] hover:scale-[1.1] cursor-pointer transition-transform duration-300 ease-in-out' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25.2169" cy="24.8243" r="23.8917" fill="white" fill-opacity="0.05" stroke="url(#paint0_linear_1239_2493)" stroke-width="0.783333"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5793 18.0614C32.4482 17.6956 33.3797 18.4303 33.2262 19.3605L31.4141 30.3478C31.2394 31.4072 30.0758 32.0151 29.1039 31.4871C28.2906 31.0454 27.084 30.3655 25.9965 29.6549C25.4535 29.3 23.7907 28.1622 23.9951 27.3523C24.1698 26.6597 26.9651 24.0577 28.5625 22.5102C29.1899 21.9024 28.9042 21.5512 28.1631 22.1109C26.3249 23.4992 23.3736 25.6101 22.3977 26.2042C21.5366 26.7282 21.087 26.8177 20.5507 26.7282C19.5714 26.5651 18.6635 26.3124 17.9222 26.0051C16.9204 25.5898 16.9692 24.213 17.9216 23.8121L31.5793 18.0614Z" fill="url(#paint1_linear_1239_2493)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1239_2493" x1="25.2169" y1="0.541016" x2="25.2169" y2="49.1077" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2D2F42"/>
                            <stop offset="1" stop-color="#222338" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1239_2493" x1="25.216" y1="17.9656" x2="25.216" y2="31.6808" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4E27BC"/>
                            <stop offset="1" stop-color="#A68AF9"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <svg className='w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[50px] hover:scale-[1.1] cursor-pointer transition-transform duration-300 ease-in-out' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25.2169" cy="24.8243" r="23.8917" fill="white" fill-opacity="0.05" stroke="url(#paint0_linear_1239_2493)" stroke-width="0.783333"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5793 18.0614C32.4482 17.6956 33.3797 18.4303 33.2262 19.3605L31.4141 30.3478C31.2394 31.4072 30.0758 32.0151 29.1039 31.4871C28.2906 31.0454 27.084 30.3655 25.9965 29.6549C25.4535 29.3 23.7907 28.1622 23.9951 27.3523C24.1698 26.6597 26.9651 24.0577 28.5625 22.5102C29.1899 21.9024 28.9042 21.5512 28.1631 22.1109C26.3249 23.4992 23.3736 25.6101 22.3977 26.2042C21.5366 26.7282 21.087 26.8177 20.5507 26.7282C19.5714 26.5651 18.6635 26.3124 17.9222 26.0051C16.9204 25.5898 16.9692 24.213 17.9216 23.8121L31.5793 18.0614Z" fill="url(#paint1_linear_1239_2493)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1239_2493" x1="25.2169" y1="0.541016" x2="25.2169" y2="49.1077" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2D2F42"/>
                            <stop offset="1" stop-color="#222338" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1239_2493" x1="25.216" y1="17.9656" x2="25.216" y2="31.6808" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4E27BC"/>
                            <stop offset="1" stop-color="#A68AF9"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <div>
                        <a className="subscriobesec text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18.8px]">
                            Subscribe
                        </a>
                        </div>
                        <div>
                            <div className='py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] 2xl:py-[15px] flex items-center justify-start border-b-[0.783px] border-[#25214D] gap-[30px] sm:gap-[50px]'>
                                <input className='enterimail outline-none placeholder:text-[#7F8799] placeholder:text-[11px] sm:placeholder:text-[12px] md:placeholder:text-[13px] lg:placeholder:text-[14px] xl:placeholder:text-[15px] 2xl:placeholder:text-[15.556px]' type='email' placeholder='Enter your email'/>
                                <svg className='w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[28px] 2xl:w-[33px] cursor-pointer hover:scale-[1.1] duration-200' viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.757812" width="31.3333" height="31.3333" rx="15.6667" fill="url(#paint0_linear_1239_2509)"/>
                                <path d="M16.4501 12.5078L20.3668 16.4245M20.3668 16.4245L16.4501 20.3411M20.3668 16.4245H10.9668" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_1239_2509" x1="15.6667" y1="0.757812" x2="15.6667" y2="32.0911" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4E27BC"/>
                                <stop offset="1" stop-color="#A68AF9"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[0.783px] pointer-events-none" style={{
                    background: 'linear-gradient(90deg, rgba(34, 35, 56, 0) 0%, #302A61 50.16%, rgba(34, 35, 56, 0) 100%)'
                }} />
                <div className='flex justify-between items-center pb-[20px] md:pb-[30px] xl:pb-[40px] pt-[16px] md:pt-[25px] xl:pt-[32px]'>
                    <div className='flex items-center gap-[12px] md:gap-[16px] xl:gap-[20px]'>
                        <p className='privacypolicy text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14.1px]'>© CryptEx. All rights reserved.</p>
                    </div>
                    <div className='flex items-center gap-[12px] md:gap-[22px] xl:gap-[31px]'>
                        <p className='privacypolicy text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14.1px]'>Terms and Conditions</p>
                        <p className='privacypolicy text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14.1px]'>Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;