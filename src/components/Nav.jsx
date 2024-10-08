import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { BsTelephoneForward } from "react-icons/bs";
import QuoteModal from '../modals/QuoteModal';
import AboutUsModal from '../modals/AboutUsModal';
import navlogo from '../assets/mainlogo/logoshape.png';

const Nav = () => {
  return (
    <div className="relative w-full overflow-hidden shadow-lg rounded-lg">
      <Navbar id='navbar' fluid className="sticky top-0 bg-slate-50 text-slate-900 shadow-xl z-10 w-full border-b-2">
        <Navbar.Brand>
          <img src={navlogo} className="mr-3 h-4 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xs md:text-xl font-semibold dark:text-white">
            Spire Point Construction
          </span>
        </Navbar.Brand>
        <div className="flex items-center md:order-2 space-x-4">
          <span className='hidden lg:block'>
            <QuoteModal buttonText='Free Quote' buttonSize='md' />
          </span>
          <a
            href="tel:330-800-1270"
            className="hidden lg:inline-flex items-center border border-transparent px-4 py-2 text-sm font-semibold text-slate-900 rounded-md shadow-sm hover:border hover:border-black"
          >
            <BsTelephoneForward className="mr-2 h-5 w-5" />
            <span className='hidden md:block font-bold'>
              330-800-1270
            </span>
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#home" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">
            <AboutUsModal visual='navigation' />
          </Navbar.Link>
          <Navbar.Link href="#services">Services</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Nav