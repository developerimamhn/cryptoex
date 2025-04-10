'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';
import image4 from './image/image4.png';
import image5 from './image/image5.png';

gsap.registerPlugin(ScrollTrigger);


const Pagetwo = () => {
    const wrapperRef = useRef(null); // Outer container
  const titleRef = useRef(null); // "Tokenomics" title
  const descRef = useRef(null); // Description text
  const gridItem1Ref = useRef(null); // First grid item (CRX Staking Rewards)
  const gridItem2Ref = useRef(null); // Second grid item (CRX Payment Discounts)
  const gridItem3Ref = useRef(null); // Third grid item (CRX Staking Rewards)
  const gridItem4Ref = useRef(null); // Fourth grid item (CRX Access Requirement)
  const buttonRef = useRef(null); // "Start Staking" button
  const imageRef = useRef(null); // Right-side image

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Wrapper animation
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

        // Description animation
        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );

        // Grid items animation (manual stagger)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref, gridItem4Ref].forEach((ref, index) => {
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

        // Button animation
        gsap.fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: buttonRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );

        // Image animation
        gsap.fromTo(
          imageRef.current,
          { x: isMobile ? 0 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
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
        <div ref={wrapperRef} className='relative pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[70px] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[78px] sm:px-0 px-[24px]'> 
        <svg className='lg:block hidden absolute left-0 bottom-0' width="653" height="639" viewBox="0 0 653 639" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.25" filter="url(#filter0_f_1239_2388)">
        <circle cx="79.1161" cy="573.875" r="181.733" fill="#613AD4"/>
        </g>
        <defs>
        <filter id="filter0_f_1239_2388" x="-494.284" y="0.474945" width="1146.8" height="1146.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="195.833" result="effect1_foregroundBlur_1239_2388"/>
        </filter>
        </defs>
        </svg>
            <div className="grid grid-cols-1 sm:grid-cols-2 relative z-[2] container mx-auto gap-[52px]">
                <div>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapital text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[70px] !text-left">
                    Tokenomics Without the Price Tag
                    </div>
                    <div ref={descRef} className="InvestTodayBuildASecuredTomorrow text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] !text-left pt-[13px]  sm:pt-[15px] xl:pt-[18px] !leading-[160%]">50% of fees generated from services oon the CryptEx platform go directly to CRX Stakers upon CRX Staking launch</div>
                    <div className='flex flex-col justify-between gap-[32.5px] relative mt-[36px] sm:mt-[40px] md:mt-[48px] lg:mt-[64px] xl:mt-[96px] 2xl:mt-[120px]'>
                    <svg width="2" className='h-full absolute left-1/2 -translate-x-1/2 top-0 sm:block hidden' viewBox="0 0 2 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.30866" y1="0.475475" x2="1.30865" y2="269.942" stroke="url(#paint0_linear_1239_2380)" stroke-width="0.783333"/>
                    <line x1="1.30866" y1="0.475475" x2="1.30865" y2="269.942" stroke="url(#paint1_linear_1239_2380)" stroke-width="0.783333"/>
                    <defs>
                    <linearGradient id="paint0_linear_1239_2380" x1="0.416992" y1="0.475475" x2="0.41698" y2="269.942" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BACFF7" stop-opacity="0"/>
                    <stop offset="0.25" stop-color="#BACFF7" stop-opacity="0.16"/>
                    <stop offset="0.75" stop-color="#BACFF7" stop-opacity="0.16"/>
                    <stop offset="1" stop-color="#BACFF7" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1239_2380" x1="0.916986" y1="135.209" x2="-0.0830137" y2="135.209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#222338" stop-opacity="0.2"/>
                    <stop offset="0.501564" stop-color="#373952"/>
                    <stop offset="1" stop-color="#222338" stop-opacity="0.2"/>
                    </linearGradient>
                    </defs>
                    </svg>
                        <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-start gap-[25px] sm:gap-[30px] md:gap-[36px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[65px]' ref={gridItem1Ref}>
                            <div>
                                <div  className='flex itesm-center justify-start gap-[6.27]'>
                                    <Image className='w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[32px] 2xl:w-[37.6px] h-[15px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[32px] 2xl:h-[37.6px]' src={image2} alt=""/>
                                    <h3 className='stakingreas text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18.8px]'>CRX Staking Rewards</h3>
                                </div>
                                <div className="InvestTodayBuildASecuredTomorrow text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] !text-left pt-[13px]  sm:pt-[15px] xl:pt-[18px] !leading-[150%]">50% of fees generated from services oon <br className="lg:block hidden 2xl:hidden"/> the CryptEx platform go directly to CRX <br className="lg:block hidden 2xl:hidden"/> Stakers upon CRX Staking launch</div>
                            </div>
                            <div>
                                <div>
                                    <div ref={gridItem2Ref} className='flex itesm-center justify-start gap-[6.27]'>
                                        <Image className='w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[32px] 2xl:w-[37.6px] h-[15px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[32px] 2xl:h-[37.6px]' src={image3} alt=""/>
                                        <h3 className='stakingreas text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18.8px]'>CRX Payment Discounts</h3>
                                    </div>
                                    <div className="InvestTodayBuildASecuredTomorrow text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] !text-left pt-[13px]  sm:pt-[15px] xl:pt-[18px] !leading-[150%]">Users and teams choosing to pay for <br className="lg:block hidden 2xl:hidden"/> platform services with  CRX tokens can <br className="lg:block hidden 2xl:hidden"/> enjoy exclusive discounts.</div>
                                </div>
                            </div>
                        </div>
                        <svg className='w-full sm:block hidden' height="1" viewBox="0 0 568 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="567.017" y1="0.600483" x2="0.667114" y2="0.600483" stroke="url(#paint0_linear_1239_2381)" stroke-width="0.783333"/>
                        <defs>
                        <linearGradient id="paint0_linear_1239_2381" x1="567.017" y1="-0.291183" x2="0.667114" y2="-0.291183" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BACFF7" stop-opacity="0"/>
                        <stop offset="0.25" stop-color="#BACFF7" stop-opacity="0.16"/>
                        <stop offset="0.75" stop-color="#BACFF7" stop-opacity="0.16"/>
                        <stop offset="1" stop-color="#BACFF7" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <div ref={gridItem3Ref} className='grid grid-cols-1 sm:grid-cols-2 justify-between items-start gap-[25px] sm:gap-[30px] md:gap-[36px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[65px]'>
                            <div>
                            <div>
                                <div className='flex itesm-center justify-start gap-[6.27]'>
                                    <Image className='w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[32px] 2xl:w-[37.6px] h-[15px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[32px] 2xl:h-[37.6px]' src={image4} alt=""/>
                                    <h3 className='stakingreas text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18.8px]'>CRX Staking Rewards</h3>
                                </div>
                                    <div className="InvestTodayBuildASecuredTomorrow text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] !text-left pt-[13px]  sm:pt-[15px] xl:pt-[18px] !leading-[150%]">50% of fees generated from services oon <br className="lg:block hidden 2xl:hidden"/> the CryptEx platform go directly to CRX <br className="lg:block hidden 2xl:hidden"/> Stakers upon CRX  Staking launch</div>
                                </div>
                            </div>
                            <div>
                            <div>
                                <div ref={buttonRef} className='flex itesm-center justify-start gap-[6.27]'>
                                    <Image className='w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[32px] 2xl:w-[37.6px] h-[15px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[32px] 2xl:h-[37.6px]' src={image5} alt=""/>
                                    <h3 className='stakingreas text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18.8px]'>CRX Access Requirement</h3>
                                </div>
                                    <div className="InvestTodayBuildASecuredTomorrow text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] !text-left pt-[13px]  sm:pt-[15px] xl:pt-[18px] !leading-[150%]">Future security tool implementations will <br className="lg:block hidden 2xl:hidden"/> require users to hold amount CRX tokens to <br className="lg:block hidden 2xl:hidden"/> gain access. Requirement is designed.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button ref={buttonRef} className='buttonaudit-3 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] pl-[13px] sm:pl-[14px] md:pl-[15px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[25px] pr-[7px] sm:pr-[8px] md:pr-[9px] lg:pr-[10px] xl:pr-[11px] 2xl:pr-[12px] gap-[7px] group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-md mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[46px]'>
                    Start Staking
                    <svg className='w-[14px] sm:w-[15px] 2xl:w-[23px] transition-transform duration-300 ease-in-out group-hover:translate-x-1' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.283203" y="0.249634" width="21.9333" height="21.9333" rx="10.9667" fill="white"/>
                        <path d="M11.9351 7.78925L15.3622 11.2163M15.3622 11.2163L11.9351 14.6434M15.3622 11.2163H7.13721" stroke="#0E0E27" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                </div>
                <div>
                <Image ref={imageRef} src={image1} alt="loading,..."/>
                </div>
            </div>
        </div>
    );
};

export default Pagetwo;