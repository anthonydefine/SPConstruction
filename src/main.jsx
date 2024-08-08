import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'
import InactivityModal from './modals/InactivityModal.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col min-h-screen bg-slate-50'>
      <div className='m-4'>
        <Nav />
      </div>
      <Home />
      {/*
      <InactivityModal />
      */}
      <FooterComponent />
    </div>
  </React.StrictMode>,
)
