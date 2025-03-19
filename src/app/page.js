"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Avatar} from '@mui/material';

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll event to show or hide the scroll to top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
{/* hero section */}
<section id='home' className="bg-gray-900 pt-16">

{/* <button onClick={scrollToAbout} className='text-gray-300'>about</button> */}

    <Swiper 
        spaceBetween={30}
        slidesPerView={1} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: false,
        }} 
        loop={true} 
        modules={[Autoplay]} 
        className="mySwiper"
    >
        <SwiperSlide>
            <div className="grid max-w-screen-xl px-4 pt-10 md:pt-4 pb-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-6">
                <div className="place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-3 md:mb-8 text-lg md:text-2xl font-semibold leading-none tracking-tight text-gray-300 dark:text-gray-300">Transform Your Ideas into Software Solutions</h1>
                    <h1 className="max-w-2xl mb-8 text-2xl font-extrabold leading-none tracking-tight md:text-5xl text-gray-300 dark:text-gray-300">Innovative Development with UDZSW Solutions</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">Our expert team crafts tailored software solutions that drive your business forward.</p>
                    <div>
                      <PopupModal/>
                    </div>
                </div>
                <div className="lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end md:order-2 py-5 md:py-0">
                    <img className='rounded-lg h-96 lg:h-[500px] cursor-pointer my-2' src="./images/heroimg1.png" alt="hero image" />
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="grid max-w-screen-xl px-4 pt-10 md:pt-4 pb-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-6">
                <div className="place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-3 md:mb-8 text-lg md:text-2xl font-semibold leading-none tracking-tight text-gray-300 dark:text-gray-300">Elevate Your Business with Tailored Software</h1>
                    <h1 className="max-w-2xl mb-8 text-2xl font-extrabold leading-none tracking-tight md:text-5xl text-gray-300 dark:text-gray-300">Customized Solutions for Every Challenge</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-50">We provide end-to-end software development services that adapt to your specific needs.</p>
                    <PopupModal/>
                </div>
                <div className="lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end py-5 md:py-0">
                    <img className='rounded-lg h-96 lg:h-[500px] cursor-pointer my-2' src="./images/heroimg2.png" alt="hero image" />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</section>



{/* About Section */}
<section ref={aboutRef} id='aboutsection' className="bg-gray-900">
  <div className="max-w-screen-xl px-4 py-6 mx-auto lg:py-6 lg:px-6">
    
    {/* Section Heading */}
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold leading-none tracking-tight md:text-3xl text-gray-300 mb-6">
      Custom Software Solutions Built for Your Business Needs
      </h2>
      <p className="text-lg font-light text-gray-300 dark:text-gray-50 lg:text-xl lg:px-36">
      Empowering businesses with cutting-edge technology and customized software solutions. From dynamic web applications to enterprise software, we design, develop, and deploy solutions that drive growth and enhance operational efficiency.
      </p>
    </div>

    {/* Section Content */}
    <div className="lg:flex lg:gap-16 lg:mt-10">
      
      {/* Left Content in Card */}
      <div 
      // className="lg:w-1/2 space-y-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200"
      className="self-center lg:w-1/2 space-y-6 p-6 block"
              >
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center lg:items-start p-6 rounded-xl border border-gray-800 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <strong className="text-3xl font-bold text-gray-300">12+</strong>
            <span className="text-gray-50 font-medium">Satisfied Clients</span>
          </div>
          <div className="flex flex-col items-center lg:items-start p-6 rounded-xl border border-gray-800 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <strong className="text-3xl font-bold text-gray-300">20+</strong>
            <span className="text-gray-50 font-medium">Completed Projects</span>
          </div>
          <div className="flex flex-col items-center lg:items-start p-6 rounded-xl border border-gray-800 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <strong className="text-3xl font-bold text-gray-300">10+</strong>
            <span className="text-gray-50 font-medium">Years of Expertise</span>
          </div>
          <div className="flex flex-col items-center lg:items-start p-6 rounded-xl border border-gray-800 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <strong className="text-3xl font-bold text-gray-300">100%</strong>
            <span className="text-gray-50 font-medium">Client Retention</span>
          </div>

          
        </div>
        <div className='grid grid-cols-1'>
          <PopupModal/>
        </div>
      </div>

      {/* Right Content: Image */}
      <div className="lg:w-1/2 flex justify-center md:justify-start items-center mt-8 lg:mt-0">
        <img
          className="rounded-lg shadow-md"
          src="/images/about.png"
          alt="About IT solutions"
        />
      </div>
    </div>
  </div>
</section>


{/* services section */}
<section id='servicessection'>
<Services/>
</section>

{/* Clients Section */}
<section id='clientsection' className="bg-gray-900">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      <p className="text-lg font-medium text-gray-200">Our Esteemed Clients</p>
      <h2 className="mt-3 mb-4 text-2xl font-bold leading-none tracking-tight md:text-3xl text-white">
        Websites We’ve Brought to Life
      </h2>
      <p className="font-light text-gray-400 sm:text-xl">
        We’re proud to partner with industry-leading brands, creating engaging and customized websites that elevate their online presence and drive success. Discover some of the brands that trust us with their web development needs.
      </p>
    </div>

    {/* Client Logos/Partner Section */}
    <div className="grid bg-gray-800 rounded-xl" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <PartnerSection />
    </div>

  </div>
</section>



{/* testimonials section */}
<section id='testimonialsection'>
<TestimonialComponent />
</section>

{/* faq section */}
<section id='faqsection'>
<FAQAccordion/>
</section>

 {/* Scroll to Top Button */}
 {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 bottom-10 animate-bounce hover:animate-none right-10 p-3 rounded-full bg-pink-600 text-gray-300 shadow-xl hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Scroll to top"
        >
         <span className='text-3xl'>↑</span> 
        </button>
      )}

    </>
  );
}




// partners json
const PartnerSection = () => {
    const logos = [
       'TR Technologie Pvt Ltd',
       'TA Technology Pvt Ltd',
       'Cyberton.com',
       'HimaniWorldSoftSol',
       'AdamyaAcademy',
       'DelhiveryBoy',
       'XRide'
    ];

    return(
        <div className="max-w-screen-xl px-4 py-4 mx-auto bg-gray-900 text-center lg:py-4 lg:px-6 overflow-hidden">
                <Swiper 
                spaceBetween={30}
                slidesPerView={3} 
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter:true,
                stopOnLastSlide:false,
                }} 
                loop={true}
                modules={[Autoplay]} 
                className="mySwiper">
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className='flex justify-center items-center self-center bg-gray-300 rounded-lg text-center'>
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px' }}>
                            {/* <img 
                            src={logo} 
                            alt={`Partner logo ${index + 1}`} 
                            style={{ //maxWidth: '100%', maxHeight: '100%',
                            width:'80%',
                            aspectRatio:'3/2',
                            objectFit:'contain',
                            backgroundColor: 'white',
                            }} 
                        /> */}
                        <h3 className='font-extrabold text-2xl text-[#db2778]'>{logo}</h3>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
        </div>
    )
}

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <section className="bg-gray-900 pt-10">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="my-6 text-center lg:mb-8 text-2xl font-bold leading-none tracking-tight md:text-3xl text-gray-300">
          (FAQ&apos;s) Frequently Asked Questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush">
            <div>
              <h3 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  onClick={() => toggleAccordion(1)}
                >
                  <span>What software development services do you offer?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 1 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-300 dark:text-gray-50">
                    We provide a comprehensive range of software development services, including custom web applications, mobile app development, enterprise software, and cloud-based solutions, tailored to meet your unique business needs.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                  onClick={() => toggleAccordion(2)}
                >
                  <span>Can you customize software to fit my business requirements?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 2 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-300">
                    Absolutely! Our team specializes in creating bespoke software solutions, tailored to address specific workflows, business goals, and technical requirements unique to your organization.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-300"
                  onClick={() => toggleAccordion(3)}
                >
                  <span>Do you provide software maintenance and support?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 3 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-300">
                    Yes, we offer ongoing software maintenance and support services to ensure your applications run smoothly, remain secure, and stay updated with the latest technologies.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-300"
                  onClick={() => toggleAccordion(4)}
                >
                  <span>How do I get started with your software development services?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 4 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 4 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-300">
                    Getting started is simple! Reach out to us with your project requirements, and our team will work with you to develop a plan that meets your business needs and objectives.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




// testimonials
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Services from './component/Services';
import PopupModal from './component/PopupModal';
const testimonials = [
  {
    text: "The software solutions developed by UDZSW Solutions have transformed our workflow. Their platform integrates project management and real-time analytics, giving us a seamless experience. It's been a game-changer for our IT infrastructure.",
    name: "Tarannum",
  },
  {
    text: "UDZSW Solutions's customer support is unmatched! Their team consistently goes above and beyond to ensure we have everything we need. I highly recommend their services.",
    name: "Sandeep",
  },
  {
    text: "UDZSW Solutions's innovative approach to Website design and development has given us peace of mind. We feel much more secure and confident in our business operations now.",
    name: "Pramod",
  },
  {
    text: "UDZSW Solutions transformed our outdated website into a modern, responsive platform. Their attention to detail and expertise in UX/UI design made a huge difference. Our customers love the new look!",
    name: "Vikram",
  },
  {
    text: "Working with UDZSW Solutions was a fantastic experience. They understood our vision and delivered a website that perfectly represents our brand. The development process was smooth and collaborative.",
    name: "Anita",
  },
  {
    text: "Thanks to UDZSW Solutions, our website traffic has doubled since the redesign. Their SEO strategies and stunning design have made a significant impact on our business growth.",
    name: "Karan",
  },
  {
    text: "The team at UDZSW Solutions is incredibly talented. They not only designed a beautiful website but also ensured it runs flawlessly. Their ongoing support has been invaluable to our business.",
    name: "Priya",
  },
];


const TestimonialComponent = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <Swiper 
        spaceBetween={30}
        slidesPerView={1} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
          stopOnLastSlide:false,
          }} 
          loop={true} 
        // navigation={true} 
        modules={[Autoplay]} 
        className="mySwiper">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-pink-900 dark:text-pink-900"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-sm font-normal text-gray-300 dark:text-gray-50 md:text-xl">
                    {testimonial.text}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Avatar className='text-gray-50 bg-yellow-600'>{testimonial.name.charAt(0)}</Avatar>
                  <div className="flex items-center divide-x-2 divide-pink-900 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-yellow-600 dark:text-yellow-600">{testimonial.name}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

