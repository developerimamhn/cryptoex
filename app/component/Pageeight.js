'use client';


import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import image1 from './image/egitgooter.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
    return (
        <div className='relative overflow-hidden px-[24px] sm:px-0' id='Team'>
            
            <div className='container borderingtextws mx-auto flex items-center justify-center flex-col py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[70px] relative z-[1] overflow-hidden px-[24px] sm:px-0'>
            <div className="markerleines absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  -z-[0] w-[80%]"></div>

            <svg ref={svgRef} className="absolute left-1/2 -translate-x-1/2  -z-[0] w-full" viewBox="0 0 1192 399" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1286_292)">
            <ellipse cx="643" cy="200.765" rx="380.121" ry="47.3764" transform="rotate(-30 643 200.765)" fill="url(#paint0_linear_1286_292)"/>
            </g>
            <g opacity="0.25" filter="url(#filter1_f_1286_292)">
            <ellipse cx="596.392" cy="199.575" rx="464.908" ry="256.15" fill="#613AD4" fill-opacity="0.7"/>
            </g>
            <defs>
            <filter id="filter0_f_1286_292" x="137.473" y="-169.181" width="1011.05" height="739.892" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="87.7333" result="effect1_foregroundBlur_1286_292"/>
            </filter>
            <filter id="filter1_f_1286_292" x="-260.183" y="-448.242" width="1713.15" height="1295.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="195.833" result="effect1_foregroundBlur_1286_292"/>
            </filter>
            <linearGradient id="paint0_linear_1286_292" x1="262.879" y1="200.765" x2="1023.12" y2="200.765" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4F2AC0"/>
            <stop offset="1" stop-color="#8B65FE"/>
            </linearGradient>
            </defs>
            </svg>
                <h2 className='text-center golobalmarketes text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[56px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'><span className='gradient-class'>Ready</span> to access best-in-breed <br className='lg:block hidden'/> cyber <span className='gradient-class'>Security</span></h2>
                <button className='buttonaudit-3 cursor-pointer text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[17.233px] flex items-center h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] pl-[13px] sm:pl-[14px] md:pl-[15px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[25px] pr-[7px] sm:pr-[8px] md:pr-[9px] lg:pr-[10px] xl:pr-[11px] 2xl:pr-[12px] gap-[7px] group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-md'>
                Run The App
                <svg className='w-[14px] sm:w-[15px] 2xl:w-[23px] transition-transform duration-300 ease-in-out group-hover:translate-x-1' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.283203" y="0.249634" width="21.9333" height="21.9333" rx="10.9667" fill="white"/>
                    <path d="M11.9351 7.78925L15.3622 11.2163M15.3622 11.2163L11.9351 14.6434M15.3622 11.2163H7.13721" stroke="#0E0E27" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Pageeight;