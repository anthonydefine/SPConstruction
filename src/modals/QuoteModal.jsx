import React from 'react'
import { Button, Label, Modal, TextInput, Textarea, Spinner, Alert, Select } from "flowbite-react";
import { useState } from 'react';
import SubmitAlert from '../components/SubmitAlert';
import { BsCheckCircleFill } from "react-icons/bs";
import { send } from 'emailjs-com';

const QuoteModal = ({ buttonText, buttonSize, buttonClasses }) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const services = [
    "Roofing",
    "Patios",
    "Decks",
    "Garage Floor",
    "Windows",
    "Siding",
    "Other"
  ];

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail('');
    setFullName('');
    setPhone('');
    setMessage('');
    setService('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      fullName,
      email,
      phone,
      message,
      service,
    };

    send(
      'Spire_contact', // Replace with your service ID
      'template_9zkzu3b', // Replace with your template ID
      templateParams,
      'mYlrhrUOK8NtxkPc0' // Replace with your user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false);
        setShowAlert(true);
        onCloseModal(); // Close the modal after submission
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {showAlert && (
        <Alert className="fixed top-24 left-0 right-0 z-50" color="success" onDismiss={() => setShowAlert(false)}>
          Your message has been submitted successfully! Someone from our team will be in touch shortly.
        </Alert>
      )}
      <Button
        onClick={() => setOpenModal(true)}
        size={buttonSize}
        className={`text-sm font-semibold leading-6 ${buttonClasses === 'footer' ? 'bg-transparent text-gray-600 hover:text-gray-800' : ''}`}
      >
        {buttonText}
      </Button>
      <Modal dismissible show={openModal} size="2xl" position="center" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Let us know how we can help you!
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Full Name" />
                </div>
                <TextInput
                  id="name"
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
                  type="email"
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
              <div className="my-4 block">
                <Label htmlFor="service" value="Select a Service" />
              </div>
                <Select
                  id="service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  required
                >
                  <option value="" disabled>Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="How can we help you?" />
                </div>
                <Textarea
                  id="comment"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  rows={4}
                />
              </div>
              <div className="w-full">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner size="sm" className="mr-2" /> Loading...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default QuoteModal