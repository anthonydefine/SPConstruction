import React from 'react';
import { motion } from "framer-motion";
import { Banner, Button } from 'flowbite-react';
import { BsTelephoneForward, BsChatRightDots } from 'react-icons/bs';
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import heroroofer from '../assets/hero-roofer.png'; // Adjust the path to your image
import QuoteModal from '../modals/QuoteModal';
import AboutUsModal from '../modals/AboutUsModal';
import ContactForm from '../components/ContactForm';
import LogoCloud from '../components/LogoCloud';
import Services from '../sections/Services';

const phoneNumber = '3308001270'; // Replace with your desired phone number
  const message = 'Hello, I am interested in your services.';

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
      <section id="home" className="relative flex flex-col lg:flex-row text-slate-50">
        {/* Overlay for the image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <img src={heroroofer} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        </div>
        <div className="flex w-full">
          <motion.div
            className="flex flex-grow items-center justify-center w-full h-full relative px-6 py-24 lg:py-48 text-center lg:text-left lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative z-10 mx-auto max-w-2xl">
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Spire Point Construction
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-slate-300 indent-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                With over <strong>15 years</strong> of industry experience, our mission is to deliver exceptional quality in roofing, siding, and all exterior projects. We are dedicated to building lasting relationships through integrity, craftsmanship, and innovative solutions that enhance the value and beauty of every property we touch.
              </motion.p>
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <span className="lg:hidden">
                  <QuoteModal buttonText="Start a Project" />
                </span>
                <a className="hidden lg:block" href={`sms:${phoneNumber}?&body=${encodeURIComponent(message)}`}>
                  <Button>
                    <BsChatRightDots className="mr-2 h-4 w-4" />
                    Send us a message
                  </Button>
                </a>
                <AboutUsModal visual="hero" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="hidden lg:flex lg:w-1/3 lg:my-6 lg:mr-2 p-6 rounded-lg relative items-center justify-center bg-slate-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <ContactForm />
          </motion.div>
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
