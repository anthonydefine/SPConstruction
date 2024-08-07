import React from 'react'
import { Button, Label, Modal, TextInput, Textarea, Spinner, Alert } from "flowbite-react";
import { useState } from 'react';
import SubmitAlert from '../components/SubmitAlert';
import { BsCheckCircleFill } from "react-icons/bs";

const QuoteModal = ({ buttonText, buttonSize }) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  function onSubmit() {
    setIsLoading(true);

    // Simulate an API call or other logic
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      onCloseModal(); // Close the modal after submission
    }, 2000);
  }

  return (
    <>
      {showAlert && (
        <Alert className="fixed top-24 left-0 right-0 z-50" color="success" onDismiss={() => setShowAlert(false)}>
          Your message has been submitted successfully! Someone from our team will be in touch shortly.
        </Alert>
      )}
      <Button onClick={() => setOpenModal(true)} size={buttonSize}>{buttonText}</Button>
      <Modal dismissible show={openModal} size="2xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Let us know how we can help you!</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
              </div>
              <TextInput
                id="email"
                placeholder="John Doe"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <div className="my-4 block">
                <Label htmlFor="phone" value="Your Phone Number" />
              </div>
              <TextInput
                id="phone"
                placeholder="123-9090-4345"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
            <div className="mb-2 block">
              <Label htmlFor="comment" value="How can we help you?" />
            </div>
            <Textarea id="comment" htmlFor='comment' value={message} onChange={(event) => setMessage(event.target.value)} required rows={4} />
            </div>
            <div className="w-full">
              <Button onClick={onSubmit} disabled={isLoading}>
                {isLoading ?
                <>
                  <Spinner size="sm" className="mr-2" /> Loading...
                </> :
                'Submit'
                }
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  )
}

export default QuoteModal