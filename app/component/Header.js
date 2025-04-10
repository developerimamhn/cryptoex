'use client';

import { useEffect, useRef } from "react";
import NavBar from './NavBar';
import HeroPage from './HeroPage';
import backgroundimageheader from './image/backgroundimageheader.svg';
import Image from 'next/image';
import { gsap } from "gsap";    


const Header = () => {
    const svgRef = useRef(null);

    useEffect(() => {
      // Ensure GSAP runs only on the client-side
      if (typeof window === "undefined") return;
  
      const svg = svgRef.current;
      if (!svg) return; // Guard against null ref
  
      // Target SVG elements directly with querySelectorAll
      const verticalLines = svg.querySelectorAll(".vertical-lines path");
      const horizontalLines = svg.querySelectorAll(".horizontal-lines path");
      const rectangles = svg.querySelectorAll(".rect-1, .rect-2, .rect-3");
      const highlightLines = svg.querySelectorAll(
        ".highlight-line, .vertical-highlight"
      );
  
      // Animate vertical lines
      gsap.from(verticalLines, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  
      // Animate horizontal lines
      gsap.from(horizontalLines, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
      });
  
      // Animate rectangles
      gsap.from(rectangles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 1,
      });
  
      // Animate highlight lines
      gsap.fromTo(
        highlightLines,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
          delay: 1.5,
        }
      );
    }, []);
    return (
        <div className='relative sm:h-screen overflow-hidden backgroundimageheader mx-[7.83px]'>
            {/* <Image className="absolute left-0 top-[50px] sm:top-[84px] w-full z-[1]" src={backgroundimageheader} alt="Loading..." /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 w-full z-[1] hidden" viewBox="0 0 1272 936" fill="none">
            <path d="M1.50017 -0.0917969L1.50013 935.208M107.25 -0.0917969L107.25 935.208M213 -0.0917969L213 935.208M318.75 -0.0917969L318.75 935.208M424.5 -0.0917969L424.5 935.208M530.25 -0.0917969L530.25 935.208M636 -0.0917969L636 935.208M741.75 -0.0917969L741.75 935.208M847.5 -0.0917969V935.208M953.25 -0.0917969V935.208M1059 -0.0917969V935.208M1164.75 -0.0917969V935.208M1270.5 -0.0917969V935.208M0.716797 0.691536H1271.28M0.716797 103.308H1271.28M0.716797 207.492H1271.28M0.716797 311.675H1271.28M0.716797 415.858H1271.28M0.716797 520.042H1271.28M0.716797 624.225H1271.28M0.716797 728.408H1271.28M0.716797 832.592H1271.28M0.716797 934.425H1271.28" stroke="url(#paint0_linear_100_7000)" stroke-width="1.56667"/>
            <path d="M1.50017 -0.0917969L1.50013 935.208M107.25 -0.0917969L107.25 935.208M213 -0.0917969L213 935.208M318.75 -0.0917969L318.75 935.208M424.5 -0.0917969L424.5 935.208M530.25 -0.0917969L530.25 935.208M636 -0.0917969L636 935.208M741.75 -0.0917969L741.75 935.208M847.5 -0.0917969V935.208M953.25 -0.0917969V935.208M1059 -0.0917969V935.208M1164.75 -0.0917969V935.208M1270.5 -0.0917969V935.208M0.716797 0.691536H1271.28M0.716797 103.308H1271.28M0.716797 207.492H1271.28M0.716797 311.675H1271.28M0.716797 415.858H1271.28M0.716797 520.042H1271.28M0.716797 624.225H1271.28M0.716797 728.408H1271.28M0.716797 832.592H1271.28M0.716797 934.425H1271.28" stroke="url(#paint1_linear_100_7000)" stroke-width="1.56667"/>
            <defs>
                <linearGradient id="paint0_linear_100_7000" x1="1271.28" y1="670.442" x2="1.10852" y2="670.442" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="0.502661" stop-color="white" stop-opacity="0.04"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_100_7000" x1="636" y1="-0.0917969" x2="636" y2="935.208" gradientUnits="userSpaceOnUse">
                <stop stop-color="#010214"/>
                <stop offset="0.227312" stop-color="#010214" stop-opacity="0"/>
                <stop offset="0.475884" stop-color="white" stop-opacity="0.03"/>
                <stop offset="0.651004" stop-color="white" stop-opacity="0"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
            </defs>
            </svg>
            <svg ref={svgRef} className="absolute left-1/2 top-0 -translate-x-1/2 w-full z-[1] container mx-auto " viewBox="0 0 1272 936" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50017 -0.0917969L1.50013 935.208M107.25 -0.0917969L107.25 935.208M213 -0.0917969L213 935.208M318.75 -0.0917969L318.75 935.208M424.5 -0.0917969L424.5 935.208M530.25 -0.0917969L530.25 935.208M636 -0.0917969L636 935.208M741.75 -0.0917969L741.75 935.208M847.5 -0.0917969V935.208M953.25 -0.0917969V935.208M1059 -0.0917969V935.208M1164.75 -0.0917969V935.208M1270.5 -0.0917969V935.208M0.716797 0.691536H1271.28M0.716797 103.308H1271.28M0.716797 207.492H1271.28M0.716797 311.675H1271.28M0.716797 415.858H1271.28M0.716797 520.042H1271.28M0.716797 624.225H1271.28M0.716797 728.408H1271.28M0.716797 832.592H1271.28M0.716797 934.425H1271.28" stroke="url(#paint0_linear_1239_284)" stroke-width="1.56667"/>
<path d="M1.50017 -0.0917969L1.50013 935.208M107.25 -0.0917969L107.25 935.208M213 -0.0917969L213 935.208M318.75 -0.0917969L318.75 935.208M424.5 -0.0917969L424.5 935.208M530.25 -0.0917969L530.25 935.208M636 -0.0917969L636 935.208M741.75 -0.0917969L741.75 935.208M847.5 -0.0917969V935.208M953.25 -0.0917969V935.208M1059 -0.0917969V935.208M1164.75 -0.0917969V935.208M1270.5 -0.0917969V935.208M0.716797 0.691536H1271.28M0.716797 103.308H1271.28M0.716797 207.492H1271.28M0.716797 311.675H1271.28M0.716797 415.858H1271.28M0.716797 520.042H1271.28M0.716797 624.225H1271.28M0.716797 728.408H1271.28M0.716797 832.592H1271.28M0.716797 934.425H1271.28" stroke="url(#paint1_linear_1239_284)" stroke-width="1.56667"/>
<line opacity="0.5" x1="319.533" y1="520.041" x2="423.717" y2="520.041" stroke="url(#paint2_linear_1239_284)" stroke-width="1.56667"/>
<rect x="848.283" y="520.824" width="104.183" height="102.617" fill="white" fill-opacity="0.02"/>
<rect x="1059.78" y="416.642" width="104.183" height="102.617" fill="url(#paint3_linear_1239_284)" fill-opacity="0.02"/>
<rect x="108.033" y="416.642" width="104.183" height="102.617" fill="url(#paint4_linear_1239_284)" fill-opacity="0.02"/>
<line opacity="0.5" x1="953.25" y1="520.824" x2="953.25" y2="625.008" stroke="url(#paint5_linear_1239_284)" stroke-width="1.56667"/>
<defs>
<linearGradient id="paint0_linear_1239_284" x1="1271.28" y1="670.442" x2="1.10852" y2="670.442" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.502661" stop-color="white" stop-opacity="0.04"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_1239_284" x1="636" y1="-0.0917969" x2="636" y2="935.208" gradientUnits="userSpaceOnUse">
<stop stop-color="#010214"/>
<stop offset="0.227312" stop-color="#010214" stop-opacity="0"/>
<stop offset="0.475884" stop-color="white" stop-opacity="0.03"/>
<stop offset="0.651004" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_1239_284" x1="319.533" y1="519.824" x2="423.717" y2="519.824" gradientUnits="userSpaceOnUse">
<stop stop-color="#5D39C4"/>
<stop offset="0.501564" stop-color="white" stop-opacity="0.5"/>
<stop offset="1" stop-color="#5F3BC5"/>
</linearGradient>
<linearGradient id="paint3_linear_1239_284" x1="1059.78" y1="468.342" x2="1163.97" y2="468.342" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#321C7A"/>
</linearGradient>
<linearGradient id="paint4_linear_1239_284" x1="108.033" y1="468.342" x2="212.217" y2="468.342" gradientUnits="userSpaceOnUse">
<stop stop-color="#321C7A"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint5_linear_1239_284" x1="953.467" y1="520.824" x2="953.467" y2="625.008" gradientUnits="userSpaceOnUse">
<stop stop-color="#5D39C4"/>
<stop offset="0.501564" stop-color="white" stop-opacity="0.5"/>
<stop offset="1" stop-color="#5F3BC5"/>
</linearGradient>
</defs>
            </svg>

            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;