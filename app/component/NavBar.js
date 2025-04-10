"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
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

    // Smooth scroll to section
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

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);


    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full headerbackgronsdvg bg-[#010214]  ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300"
        }`}>
            
            <header className='px-[24px] md:px-[80px] lg:px-[116px] xl:px-[130px] 2xl:px-[157px] flex justify-between items-center py-[12px] sm:py-[14px] lg:py-[16px] relative  sm:overflow-hidden bg-[#010214] '>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
                <div className='lg:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <Link href='/' className='cursor-pointer flex items-center Froggo-Logo h-[20px] lg:h-[24px] 2xl:h-[28px]' onClick={(e) => handleScroll(e, "")}>
                <Image className='w-full h-[24px] lg:h-[28px] 2xl:h-[31px]' src={logo} alt=''/></Link> 
                <div clssName="navbar-items-mainbackground">
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-between items-start sm:items-center gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px] md:p-[12px] xl:p-[16px] sm:bg-transparent bg-[#16151f] sm:flex-row flex-col p-[20px] sm:p-[0] w-full h-screen sm:h-full
                    ${toggle ? 'left-[0]' :'left-[100%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Products" onClick={(e) => handleScroll(e, "Products")}>
                    Products</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Tokenomics" onClick={(e) => handleScroll(e, "Tokenomics")}>
                    Tokenomics</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#BuyCRX" onClick={(e) => handleScroll(e, "BuyCRX")}>
                    Buy CRX</a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Team" onClick={(e) => handleScroll(e, "Team")}>
                    Team</a>
                </nav>
                </div>
                
                <ul className='flex justify-between items-center gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[24px]'>
                    <button className='buttonaudit cursor-pointer h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[47px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px]' viewBox="0 0 16 15" fill="none">
                        <path d="M1.32196 1.27742C1.62635 1.24194 1.9253 1.37818 2.09821 1.63118C3.31475 3.41125 4.77594 4.15176 6.39726 4.32024C6.47683 3.62662 6.66401 2.94129 7.01585 2.33791C7.53194 1.45261 8.37135 0.800848 9.57043 0.56001C11.2273 0.227216 12.4889 0.82725 13.2209 1.56211L14.6984 1.28591C15.014 1.22692 15.3351 1.35646 15.5215 1.61791C15.7077 1.87937 15.7254 2.22519 15.5666 2.50423L14.1487 4.99612C14.278 8.59237 13.2786 11.1021 11.1479 12.8312C10.0176 13.7484 8.40021 14.2686 6.62484 14.4292C4.8356 14.5911 2.81309 14.3953 0.802545 13.8082C0.449814 13.7052 0.207805 13.3813 0.209108 13.0138C0.210402 12.6463 0.454687 12.3241 0.808135 12.2236C1.81923 11.936 2.58879 11.6874 3.28444 11.2533C2.29623 10.7286 1.56809 10.0428 1.05275 9.26084C0.336478 8.17398 0.0708783 6.96237 0.0181475 5.86958C-0.0345749 4.7769 0.123329 3.76487 0.289634 3.03445C0.384302 2.61865 0.494876 2.20092 0.647288 1.80187C0.757986 1.51427 1.01758 1.31291 1.32196 1.27742Z" fill="white"/>
                        </svg>
                    </button>
                    <button className='buttonaudit cursor-pointer h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[47px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px]' viewBox="0 0 16 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4007 0.930661C15.2416 0.57661 16.143 1.28764 15.9946 2.18785L14.2409 12.8207C14.0718 13.8459 12.9458 14.4342 12.0052 13.9233C11.2181 13.4958 10.0504 12.8378 8.99801 12.1501C8.4725 11.8067 6.86336 10.7056 7.06115 9.92178C7.23026 9.25158 9.93541 6.73348 11.4812 5.23595C12.0885 4.6477 11.8119 4.30787 11.0948 4.84949C9.31583 6.19306 6.45975 8.23581 5.51528 8.81071C4.68197 9.3179 4.24688 9.40446 3.7279 9.3179C2.7802 9.15999 1.90157 8.91544 1.18424 8.61809C0.214707 8.21618 0.261933 6.88382 1.18358 6.49581L14.4007 0.930661Z" fill="white"/>
                        </svg>
                    </button>
                    <button className='buttonaudit cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] pl-[13px] sm:pl-[14px] md:pl-[15px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[25px] pr-[10px] sm:pr-[11px] md:pr-[12px] lg:pr-[13px] xl:pr-[14px] 2xl:pr-[15px] group gap-[7.50px]'>
                     Request audit <Image className='w-[12px] sm:w-[14px] 2xl:w-[17px]' src={righticon} alt='Loading Image'/>
                    </button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;