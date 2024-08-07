import React from 'react'
import { Alert } from 'flowbite-react'
import { BsCheckCircleFill } from "react-icons/bs";

const SubmitAlert = () => {
  return (
    <Alert className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center" color="success" onDismiss={() => alert('Alert dismissed!')}>
      <BsCheckCircleFill />
      <span>
        Your message has been submitted successfully! Someone from our team will be in touch shortly.
      </span> 
    </Alert>
  )
}

export default SubmitAlert