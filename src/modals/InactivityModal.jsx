import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'flowbite-react';

const InactivityModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const TIMEOUT = 30000; // 30 seconds of inactivity

  useEffect(() => {
    // Function to open the modal
    const openModal = () => {
      setIsModalOpen(true);
    };

    // Function to reset the inactivity timer
    const resetTimer = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const id = setTimeout(openModal, TIMEOUT);
      setTimeoutId(id);
    };

    // Add event listeners for user activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);

    // Cleanup event listeners and timeout
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <Modal.Header>
          Inactivity Warning
        </Modal.Header>
        <Modal.Body>
          <p>You have been inactive for a while. Is there anything we can help you with?</p>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InactivityModal;
