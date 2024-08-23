import React from 'react'
import { Footer } from "flowbite-react";
import QuoteModal from '../modals/QuoteModal';
import AboutUsModal from '../modals/AboutUsModal';

const FooterComponent = () => {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Spire Point Construction™" year={2024} />
    </Footer>
  )
}

export default FooterComponent