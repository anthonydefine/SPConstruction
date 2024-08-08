import { useState } from 'react'
import React from 'react'
import { Modal, Button } from 'flowbite-react'

const AboutUsModal = ({ visual }) => {
  const [openModal, setOpenModal] = useState(false);

  const buttonClasses = visual === 'navigation'
    ? 'block w-full text-left py-2 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
    : visual === 'hero'
      ? 'text-sm font-semibold leading-6 text-white bg-transparent hover:text-gray-300 hover:underline hover:underline-offset-4'
      : 'text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700 hover:underline hover:underline-offset-4';


  const activeClasses = visual === 'navigation'
    ? 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700'
    : '';

  return (
    <>
      <button
        className={`${buttonClasses} ${openModal ? activeClasses : ''}`}
        onClick={() => setOpenModal(true)}
      >
        {visual === 'navigation' ? "About" : "Learn About Us"} <span className={visual === 'navigation' ? "hidden" : ''} aria-hidden="true">→</span>
      </button>
      <Modal dismissible show={openModal} position='center' onClose={() => setOpenModal(false)}>
        <Modal.Header>About our company</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            At Spire Point Construction, we are dedicated to delivering top-notch construction services across Northeast Ohio. 
            Based in Akron, our expertise spans roofing, patios, decks, garage floors, windows, and siding. With a steadfast commitment to quality and a focus on 
            exceeding client expectations, we ensure every project is completed with precision and care. Whether you're looking to enhance your home's curb appeal 
            or undertake a major renovation, our skilled team brings years of experience and a passion for craftsmanship to each job.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Our reputation for excellence is built on the foundation of integrity and reliability. We pride ourselves on being more than just a construction company; 
            we are your partners in creating the perfect space for you and your family. From the initial consultation to project completion, our team works 
            closely with you to bring your vision to life, ensuring every detail is meticulously handled. Serving Akron and the broader Northeast Ohio area, 
            we are committed to transforming your home with unparalleled expertise and a dedication to superior service.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AboutUsModal