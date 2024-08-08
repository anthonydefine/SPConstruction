import React from 'react'
import { Footer } from "flowbite-react";
import QuoteModal from '../modals/QuoteModal';
import AboutUsModal from '../modals/AboutUsModal';

const FooterComponent = () => {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Spire Point Construction™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#home">Home</Footer.Link>
        <Footer.Link href="#">
          <AboutUsModal visual="footer" />
        </Footer.Link>
        <Footer.Link href="#services">Services</Footer.Link>
        <Footer.Link href="#">
          <QuoteModal buttonText="Contact" buttonClasses="footer" />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterComponent