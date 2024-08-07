import React from 'react';
import { BsTelephoneForward } from 'react-icons/bs';
import heroroofer from '../assets/hero-roofer.png'; // Adjust the path to your image
import QuoteModal from '../modals/QuoteModal';
import LogoCloud from '../components/LogoCloud';
import Services from '../sections/Services';

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50">
        <div className="flex flex-grow items-center justify-center w-full h-full relative px-6 py-32 lg:py-48 text-center lg:text-left lg:w-2/3">
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-900 ring-1 ring-gray-700 hover:ring-gray-500">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-900">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <QuoteModal buttonText='Start a Project' />
              <a href="#" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700 hover:underline hover:underline-offset-4">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 relative px-6 py-32 lg:py-40 items-center">
          <img
            src={heroroofer}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <LogoCloud />
      <Services />
    </>
  );
};

export default HeroSection;
