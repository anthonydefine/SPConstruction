import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { BsTelephoneForward } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar id='navbar' fluid className="sticky top-0 bg-slate-700 text-slate-50 shadow-md z-10 rounded-lg w-full">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Spire Point Construction
          </span>
        </Navbar.Brand>
        <div className="flex items-center md:order-2 space-x-4">
          <Button>Get a Quote</Button>
          <a
            href="tel:555-666-7777"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <BsTelephoneForward className="mr-2 h-5 w-5" />
            Call us now
          </a>
        </div>
      </Navbar>
    </div>
  )
}

export default Nav