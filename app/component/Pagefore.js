'use client'

import React, { useEffect, useRef } from 'react';
import image7 from './image/image7.png';
import next from './image/next.png';
import prev from './image/prev.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Pagefore = () => {
    const titleRef = useRef(null);
  const descRef = useRef(null);
  const swiperContainerRef = useRef(null);

  const slides = Array(4).fill({
    text: "The burgeoning realm of decentralized finance (DeFi) demands security solutions that are both reliable and accessible to sustain its growth and evolution. The security Recognizing this vital need, we introduced CryptEx",
    founder: "Chief Executive Founder",
    name: "Dmitry Mishunin",
    imageSrc: image7,
  });

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // ERROR HERE: swiperContainerRef.current is null when this runs
    const slides = swiperContainerRef.current.querySelectorAll('.swiper-slide');
    slides.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: slide,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

    return (
        <div className='relative px-[24px] sm:px-0'>
            <svg className='absolute top-0 left-1/2 -translate-x-1/2 w-full -z-[1] hidden' viewBox="0 0 1504 1462" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9" filter="url(#filter0_f_1239_282)">
<ellipse cx="755.134" cy="731.383" rx="756.746" ry="76.407" transform="rotate(25.7322 755.134 731.383)" fill="url(#paint0_linear_1239_282)"/>
</g>
<defs>
<filter id="filter0_f_1239_282" x="-322.189" y="0.830688" width="2154.65" height="1461.11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="197.4" result="effect1_foregroundBlur_1239_282"/>
</filter>
<linearGradient id="paint0_linear_1239_282" x1="-1.61169" y1="731.383" x2="1511.88" y2="731.383" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F2AC0"/>
<stop offset="1" stop-color="#8B65FE"/>
</linearGradient>
</defs>
</svg>
            <div className='lineronesthews absolute top-0 left-1/2 -translate-x-1/2 w-full -z-[1] md:block hidden'></div>
            <div className=' pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[90px]'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-[20px] sm:gap-[100px] container mx-auto'>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapital text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[70px] !text-left">
                    Powered by HashEx
                    </div>
                    <p ref={descRef} className='browseaudit flex items-center w-full sm:w-fit text-center sm:text-start gap-[7.83px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15.66px] md:w-[327.433px] !text-[#7F8799]'>HashEx is a leading tech advisory firm in the EMEA region, renowned for its impactful blockchain solutions.
                    </p>
                </div>

                <div ref={swiperContainerRef} className="relative flex justify-center items-center  pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px] w-full">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={22}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: '.custom-next-button', // Custom class for next button
                        prevEl: '.custom-prev-button', // Custom class for prev button
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 28 }, // sm: 2 slides
                        1024: { slidesPerView: 3, spaceBetween: 37 }, // lg: 3 slides
                        1280: { slidesPerView: 3, spaceBetween: 37 }, // xl: 4 slides
                    }}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="solonasection  flex sm:flex-row flex-col items-start justify-between gap-[8px] sm:gap-[11px] lg:gap-[18.2px]">
                        {/* SVG Logo */}
                        <svg
                            className="w-[64px] sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[64px] 2xl:w-[94px] pt-[9.4] pl-[9.4]"
                            viewBox="0 0 95 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M30.1899 15.411H24.1216V13.393H31.7609V11.3749H24.1076C23.5761 11.3749 23.0663 11.586 22.6905 11.9618C22.3147 12.3377 22.1035 12.8475 22.1035 13.379V15.4251C22.1035 15.9566 22.3147 16.4663 22.6905 16.8421C23.0663 17.218 23.5761 17.4291 24.1076 17.4291H30.1758V19.4472H22.2479V21.4653H30.1899C30.7214 21.4653 31.2311 21.2541 31.607 20.8783C31.9828 20.5025 32.1939 19.9927 32.1939 19.4612V17.4151C32.1939 16.8836 31.9828 16.3739 31.607 15.998C31.2311 15.6222 30.7214 15.411 30.1899 15.411Z"
                            fill="url(#paint0_linear_1239_2305)"
                            />
                            <path
                            d="M41.942 11.3748H35.8513C35.5882 11.3748 35.3277 11.4266 35.0845 11.5273C34.8415 11.6281 34.6206 11.7757 34.4347 11.9618C34.2487 12.1479 34.1012 12.3689 34.0006 12.612C33.9001 12.8551 33.8484 13.1157 33.8486 13.3788V19.4611C33.8484 19.7242 33.9001 19.9848 34.0006 20.2279C34.1012 20.4711 34.2487 20.692 34.4347 20.8781C34.6206 21.0642 34.8415 21.2119 35.0845 21.3126C35.3277 21.4134 35.5882 21.4652 35.8513 21.4652H41.942C42.4735 21.4652 42.9832 21.254 43.359 20.8782C43.7349 20.5024 43.946 19.9926 43.946 19.4611V13.3788C43.946 12.8473 43.7349 12.3376 43.359 11.9617C42.9832 11.5859 42.4735 11.3748 41.942 11.3748ZM41.9279 19.4471H35.8737V13.3929H41.9279V19.4471Z"
                            fill="url(#paint1_linear_1239_2305)"
                            />
                            <path
                            d="M63.2571 11.3748H57.3177C56.7859 11.3748 56.2763 11.5859 55.9003 11.9617C55.525 12.3376 55.3135 12.8473 55.3135 13.3788V21.4652H57.3318V18.1493H63.243V21.4652H65.2607V13.3788C65.2614 13.1156 65.2097 12.8549 65.1089 12.6117C65.0082 12.3685 64.8605 12.1474 64.6745 11.9613C64.4885 11.7752 64.267 11.6275 64.0239 11.5269C63.7809 11.4263 63.5203 11.3746 63.2571 11.3748ZM63.243 16.1313H57.3318V13.3929H63.243V16.1313Z"
                            fill="url(#paint2_linear_1239_2305)"
                            />
                            <path
                            d="M86.8861 11.3748H80.9487C80.6848 11.3742 80.4236 11.4257 80.1799 11.5261C79.9368 11.6265 79.7153 11.7741 79.5286 11.9602C79.3419 12.1464 79.1942 12.3675 79.0928 12.6109C78.9921 12.8544 78.9404 13.1153 78.9404 13.3788V21.4652H80.9581V18.1493H86.872V21.4652H88.8903V13.3788C88.8903 12.8473 88.6795 12.3376 88.3035 11.9617C87.9275 11.5859 87.4179 11.3748 86.8861 11.3748ZM86.872 16.1313H80.9621V13.3929H86.872V16.1313Z"
                            fill="url(#paint3_linear_1239_2305)"
                            />
                            <path
                            d="M75.1312 19.4472H74.3241L71.4316 12.2158C71.3322 11.9676 71.161 11.7549 70.9401 11.605C70.7192 11.4551 70.458 11.3749 70.1908 11.3749H68.3941C68.0402 11.3749 67.7005 11.5156 67.45 11.7661C67.1996 12.0166 67.0586 12.3562 67.0586 12.7105V21.4653H69.0769V13.393H69.884L72.7751 20.6244C72.8738 20.8725 73.0444 21.0853 73.2653 21.2353C73.4862 21.3852 73.7474 21.4653 74.0139 21.4653H75.8107C76.1652 21.4653 76.5049 21.3246 76.7554 21.0741C77.0058 20.8236 77.1461 20.4839 77.1461 20.1297V11.3749H75.1285L75.1312 19.4472Z"
                            fill="url(#paint4_linear_1239_2305)"
                            />
                            <path
                            d="M47.7524 11.3749H45.7344V19.4612C45.7344 19.9927 45.9455 20.5025 46.3213 20.8783C46.6972 21.2541 47.2069 21.4653 47.7385 21.4653H53.8067V19.4472H47.7524V11.3749Z"
                            fill="url(#paint5_linear_1239_2305)"
                            />
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.78113 19.0688C7.81698 19.03 7.86029 18.9988 7.90843 18.9772C7.95657 18.9555 8.00861 18.9438 8.06145 18.9427H16.8681C16.9054 18.9432 16.9417 18.9545 16.9727 18.9752C17.0037 18.9959 17.028 19.0251 17.0429 19.0592C17.0577 19.0934 17.0623 19.1312 17.0562 19.1679C17.05 19.2047 17.0333 19.2389 17.0082 19.2664L15.1415 21.3391C15.1057 21.378 15.0624 21.4091 15.0142 21.4308C14.9661 21.4525 14.914 21.4642 14.8613 21.4653H6.04898C6.01171 21.4648 5.97539 21.4535 5.94437 21.4328C5.91335 21.4121 5.88897 21.3829 5.8742 21.3487C5.85936 21.3146 5.8548 21.2768 5.86091 21.24C5.86709 21.2033 5.88367 21.1691 5.90878 21.1415L7.78113 19.0688ZM17.0167 17.3507C17.0418 17.3782 17.0584 17.4124 17.0646 17.4492C17.0707 17.4859 17.0661 17.5236 17.0513 17.5579C17.0365 17.592 17.0121 17.6212 16.9811 17.6419C16.9501 17.6626 16.9138 17.6739 16.8765 17.6744L8.06702 17.6814C8.01425 17.6803 7.96221 17.6686 7.914 17.6469C7.86586 17.6252 7.82255 17.5941 7.78677 17.5552L5.90603 15.4895C5.88092 15.462 5.86427 15.4278 5.85809 15.391C5.85198 15.3543 5.85661 15.3166 5.87138 15.2823C5.88622 15.2481 5.91059 15.2189 5.94155 15.1983C5.97257 15.1776 6.00889 15.1663 6.04616 15.1658L14.8556 15.1588C14.9084 15.1599 14.9605 15.1716 15.0087 15.1933C15.0568 15.2149 15.1001 15.2461 15.136 15.2849L17.0167 17.3507ZM7.78113 11.501C7.81698 11.4622 7.86029 11.431 7.90843 11.4094C7.95657 11.3877 8.00861 11.376 8.06145 11.3749L16.8737 11.3819C16.911 11.3824 16.9473 11.3937 16.9783 11.4144C17.0093 11.435 17.0337 11.4642 17.0485 11.4984C17.0633 11.5327 17.0679 11.5704 17.0617 11.6071C17.0556 11.6439 17.039 11.6781 17.0139 11.7056L15.1415 13.7713C15.1057 13.8101 15.0624 13.8413 15.0142 13.863C14.9661 13.8847 14.914 13.8964 14.8613 13.8975H6.04898C6.01171 13.897 5.97539 13.8857 5.94437 13.865C5.91335 13.8443 5.88897 13.8151 5.8742 13.7809C5.85936 13.7468 5.8548 13.709 5.86091 13.6722C5.86709 13.6354 5.88367 13.6013 5.90878 13.5737L7.78113 11.501Z"
                            fill="url(#paint6_linear_1239_2305)"
                            />
                            <defs>
                            <linearGradient
                                id="paint0_linear_1239_2305"
                                x1="27.1487"
                                y1="11.3749"
                                x2="27.1487"
                                y2="21.4653"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_1239_2305"
                                x1="38.8973"
                                y1="11.3748"
                                x2="38.8973"
                                y2="21.4652"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_1239_2305"
                                x1="60.2871"
                                y1="11.3748"
                                x2="60.2871"
                                y2="21.4652"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_1239_2305"
                                x1="83.9154"
                                y1="11.3748"
                                x2="83.9154"
                                y2="21.4652"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_1239_2305"
                                x1="72.1024"
                                y1="11.3749"
                                x2="72.1024"
                                y2="21.4653"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_1239_2305"
                                x1="49.7705"
                                y1="11.3749"
                                x2="49.7705"
                                y2="21.4653"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear_1239_2305"
                                x1="11.4613"
                                y1="11.3749"
                                x2="11.4613"
                                y2="21.4653"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4E27BC" />
                                <stop offset="1" stopColor="#A68AF9" />
                            </linearGradient>
                            </defs>
                        </svg>
                        {/* Text and Founder Info */}
                        <div className="buggningsec p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[18.8px]">
                            <p className="browseaudit flex items-center gap-[7.83px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15.66px] sm:w-[230px] md:w-[270px] lg:w-[250px] xl:w-[280px] 2xl:w-[327.433px] !text-[#B4BBCC]">
                            {slide.text}
                            </p>
                            <div className="flex items-center pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[62px] gap-[9.4px]">
                            <Image
                                className="w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[47px]"
                                src={slide.imageSrc}
                                alt="Dmitry Mishunin"
                                width={47}
                                height={47}
                            />
                            <div className="flex flex-col gap-[4px]">
                                <p className="chieffounder text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px]">
                                {slide.founder}
                                </p>
                                <h3 className="dmitrymishni text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15.66px]">
                                {slide.name}
                                </h3>
                            </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                
                </div>
                <div className='flex items-center justify-center gap-[18px] mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[47px]'>
                    <div className="custom-next-button cursor-pointer w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[62px]">
                        <Image src={next} alt='loading..'/>
                    </div>
                    <div className="custom-prev-button cursor-pointer w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[62px]">
                        <Image src={prev} alt='loading..'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagefore;