import React from 'react'
import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <Footer container className='bg-slate-900'>
      <Footer.Copyright href="#" by="Spire Point Construction™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterComponent