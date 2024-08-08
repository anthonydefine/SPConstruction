import React from 'react';
import { Banner } from 'flowbite-react';
import { BsTelephoneForward } from 'react-icons/bs';
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import heroroofer from '../assets/hero-roofer.png'; // Adjust the path to your image
import QuoteModal from '../modals/QuoteModal';
import AboutUsModal from '../modals/AboutUsModal';
import LogoCloud from '../components/LogoCloud';
import Services from '../sections/Services';

const HeroSection = () => {
  return (
    <>
      <Banner className='lg:hidden'>
        <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <BsTelephoneForward className="mr-4 h-4 w-4" />
              <span className="[&_p]:inline text-xs">
                Ready to get in touch with our team directly?&nbsp;
                <a
                  href="tel:330-800-1279"
                  className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
                >
                  330-800-1279
                </a>
              </span>
            </p>
          </div>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>
      <section id='home' className="relative flex flex-col lg:flex-row text-slate-50">
  {/* Overlay for the image */}
  <div className="absolute inset-0 hidden lg:block">
    <div className="relative w-full h-full">
      <img
        src={heroroofer}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
    </div>
  </div>

  <div className="flex flex-grow items-center justify-center w-full h-full relative px-6 py-24 lg:py-48 text-center lg:text-left lg:w-2/3">
    <div className="relative z-10 mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Spire Point Construction
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-300 indent-3">
        With over <strong>15 years</strong> of industry experience, our mission is to deliver exceptional quality in roofing, siding, and all exterior projects. We are dedicated to building lasting relationships through integrity, craftsmanship, and innovative solutions that enhance the value and beauty of every property we touch.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <QuoteModal buttonText='Start a Project' />
        <AboutUsModal visual='hero' />
      </div>
    </div>
  </div>

  {/* Hide the image on small screens and show it on large screens */}
  <div className="absolute inset-0 lg:hidden">
    <div className="relative w-full h-full">
      <img
        src={heroroofer}
        alt="Hero"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
    </div>
  </div>
</section>

      <LogoCloud />
      <section id='services'>
        <Services />
      </section>
      <section id='testimonials'>

      </section>
    </>
  );
};

export default HeroSection;
