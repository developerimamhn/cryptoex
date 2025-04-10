'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import numbeingss from './image/numbeingss.png';
import numbeingss1 from './image/numbeingss1.png';
import Image from 'next/image';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Crxconving from './Crxconving';

gsap.registerPlugin(ScrollTrigger);



const Pageone = () => {
    const [activeLink, setActiveLink] = useState('/buy'); 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState({
        image: numbeingss,
        name: 'BNB',
    });

    const options = [
        { image: numbeingss, name: 'BNB' },
        { image: numbeingss, name: 'BMB' },
        { image: numbeingss, name: 'BAB' },
        { image: numbeingss, name: 'BCB' },
    ];

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (crypto) => {
        setSelectedCrypto(crypto);
        setIsOpen(false);
    };
    
    
    // Default to "/buy"

    const handleLinkClick = (href) => {
        setActiveLink(href); 
    };


    const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item
  const gridItem2Ref = useRef(null); // Second grid item
  const gridItem3Ref = useRef(null); // Third grid item
  const titleRef = useRef(null); // "Core Products" title
  const acquireRef = useRef(null); // "Acquire CRX" section

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Main wrapper animation
        gsap.fromTo(
          wrapperRef.current,
          { y: isMobile ? 50 : 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 1 : 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: isMobile ? 'top 90%' : 'top 80%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );

        // Title animation
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );

        // Grid items animation (individual with slight stagger)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25, // Manual stagger effect
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });

        // Acquire CRX section animation
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );

    return () => mm.revert(); // Cleanup
  }, []);


    
    return (
        <div ref={wrapperRef} className='relative pb-[50px] sm:pb-[50px] md:pb-[60px] lg:pb-[90px] xl:pb-[110px] 2xl:pb-[141px]' id="smooth-wrapper">
            <div className='relative ' id="smooth-content">
                <svg className='absolute left-0 top-1/2 -translate-y-1/2 w-full z-[1]' viewBox="0 0 633 1025" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_100_9244)">
                        <ellipse cx="84.8177" cy="512.183" rx="184.161" ry="148.709" fill="url(#paint0_linear_100_9244)"/>
                        </g>
                        <defs>
                        <filter id="filter0_f_100_9244" x="-462.81" y="0.00796509" width="1095.26" height="1024.35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="181.733" result="effect1_foregroundBlur_100_9244"/>
                        </filter>
                        <linearGradient id="paint0_linear_100_9244" x1="-99.3438" y1="512.183" x2="268.979" y2="512.183" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4F2AC0"/>
                        <stop offset="1" stop-color="#8B65FE"/>
                        </linearGradient>
                        </defs>
                </svg>
                <div className='pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[80px] 2xl:pt-[109px] container mx-auto pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[99px] px-[24px] sm:px-0 w-full '>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapitalchalline text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] text-center">
                    Core Products
                    </div>
                    <div className='flex items-center justify-center pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px]'>
                    <p className='leveragefinancial flex flex-wrap text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15.667px]'>Each product has been crafted with precision and innovation,<br className='md:block hidden'/> ensuring top-notch quality and performance.</p></div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] pt-[20px] sm:pt-[26px] md:pt-[30px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[47px] w-full'>
                        <div ref={gridItem1Ref} className='foxbackgron flex flex-col items-start justify-start p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[35px] relative '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 right-0 w-[221px] rounded-[12px]' viewBox="0 0 221 220" fill="none">
                            <g filter="url(#filter0_f_100_7637)">
                                <circle cx="220.15" cy="0.408527" r="54.8333" fill="#613AD4"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_100_7637" x="0.816406" y="-218.925" width="438.666" height="438.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="82.25" result="effect1_foregroundBlur_100_7637"/>
                                </filter>
                            </defs>
                            </svg>
                        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[72px]' viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.05"/>
                        <circle cx="36" cy="36" r="35.5" stroke="white" stroke-opacity="0.05"/>
                        <path d="M34.0775 47.713C31.7544 47.7099 29.5275 46.7809 27.8859 45.1298C26.2443 43.4788 25.3223 41.2407 25.3223 38.9073C25.3223 34.044 34.0888 22 34.0888 22C34.0888 22 39.4214 29.3234 41.7684 34.8565" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.8828 42.2949H47.1881" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5371 34.6074V42.3013" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.8828 42.3042C31.8828 40.2629 32.6901 38.3052 34.1271 36.8617C35.5642 35.4183 37.5131 34.6074 39.5454 34.6074C41.5776 34.6074 43.5266 35.4183 44.9636 36.8617C46.4007 38.3052 47.208 40.2629 47.208 42.3042" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5384 34.6074C39.5384 34.6074 35.4375 36.2523 35.4375 42.3042" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5371 34.6074C39.5371 34.6074 43.6408 36.2523 43.6408 42.3042" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5381 38.9988C35.3123 38.9988 34.2168 36.7695 34.2168 36.7695" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M44.8622 36.7695C44.8622 36.7695 43.7668 38.9988 39.541 38.9988" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5371 49.9889V42.2949" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M47.1923 42.3027C47.1923 44.3441 46.385 46.3018 44.948 47.7452C43.511 49.1886 41.562 49.9995 39.5298 49.9995C37.4975 49.9995 35.5485 49.1886 34.1115 47.7452C32.6745 46.3018 31.8672 44.3441 31.8672 42.3027" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5371 49.9917C39.5371 49.9917 43.6408 48.3469 43.6408 42.2949" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5384 49.9917C39.5384 49.9917 35.4375 48.3469 35.4375 42.2949" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M44.8622 47.8279C44.8622 47.8279 43.7668 45.6016 39.541 45.6016" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.2168 47.8279C34.2168 47.8279 35.3123 45.6016 39.5381 45.6016" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>


                            <div>
                                <h2 className='forex text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Commodities</h2>
                                <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                                Trade a variety of popular commodity CFDs, and access some of the world&apos;s biggest oil and natural gas markets Trade a variety of popular commodity CFDs, and access some of the world&apos;s biggest oil and natural gas markets
                                </p>
                            </div>
                        </div>
                        <div ref={gridItem2Ref} className=' foxbackgron flex flex-col items-start justify-start p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[35px relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 right-0 w-[221px] rounded-[12px]' viewBox="0 0 221 220" fill="none">
                            <g filter="url(#filter0_f_100_7637)">
                                <circle cx="220.15" cy="0.408527" r="54.8333" fill="#613AD4"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_100_7637" x="0.816406" y="-218.925" width="438.666" height="438.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="82.25" result="effect1_foregroundBlur_100_7637"/>
                                </filter>
                            </defs>
                            </svg>
                        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[72px]' viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.05"/>
                        <circle cx="36" cy="36" r="35.5" stroke="white" stroke-opacity="0.05"/>
                        <path d="M36.0003 39.5591L34.4734 34.1518C34.4257 33.9997 34.3319 33.867 34.2056 33.773C34.0793 33.679 33.927 33.6285 33.7708 33.6289H26.7359C26.58 33.6287 26.4281 33.6792 26.3022 33.7732C26.1763 33.8673 26.083 33.9999 26.0358 34.1518L24.5352 39.5591" fill="white" fill-opacity="0.1"/>
                        <path d="M36.0003 39.5591L34.4734 34.1518C34.4257 33.9997 34.3319 33.867 34.2056 33.773C34.0793 33.679 33.927 33.6285 33.7708 33.6289H26.7359C26.58 33.6287 26.4281 33.6792 26.3022 33.7732C26.1763 33.8673 26.083 33.9999 26.0358 34.1518L24.5352 39.5591" stroke="white" stroke-miterlimit="10"/>
                        <path d="M47.4651 39.5591L45.9849 34.1518C45.9375 33.9999 45.8438 33.8673 45.7174 33.7732C45.591 33.6792 45.4385 33.6287 45.2819 33.6289H38.2191C38.0623 33.6285 37.9094 33.679 37.7826 33.773C37.6558 33.867 37.5617 33.9997 37.5138 34.1518L36 39.5591" fill="white" fill-opacity="0.1"/>
                        <path d="M47.4651 39.5591L45.9849 34.1518C45.9375 33.9999 45.8438 33.8673 45.7174 33.7732C45.591 33.6792 45.4385 33.6287 45.2819 33.6289H38.2191C38.0623 33.6285 37.9094 33.679 37.7826 33.773C37.6558 33.867 37.5617 33.9997 37.5138 34.1518L36 39.5591" stroke="white" stroke-miterlimit="10"/>
                        <path d="M28.77 40.0808C28.7226 39.9291 28.6289 39.7967 28.5026 39.7028C28.3762 39.6089 28.2237 39.5584 28.0672 39.5586H21.005C20.8482 39.5583 20.6954 39.6086 20.5686 39.7025C20.4418 39.7964 20.3476 39.9289 20.2998 40.0808L19.0212 44.908C19 44.9746 18.9946 45.0454 19.0054 45.1145C19.0162 45.1837 19.043 45.2492 19.0834 45.3058C19.1239 45.3625 19.177 45.4086 19.2383 45.4404C19.2996 45.4722 19.3674 45.4888 19.4362 45.4888H29.6336C29.7024 45.4888 29.7702 45.4722 29.8315 45.4404C29.8928 45.4086 29.9458 45.3625 29.9863 45.3058C30.0267 45.2492 30.0535 45.1837 30.0643 45.1145C30.0751 45.0454 30.0698 44.9746 30.0486 44.908L28.77 40.0808Z" fill="white" fill-opacity="0.1" stroke="white" stroke-miterlimit="10"/>
                        <path d="M40.2351 40.0808C40.1873 39.9289 40.0931 39.7964 39.9664 39.7025C39.8396 39.6086 39.6868 39.5583 39.53 39.5586H32.4694C32.3126 39.5583 32.1598 39.6086 32.0331 39.7025C31.9063 39.7964 31.8122 39.9289 31.7643 40.0808L30.486 44.908C30.4648 44.9748 30.4594 45.0458 30.4704 45.1151C30.4813 45.1844 30.5082 45.2501 30.549 45.3068C30.5897 45.3635 30.643 45.4096 30.7046 45.4412C30.7663 45.4728 30.8343 45.4892 30.9033 45.4888H41.0961C41.1651 45.4892 41.2332 45.4728 41.2948 45.4412C41.3564 45.4096 41.4097 45.3635 41.4504 45.3068C41.4912 45.2501 41.5182 45.1844 41.5291 45.1151C41.54 45.0458 41.5346 44.9748 41.5134 44.908L40.2351 40.0808Z" fill="white" fill-opacity="0.1" stroke="white" stroke-miterlimit="10"/>
                        <path d="M41.5346 33.6286L40.1113 28.5812C40.0642 28.4398 39.9726 28.3165 39.8497 28.229C39.7267 28.1414 39.5786 28.0941 39.4265 28.0938H32.5684C32.4163 28.0941 32.2682 28.1414 32.1452 28.229C32.0222 28.3165 31.9306 28.4398 31.8835 28.5812L30.4648 33.6286" fill="white" fill-opacity="0.1"/>
                        <path d="M41.5346 33.6286L40.1113 28.5812C40.0642 28.4398 39.9726 28.3165 39.8497 28.229C39.7267 28.1414 39.5786 28.0941 39.4265 28.0938H32.5684C32.4163 28.0941 32.2682 28.1414 32.1452 28.229C32.0222 28.3165 31.9306 28.4398 31.8835 28.5812L30.4648 33.6286" stroke="white" stroke-miterlimit="10"/>
                        <mask id="path-11-inside-1_1228_1159" fill="white">
                        <path d="M35.6049 39.9537L34.1816 34.5457C34.1345 34.3942 34.0429 34.2621 33.9199 34.1683C33.797 34.0745 33.6489 34.0238 33.4968 34.0234H26.6387C26.4866 34.0238 26.3385 34.0745 26.2155 34.1683C26.0925 34.2621 26.0009 34.3942 25.9538 34.5457L24.5352 39.9537"/>
                        </mask>
                        <path d="M35.6049 39.9537L34.1816 34.5457C34.1345 34.3942 34.0429 34.2621 33.9199 34.1683C33.797 34.0745 33.6489 34.0238 33.4968 34.0234H26.6387C26.4866 34.0238 26.3385 34.0745 26.2155 34.1683C26.0925 34.2621 26.0009 34.3942 25.9538 34.5457L24.5352 39.9537" fill="white" fill-opacity="0.1"/>
                        <path d="M34.1816 34.5457L34.4423 34.4771L34.4387 34.4657L34.1816 34.5457ZM33.9199 34.1683L33.7567 34.3824L33.7567 34.3824L33.9199 34.1683ZM33.4968 34.0234L33.4974 33.7542H33.4968V34.0234ZM26.6387 34.0234V33.7542L26.638 33.7542L26.6387 34.0234ZM26.2155 34.1683L26.3788 34.3824L26.3788 34.3824L26.2155 34.1683ZM25.9538 34.5457L25.6965 34.4657L25.6934 34.4774L25.9538 34.5457ZM35.8653 39.8851L34.442 34.4772L33.9213 34.6142L35.3445 40.0222L35.8653 39.8851ZM34.4387 34.4657C34.3755 34.2623 34.2519 34.0828 34.0832 33.9542L33.7567 34.3824C33.834 34.4414 33.8936 34.526 33.9245 34.6256L34.4387 34.4657ZM34.0832 33.9542C33.9144 33.8255 33.7094 33.7547 33.4974 33.7542L33.4961 34.2927C33.5884 34.2929 33.6796 34.3236 33.7567 34.3824L34.0832 33.9542ZM33.4968 33.7542H26.6387V34.2927H33.4968V33.7542ZM26.638 33.7542C26.4261 33.7547 26.2211 33.8255 26.0523 33.9542L26.3788 34.3824C26.4559 34.3236 26.5471 34.2929 26.6394 34.2927L26.638 33.7542ZM26.0523 33.9542C25.8836 34.0828 25.76 34.2623 25.6967 34.4657L26.2109 34.6256C26.2419 34.526 26.3014 34.4414 26.3788 34.3824L26.0523 33.9542ZM25.6934 34.4774L24.2747 39.8853L24.7956 40.022L26.2142 34.614L25.6934 34.4774Z" fill="white" mask="url(#path-11-inside-1_1228_1159)"/>
                        <mask id="path-13-inside-2_1228_1159" fill="white">
                        <path d="M47.4651 39.9537L45.991 34.5457C45.9422 34.3942 45.8474 34.2621 45.72 34.1683C45.5926 34.0745 45.4392 34.0238 45.2817 34.0234H38.1787C38.0211 34.0238 37.8677 34.0745 37.7403 34.1683C37.613 34.2621 37.5181 34.3942 37.4693 34.5457L36 39.9537"/>
                        </mask>
                        <path d="M47.4651 39.9537L45.991 34.5457C45.9422 34.3942 45.8474 34.2621 45.72 34.1683C45.5926 34.0745 45.4392 34.0238 45.2817 34.0234H38.1787C38.0211 34.0238 37.8677 34.0745 37.7403 34.1683C37.613 34.2621 37.5181 34.3942 37.4693 34.5457L36 39.9537" fill="white" fill-opacity="0.1"/>
                        <path d="M45.991 34.5457L46.251 34.4748L46.2473 34.4631L45.991 34.5457ZM45.72 34.1683L45.5603 34.3851L45.5603 34.3851L45.72 34.1683ZM45.2817 34.0234L45.2823 33.7542H45.2817V34.0234ZM38.1787 34.0234V33.7542L38.178 33.7542L38.1787 34.0234ZM37.7403 34.1683L37.5807 33.9515L37.5807 33.9515L37.7403 34.1683ZM37.4693 34.5457L37.2128 34.4631L37.2095 34.4751L37.4693 34.5457ZM47.7249 39.8829L46.2507 34.4749L45.7312 34.6165L47.2054 40.0245L47.7249 39.8829ZM46.2473 34.4631C46.1813 34.2582 46.0528 34.079 45.8796 33.9515L45.5603 34.3851C45.6419 34.4452 45.7031 34.5301 45.7347 34.6282L46.2473 34.4631ZM45.8796 33.9515C45.7064 33.824 45.4974 33.7547 45.2823 33.7542L45.281 34.2927C45.3811 34.2929 45.4788 34.3251 45.5603 34.3851L45.8796 33.9515ZM45.2817 33.7542H38.1787V34.2927H45.2817V33.7542ZM38.178 33.7542C37.963 33.7547 37.754 33.824 37.5807 33.9515L37.9 34.3851C37.9815 34.3251 38.0793 34.2929 38.1793 34.2927L38.178 33.7542ZM37.5807 33.9515C37.4075 34.079 37.2791 34.2582 37.2131 34.4631L37.7256 34.6282C37.7572 34.5301 37.8184 34.4451 37.9 34.3851L37.5807 33.9515ZM37.2095 34.4751L35.7402 39.8831L36.2598 40.0243L37.7292 34.6163L37.2095 34.4751Z" fill="white" mask="url(#path-13-inside-2_1228_1159)"/>
                        <path d="M51.7007 40.0808C51.653 39.9289 51.5587 39.7964 51.432 39.7025C51.305 39.6086 51.1522 39.5583 50.9955 39.5586H43.9333C43.7768 39.5584 43.6243 39.6089 43.4979 39.7028C43.3715 39.7967 43.2779 39.9291 43.2305 40.0808L41.9518 44.908C41.9307 44.9746 41.9253 45.0454 41.9361 45.1145C41.9469 45.1837 41.9736 45.2492 42.0141 45.3058C42.0546 45.3625 42.1076 45.4086 42.1689 45.4404C42.2302 45.4722 42.298 45.4888 42.3669 45.4888H52.5642C52.6332 45.4888 52.7011 45.4722 52.7623 45.4404C52.8236 45.4086 52.8767 45.3625 52.9169 45.3058C52.9575 45.2492 52.9842 45.1837 52.995 45.1145C53.0058 45.0454 53.0004 44.9746 52.9794 44.908L51.7007 40.0808Z" fill="white" fill-opacity="0.1" stroke="white" stroke-miterlimit="10"/>
                        <path d="M45.8838 32.0467L46.2791 29.2793L45.8838 32.0467Z" fill="white" fill-opacity="0.1"/>
                        <path d="M45.8838 32.0467L46.2791 29.2793" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        <path d="M46.2793 32.8371L51.0235 28.4883L46.2793 32.8371Z" fill="white" fill-opacity="0.1"/>
                        <path d="M46.2793 32.8371L51.0235 28.4883" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        <path d="M47.0693 33.6286L50.2321 32.8379L47.0693 33.6286Z" fill="white" fill-opacity="0.1"/>
                        <path d="M47.0693 33.6286L50.2321 32.8379" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        <path d="M52.8651 28.0931C52.8651 28.8921 52.2173 29.5399 51.4183 29.5399C50.6193 29.5399 49.9715 28.8921 49.9715 28.0931C49.9715 27.2941 50.6193 26.6463 51.4183 26.6463C52.2173 26.6463 52.8651 27.2941 52.8651 28.0931Z" fill="white" fill-opacity="0.1" stroke="white" stroke-width="0.269231"/>
                        <path d="M46.6748 28.4891V28.0938V28.4891Z" fill="white" fill-opacity="0.1"/>
                        <path d="M46.6748 28.4891V28.0938" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        </svg>

                            <div>
                                <h2 className='forex text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Metals</h2>
                                <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                                Find your next opportunity in one of the world&apos;s most traded markets - precious metals like gold and silver. Find your next opportunity in one of the world&apos;s most traded markets - precious metals like gold and silver.
                                </p>
                            </div>
                        </div>
                        <div ref={gridItem3Ref} className=' foxbackgron flex flex-col items-start justify-start p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[35px relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 right-0 w-[221px] rounded-[12px]' viewBox="0 0 221 220" fill="none">
                            <g filter="url(#filter0_f_100_7637)">
                                <circle cx="220.15" cy="0.408527" r="54.8333" fill="#613AD4"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_100_7637" x="0.816406" y="-218.925" width="438.666" height="438.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="82.25" result="effect1_foregroundBlur_100_7637"/>
                                </filter>
                            </defs>
                            </svg>
                        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[72px]' viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.05"/>
                        <circle cx="36" cy="36" r="35.5" stroke="white" stroke-opacity="0.05"/>
                        <path d="M36.0003 39.5591L34.4734 34.1518C34.4257 33.9997 34.3319 33.867 34.2056 33.773C34.0793 33.679 33.927 33.6285 33.7708 33.6289H26.7359C26.58 33.6287 26.4281 33.6792 26.3022 33.7732C26.1763 33.8673 26.083 33.9999 26.0358 34.1518L24.5352 39.5591" fill="white" fill-opacity="0.1"/>
                        <path d="M36.0003 39.5591L34.4734 34.1518C34.4257 33.9997 34.3319 33.867 34.2056 33.773C34.0793 33.679 33.927 33.6285 33.7708 33.6289H26.7359C26.58 33.6287 26.4281 33.6792 26.3022 33.7732C26.1763 33.8673 26.083 33.9999 26.0358 34.1518L24.5352 39.5591" stroke="white" stroke-miterlimit="10"/>
                        <path d="M47.4651 39.5591L45.9849 34.1518C45.9375 33.9999 45.8438 33.8673 45.7174 33.7732C45.591 33.6792 45.4385 33.6287 45.2819 33.6289H38.2191C38.0623 33.6285 37.9094 33.679 37.7826 33.773C37.6558 33.867 37.5617 33.9997 37.5138 34.1518L36 39.5591" fill="white" fill-opacity="0.1"/>
                        <path d="M47.4651 39.5591L45.9849 34.1518C45.9375 33.9999 45.8438 33.8673 45.7174 33.7732C45.591 33.6792 45.4385 33.6287 45.2819 33.6289H38.2191C38.0623 33.6285 37.9094 33.679 37.7826 33.773C37.6558 33.867 37.5617 33.9997 37.5138 34.1518L36 39.5591" stroke="white" stroke-miterlimit="10"/>
                        <path d="M28.77 40.0808C28.7226 39.9291 28.6289 39.7967 28.5026 39.7028C28.3762 39.6089 28.2237 39.5584 28.0672 39.5586H21.005C20.8482 39.5583 20.6954 39.6086 20.5686 39.7025C20.4418 39.7964 20.3476 39.9289 20.2998 40.0808L19.0212 44.908C19 44.9746 18.9946 45.0454 19.0054 45.1145C19.0162 45.1837 19.043 45.2492 19.0834 45.3058C19.1239 45.3625 19.177 45.4086 19.2383 45.4404C19.2996 45.4722 19.3674 45.4888 19.4362 45.4888H29.6336C29.7024 45.4888 29.7702 45.4722 29.8315 45.4404C29.8928 45.4086 29.9458 45.3625 29.9863 45.3058C30.0267 45.2492 30.0535 45.1837 30.0643 45.1145C30.0751 45.0454 30.0698 44.9746 30.0486 44.908L28.77 40.0808Z" fill="white" fill-opacity="0.1" stroke="white" stroke-miterlimit="10"/>
                        <path d="M40.2351 40.0808C40.1873 39.9289 40.0931 39.7964 39.9664 39.7025C39.8396 39.6086 39.6868 39.5583 39.53 39.5586H32.4694C32.3126 39.5583 32.1598 39.6086 32.0331 39.7025C31.9063 39.7964 31.8122 39.9289 31.7643 40.0808L30.486 44.908C30.4648 44.9748 30.4594 45.0458 30.4704 45.1151C30.4813 45.1844 30.5082 45.2501 30.549 45.3068C30.5897 45.3635 30.643 45.4096 30.7046 45.4412C30.7663 45.4728 30.8343 45.4892 30.9033 45.4888H41.0961C41.1651 45.4892 41.2332 45.4728 41.2948 45.4412C41.3564 45.4096 41.4097 45.3635 41.4504 45.3068C41.4912 45.2501 41.5182 45.1844 41.5291 45.1151C41.54 45.0458 41.5346 44.9748 41.5134 44.908L40.2351 40.0808Z" fill="white" fill-opacity="0.1" stroke="white" stroke-miterlimit="10"/>
                        <path d="M41.5346 33.6286L40.1113 28.5812C40.0642 28.4398 39.9726 28.3165 39.8497 28.229C39.7267 28.1414 39.5786 28.0941 39.4265 28.0938H32.5684C32.4163 28.0941 32.2682 28.1414 32.1452 28.229C32.0222 28.3165 31.9306 28.4398 31.8835 28.5812L30.4648 33.6286" fill="white" fill-opacity="0.1"/>
                        <path d="M41.5346 33.6286L40.1113 28.5812C40.0642 28.4398 39.9726 28.3165 39.8497 28.229C39.7267 28.1414 39.5786 28.0941 39.4265 28.0938H32.5684C32.4163 28.0941 32.2682 28.1414 32.1452 28.229C32.0222 28.3165 31.9306 28.4398 31.8835 28.5812L30.4648 33.6286" stroke="white" stroke-miterlimit="10"/>
                        <mask id="path-11-inside-1_1228_1159" fill="white">
                        <path d="M35.6049 39.9537L34.1816 34.5457C34.1345 34.3942 34.0429 34.2621 33.9199 34.1683C33.797 34.0745 33.6489 34.0238 33.4968 34.0234H26.6387C26.4866 34.0238 26.3385 34.0745 26.2155 34.1683C26.0925 34.2621 26.0009 34.3942 25.9538 34.5457L24.5352 39.9537"/>
                        </mask>
                        <path d="M35.6049 39.9537L34.1816 34.5457C34.1345 34.3942 34.0429 34.2621 33.9199 34.1683C33.797 34.0745 33.6489 34.0238 33.4968 34.0234H26.6387C26.4866 34.0238 26.3385 34.0745 26.2155 34.1683C26.0925 34.2621 26.0009 34.3942 25.9538 34.5457L24.5352 39.9537" fill="white" fill-opacity="0.1"/>
                        <path d="M34.1816 34.5457L34.4423 34.4771L34.4387 34.4657L34.1816 34.5457ZM33.9199 34.1683L33.7567 34.3824L33.7567 34.3824L33.9199 34.1683ZM33.4968 34.0234L33.4974 33.7542H33.4968V34.0234ZM26.6387 34.0234V33.7542L26.638 33.7542L26.6387 34.0234ZM26.2155 34.1683L26.3788 34.3824L26.3788 34.3824L26.2155 34.1683ZM25.9538 34.5457L25.6965 34.4657L25.6934 34.4774L25.9538 34.5457ZM35.8653 39.8851L34.442 34.4772L33.9213 34.6142L35.3445 40.0222L35.8653 39.8851ZM34.4387 34.4657C34.3755 34.2623 34.2519 34.0828 34.0832 33.9542L33.7567 34.3824C33.834 34.4414 33.8936 34.526 33.9245 34.6256L34.4387 34.4657ZM34.0832 33.9542C33.9144 33.8255 33.7094 33.7547 33.4974 33.7542L33.4961 34.2927C33.5884 34.2929 33.6796 34.3236 33.7567 34.3824L34.0832 33.9542ZM33.4968 33.7542H26.6387V34.2927H33.4968V33.7542ZM26.638 33.7542C26.4261 33.7547 26.2211 33.8255 26.0523 33.9542L26.3788 34.3824C26.4559 34.3236 26.5471 34.2929 26.6394 34.2927L26.638 33.7542ZM26.0523 33.9542C25.8836 34.0828 25.76 34.2623 25.6967 34.4657L26.2109 34.6256C26.2419 34.526 26.3014 34.4414 26.3788 34.3824L26.0523 33.9542ZM25.6934 34.4774L24.2747 39.8853L24.7956 40.022L26.2142 34.614L25.6934 34.4774Z" fill="white" mask="url(#path-11-inside-1_1228_1159)"/>
                        <mask id="path-13-inside-2_1228_1159" fill="white">
                        <path d="M47.4651 39.9537L45.991 34.5457C45.9422 34.3942 45.8474 34.2621 45.72 34.1683C45.5926 34.0745 45.4392 34.0238 45.2817 34.0234H38.1787C38.0211 34.0238 37.8677 34.0745 37.7403 34.1683C37.613 34.2621 37.5181 34.3942 37.4693 34.5457L36 39.9537"/>
                        </mask>
                        <path d="M47.4651 39.9537L45.991 34.5457C45.9422 34.3942 45.8474 34.2621 45.72 34.1683C45.5926 34.0745 45.4392 34.0238 45.2817 34.0234H38.1787C38.0211 34.0238 37.8677 34.0745 37.7403 34.1683C37.613 34.2621 37.5181 34.3942 37.4693 34.5457L36 39.9537" fill="white" fill-opacity="0.1"/>
                        <path d="M45.991 34.5457L46.251 34.4748L46.2473 34.4631L45.991 34.5457ZM45.72 34.1683L45.5603 34.3851L45.5603 34.3851L45.72 34.1683ZM45.2817 34.0234L45.2823 33.7542H45.2817V34.0234ZM38.1787 34.0234V33.7542L38.178 33.7542L38.1787 34.0234ZM37.7403 34.1683L37.5807 33.9515L37.5807 33.9515L37.7403 34.1683ZM37.4693 34.5457L37.2128 34.4631L37.2095 34.4751L37.4693 34.5457ZM47.7249 39.8829L46.2507 34.4749L45.7312 34.6165L47.2054 40.0245L47.7249 39.8829ZM46.2473 34.4631C46.1813 34.2582 46.0528 34.079 45.8796 33.9515L45.5603 34.3851C45.6419 34.4452 45.7031 34.5301 45.7347 34.6282L46.2473 34.4631ZM45.8796 33.9515C45.7064 33.824 45.4974 33.7547 45.2823 33.7542L45.281 34.2927C45.3811 34.2929 45.4788 34.3251 45.5603 34.3851L45.8796 33.9515ZM45.2817 33.7542H38.1787V34.2927H45.2817V33.7542ZM38.178 33.7542C37.963 33.7547 37.754 33.824 37.5807 33.9515L37.9 34.3851C37.9815 34.3251 38.0793 34.2929 38.1793 34.2927L38.178 33.7542ZM37.5807 33.9515C37.4075 34.079 37.2791 34.2582 37.2131 34.4631L37.7256 34.6282C37.7572 34.5301 37.8184 34.4451 37.9 34.3851L37.5807 33.9515ZM37.2095 34.4751L35.7402 39.8831L36.2598 40.0243L37.7292 34.6163L37.2095 34.4751Z" fill="white" mask="url(#path-13-inside-2_1228_1159)"/>
                        <path d="M51.7007 40.0808C51.653 39.9289 51.5587 39.7964 51.432 39.7025C51.305 39.6086 51.1522 39.5583 50.9955 39.5586H43.9333C43.7768 39.5584 43.6243 39.6089 43.4979 39.7028C43.3715 39.7967 43.2779 39.9291 43.2305 40.0808L41.9518 44.908C41.9307 44.9746 41.9253 45.0454 41.9361 45.1145C41.9469 45.1837 41.9736 45.2492 42.0141 45.3058C42.0546 45.3625 42.1076 45.4086 42.1689 45.4404C42.2302 45.4722 42.298 45.4888 42.3669 45.4888H52.5642C52.6332 45.4888 52.7011 45.4722 52.7623 45.4404C52.8236 45.4086 52.8767 45.3625 52.9169 45.3058C52.9575 45.2492 52.9842 45.1837 52.995 45.1145C53.0058 45.0454 53.0004 44.9746 52.9794 44.908L51.7007 40.0808Z" fill="white" fill-opacity="0.1" stroke="white" stroke-miterlimit="10"/>
                        <path d="M45.8838 32.0467L46.2791 29.2793L45.8838 32.0467Z" fill="white" fill-opacity="0.1"/>
                        <path d="M45.8838 32.0467L46.2791 29.2793" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        <path d="M46.2793 32.8371L51.0235 28.4883L46.2793 32.8371Z" fill="white" fill-opacity="0.1"/>
                        <path d="M46.2793 32.8371L51.0235 28.4883" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        <path d="M47.0693 33.6286L50.2321 32.8379L47.0693 33.6286Z" fill="white" fill-opacity="0.1"/>
                        <path d="M47.0693 33.6286L50.2321 32.8379" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        <path d="M52.8651 28.0931C52.8651 28.8921 52.2173 29.5399 51.4183 29.5399C50.6193 29.5399 49.9715 28.8921 49.9715 28.0931C49.9715 27.2941 50.6193 26.6463 51.4183 26.6463C52.2173 26.6463 52.8651 27.2941 52.8651 28.0931Z" fill="white" fill-opacity="0.1" stroke="white" stroke-width="0.269231"/>
                        <path d="M46.6748 28.4891V28.0938V28.4891Z" fill="white" fill-opacity="0.1"/>
                        <path d="M46.6748 28.4891V28.0938" stroke="white" stroke-width="0.269231" stroke-linecap="round"/>
                        </svg>

                            <div>
                                <h2 className='forex text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Metals</h2>
                                <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                                Find your next opportunity in one of the world&apos;s most traded markets - precious metals like gold and silver. Find your next opportunity in one of the world&apos;s most traded markets - precious metals like gold and silver.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={acquireRef} className='relative  pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[42px] 2xl:pt-[55px] sm:px-0 px-[24px]' >
            <svg className='w-1/4 absolute top-1/2 -translate-y-1/2 right-0 z-[1]' viewBox="0 0 697 1079" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1239_2530)">
                <ellipse cx="573.986" cy="539.561" rx="178.49" ry="144.129" fill="url(#paint0_linear_1239_2530)"/>
                </g>
                <defs>
                <filter id="filter0_f_1239_2530" x="0.696106" y="0.632629" width="1146.58" height="1077.86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="197.4" result="effect1_foregroundBlur_1239_2530"/>
                </filter>
                <linearGradient id="paint0_linear_1239_2530" x1="395.496" y1="539.561" x2="752.475" y2="539.561" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F2AC0"/>
                <stop offset="1" stop-color="#8B65FE"/>
                </linearGradient>
                </defs>
                </svg>
                <div className='py-[20px] sm:py-[24px] md:py-[32px] lg:py-[36px] xl:py-[40px] 2xl:py-[47px] pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[62px] pl-[24px] sm:pl-[48px] md:pl-[68px] lg:pl-[84px] xl:pl-[110px] 2xl:pl-[156px] container mx-auto acqueriction relative sm:px-0 px-[24px]'>
                <svg className='w-full absolute top-0 -translate-x-1/2 left-1/2' viewBox="0 0 1192 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.666016" y="-446.075" width="1190.67" height="893" fill="url(#paint0_radial_100_8977)"/>
                <defs>
                <radialGradient id="paint0_radial_100_8977" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(595.999 0.424805) scale(595.333 446.5)">
                <stop stop-color="#613AD4" stop-opacity="0.4"/>
                <stop offset="1" stop-color="#05050B" stop-opacity="0"/>
                </radialGradient>
                </defs>
                </svg>
                    <div className='flex sm:flex-row flex-col items-center justify-center gap-[50px] sm:gap-[120px] md:gap-[150px] lg:gap-[180px] xl:gap-[220px] 2xl:gap-[250px]' id='BuyCRX'>
                        <div className='flex-1'>
                            <div className="Frame13 self-stretch flex flex-col justify-start items-start relative z-[2]">
                                <div className="TradeLikeAProWithXonicCapital text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[70px] !text-left">
                                Acquire CRX Instantly
                                </div>
                                <div className="InvestTodayBuildASecuredTomorrow text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] !text-left !leading-[150%] pt-[13px]  sm:pt-[15px] xl:pt-[18px]">take advantage of a seamless, quick, and secure process to add CRX to your portfolio.</div>
                                <div data-layer="Frame 12" className="Frame12 flex justify-start items-start pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[25px">
                                    <button className='buttonaudit-3 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] pl-[13px] sm:pl-[14px] md:pl-[15px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[25px] pr-[7px] sm:pr-[8px] md:pr-[9px] lg:pr-[10px] xl:pr-[11px] 2xl:pr-[12px] gap-[7px] group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-md'>
                                        Connect Wallet
                                        <svg className='w-[14px] sm:w-[15px] 2xl:w-[23px] transition-transform duration-300 ease-in-out group-hover:translate-x-1' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.283203" y="0.249634" width="21.9333" height="21.9333" rx="10.9667" fill="white"/>
                                            <path d="M11.9351 7.78925L15.3622 11.2163M15.3622 11.2163L11.9351 14.6434M15.3622 11.2163H7.13721" stroke="#0E0E27" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 w-full flex flex-col items-start justify-end relative z-[2]'>
                            <div className='buycrxsecton flex items-start justify-start flex-col p-[13px] sm:p-[14px] md:p-[15px] lg:p-[16px] xl:p-[20px] 2xl:p-[25px] w-full'>
                                <div className='grid grid-cols-2 gap-[4px] w-full'>
                                <Link
                                    href="#"
                                    onClick={() => handleLinkClick('/buy')}
                                    className={`px-[10px] sm:px-[11px] md:px-[12px] lg:px-[13px] xl:px-[14px] 2xl:px-[15px] byeextraone text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center justify-center ${activeLink === '/buy' ? 'byeextra' : ''}`}
                                >
                                    Buy
                                </Link>
                                <Link
                                    href="#" 
                                    onClick={() => handleLinkClick('/crx')}
                                    className={`py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] 2xl:py-[15px] byeextraone text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] w-full flex items-center justify-center ${activeLink === '/crx' ? 'byeextra' : ''}`}
                                >
                                    CRX
                                </Link>
                                </div>
                                <div className='value w-full'>
                                {activeLink === '/buy' ? (
                                    <div className='!w-full '>
                                    <div className='!w-full '>
                                        <p className='howmat text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[18.8px] pb-[6px] md:pb-[7px] 2xl:pb-[9.4]'>How much BNB you need to pay:</p>
                                        <div className='flex items-center justify-between w-full bordering py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] 2xl:py-[15px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[18px]'>
                                            <input className='outline-none w-full ngasings text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]' type='mail' placeholder='0'/>
                                            <div className="crypto-selector">
                                            <div
                                                className="flex items-center gap-[10px] cursor-pointer"
                                                onClick={toggleDropdown}
                                            >
                                                <Image
                                                    className="w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]"
                                                    src={selectedCrypto.image}
                                                    alt={`${selectedCrypto.name} Icon`}
                                                    width={25}
                                                    height={25}
                                                />
                                                <p className="ngasings text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                                    {selectedCrypto.name}
                                                </p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2.93056 5.15807L7.61556 9.76907C7.71779 9.8702 7.85577 9.92692 7.99956 9.92692C8.14336 9.92692 8.28134 9.8702 8.38356 9.76907L13.0686 5.15907C13.1714 5.05799 13.3099 5.00136 13.4541 5.00136C13.5983 5.00136 13.7367 5.05799 13.8396 5.15907C13.8902 5.20845 13.9305 5.26746 13.9579 5.33264C13.9854 5.39781 13.9996 5.46783 13.9996 5.53857C13.9996 5.6093 13.9854 5.67932 13.9579 5.7445C13.9305 5.80968 13.8902 5.86869 13.8396 5.91807L9.15556 10.5281C8.84704 10.831 8.43194 11.0007 7.99956 11.0007C7.56719 11.0007 7.15209 10.831 6.84356 10.5281L2.15956 5.91807C2.10876 5.86868 2.06838 5.8096 2.04081 5.74433C2.01323 5.67906 1.99902 5.60892 1.99902 5.53807C1.99902 5.46721 2.01323 5.39708 2.04081 5.33181C2.06838 5.26654 2.10876 5.20746 2.15956 5.15807C2.26242 5.05699 2.40086 5.00036 2.54506 5.00036C2.68927 5.00036 2.82771 5.05699 2.93056 5.15807Z"
                                                        fill="#D0D1E3"
                                                    />
                                                </svg>
                                            </div>

                                            {isOpen && (
                                                <div className="options absolute bg-white shadow-md rounded-md mt-2 p-2">
                                                    {options.map((option, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer"
                                                            onClick={() => handleSelect(option)}
                                                        >
                                                            <Image
                                                                src={option.image}
                                                                alt={`${option.name} Icon`}
                                                                className="w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]"
                                                                width={25}
                                                                height={25}
                                                            />
                                                            <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                                                {option.name}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        </div>
                                    </div>
                                    <Crxconving/>
                                    <div className='flex items-center justify-between pt-[10px] sm:pt-[11px] md:pt-[12px] lg:pt-[13px] xl:pt-[14px] 2xl:pt-[15.67px] pb-[12px] sm:pb-[13px] md:pb-[14px] lg:pb-[15px] xl:pb-[16px] 2xl:pb-[18.8px] w-full'>
                                        <p className='priceingxed text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12.533px]'>Reference Price</p>
                                        <p className='priceingxed text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12.533px]'>Reference Price</p>
                                    </div>
                                    <ul className="flex flex-col !gap-[7px] !sm:gap-[9px] !lg:gap-[12.53px]">
                                        <li className='flex items-center justify-start refresingsection text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] gap-[6px] sm:gap-[7px] lg:gap-[9.4px]'><span className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[23.5px] h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[20px] 2xl:h-[23.5px] flex items-center justify-center onesborder'>1</span>Reference Price</li>

                                        <li className='flex items-center justify-start refresingsection text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] gap-[6px] sm:gap-[7px] lg:gap-[9.4px]'><span className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[23.5px] h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[20px] 2xl:h-[23.5px] flex items-center justify-center onesborder'>2</span>I read and accept Terms& Conditions</li>
                                    </ul>
                                    <button className='py-[8px] sm:py-[9px] md:py-[10px] lg:py-[11px] xl:py-[12px] 2xl:py-[12.53px] w-full oursecton text-[8px] sm:text-[11px] md:text-[12px] lg:text-[13.317px] mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[25px] hover:scale-[1.1] duration-200 cursor-pointer'>Connect Wallet</button>
                                    </div>
                                ) : (
                                    <div>
                                <Crxconving/>
                                    <div className='w-full '>
                                        <p className='howmat text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[18.8px] pb-[6px] md:pb-[7px] 2xl:pb-[9.4]'>How much BNB you need to pay:</p>
                                        <div className='flex items-center justify-between w-full bordering py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] 2xl:py-[15px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[18px]'>
                                            <input className='outline-none w-full ngasings text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]' type='mail' placeholder='0'/>
                                            <div className="crypto-selector">
                                            <div
                                                className="flex items-center gap-[10px] cursor-pointer"
                                                onClick={toggleDropdown}
                                            >
                                                <Image
                                                    className="w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]"
                                                    src={selectedCrypto.image}
                                                    alt={`${selectedCrypto.name} Icon`}
                                                    width={25}
                                                    height={25}
                                                />
                                                <p className="ngasings text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                                    {selectedCrypto.name}
                                                </p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2.93056 5.15807L7.61556 9.76907C7.71779 9.8702 7.85577 9.92692 7.99956 9.92692C8.14336 9.92692 8.28134 9.8702 8.38356 9.76907L13.0686 5.15907C13.1714 5.05799 13.3099 5.00136 13.4541 5.00136C13.5983 5.00136 13.7367 5.05799 13.8396 5.15907C13.8902 5.20845 13.9305 5.26746 13.9579 5.33264C13.9854 5.39781 13.9996 5.46783 13.9996 5.53857C13.9996 5.6093 13.9854 5.67932 13.9579 5.7445C13.9305 5.80968 13.8902 5.86869 13.8396 5.91807L9.15556 10.5281C8.84704 10.831 8.43194 11.0007 7.99956 11.0007C7.56719 11.0007 7.15209 10.831 6.84356 10.5281L2.15956 5.91807C2.10876 5.86868 2.06838 5.8096 2.04081 5.74433C2.01323 5.67906 1.99902 5.60892 1.99902 5.53807C1.99902 5.46721 2.01323 5.39708 2.04081 5.33181C2.06838 5.26654 2.10876 5.20746 2.15956 5.15807C2.26242 5.05699 2.40086 5.00036 2.54506 5.00036C2.68927 5.00036 2.82771 5.05699 2.93056 5.15807Z"
                                                        fill="#D0D1E3"
                                                    />
                                                </svg>
                                            </div>

                                            {isOpen && (
                                                <div className="options absolute bg-white shadow-md rounded-md mt-2 p-2">
                                                    {options.map((option, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer"
                                                            onClick={() => handleSelect(option)}
                                                        >
                                                            <Image
                                                                src={option.image}
                                                                alt={`${option.name} Icon`}
                                                                className="w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]"
                                                                width={25}
                                                                height={25}
                                                            />
                                                            <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                                                {option.name}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-[10px] sm:pt-[11px] md:pt-[12px] lg:pt-[13px] xl:pt-[14px] 2xl:pt-[15.67px] pb-[12px] sm:pb-[13px] md:pb-[14px] lg:pb-[15px] xl:pb-[16px] 2xl:pb-[18.8px] w-full'>
                                        <p className='priceingxed text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12.533px]'>Reference Price</p>
                                        <p className='priceingxed text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12.533px]'>Reference Price</p>
                                    </div>
                                    <ul className="flex flex-col !gap-[7px] !sm:gap-[9px] !lg:gap-[12.53px]">
                                        <li className='flex items-center justify-start refresingsection text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] gap-[6px] sm:gap-[7px] lg:gap-[9.4px]'><span className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[23.5px] h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[20px] 2xl:h-[23.5px] flex items-center justify-center onesborder'>1</span>Reference Price</li>

                                        <li className='flex items-center justify-start refresingsection text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] gap-[6px] sm:gap-[7px] lg:gap-[9.4px]'><span className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[23.5px] h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[20px] 2xl:h-[23.5px] flex items-center justify-center onesborder'>2</span>I read and accept Terms& Conditions</li>
                                    </ul>
                                    <button className='py-[8px] sm:py-[9px] md:py-[10px] lg:py-[11px] xl:py-[12px] 2xl:py-[12.53px] w-full oursecton text-[8px] sm:text-[11px] md:text-[12px] lg:text-[13.317px] mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[25px] hover:scale-[1.02] duration-200 cursor-pointer'>Connect Wallet</button>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pageone;