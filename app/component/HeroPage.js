'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import righticon from './image/righticon.png';
import Image from 'next/image';



const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation for text elements
    gsap.from(textRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Animation for buttons
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5, // Delay to make the buttons appear after text animation
      ease: 'power2.out',
    });

    // Animation for image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      delay: 0.5,
      ease: 'power2.out',
    });
  }, []);
    return (
        <div className='relative'>
          <div className='flex items-center justify-center pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[175px] relative z-[2] mx-auto sm:pb-0 pb-[50px] container px-[24px] sm:px-0 w-full'>
              <div data-layer="Frame 14" className="Frame14 flex flex-col justify-center items-center w-full">
                <div ref={textRef} className='innovationsater'>Innovating Sater System Security</div>
                  <div  className='inline-flex flex-col w-full'>
                      <div data-layer="Frame 13" className="Frame13 self-stretch flex flex-col justify-center items-center gap-[12px]  sm:gap-[14px] xl:gap-[17px]">
                          <div ref={textRef} className="TradeLikeAProWithXonicCapital text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[70px]">
                              Defining Security Standards <br className='md:block hidden'/> for Sater Systems
                          </div>
                          <div ref={textRef} className="InvestTodayBuildASecuredTomorrow text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">These standards act as a foundation, guiding organizations in implementing best <br className='md:block hidden'/> practices to protect sensitive data and thwart cyber threats.</div>
                      </div>
                      <div ref={buttonRef} data-layer="Frame 12" className="Frame12 size- inline-flex justify-center items-center pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[25px]">
                        <button className='buttonaudit-2 cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[47px] pl-[13px] sm:pl-[14px] md:pl-[15px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[25px] pr-[7px] sm:pr-[8px] md:pr-[9px] lg:pr-[10px] xl:pr-[11px] 2xl:pr-[12px] gap-[7px] group'>
                        Request audit <Image className='w-[12px] sm:w-[14px] 2xl:w-[17px]' src={righticon} alt='Loading Image'/>
                        </button>
                      </div>
                      <div ref={buttonRef} className='flex items-center justify-between maringpriceingsec py-[20px] sm:py-[24px] md:py-[32px] lg:py-[36px] xl:py-[40px] 2xl:py-[50px] px-[28px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[78px] mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[77px] w-full'>
                          <div className='flex flex-col items-center justify-center gap-[6px] md:gap-[9.4px]'>
                            <h2 className='locedmaring text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[31px]'>$2.82M Locked</h2>
                            <p className='projctsvalue text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17.233px]'>985 projects</p>
                          </div>
                          <div className='linerone h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[97.133px]'></div>
                          <div className='flex flex-col items-center justify-center gap-[6px] md:gap-[9.4px]'>
                            <h2 className='locedmaring text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[31px]'>$2.82M Locked</h2>
                            <p className='projctsvalue text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17.233px]'>985 projects</p>
                          </div>
                          <div className='linerone h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[97.133px]'></div>
                          <div className='flex flex-col items-center justify-center gap-[6px] md:gap-[9.4px]'>
                            <h2 className='locedmaring text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[31px]'>$2.82M Locked</h2>
                            <p className='projctsvalue text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17.233px]'>985 projects</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default HeroPage;