import React from 'react'
import iko from '../assets/logocloud/ikologo.svg';
import owens from '../assets/logocloud/ownensnew.png';
import certaineed from '../assets/logocloud/certaineed.svg';

const LogoCloud = () => {
  return (
    <>
      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className='bg-slate-200 p-3 rounded-lg hover:bg-blue-300'>
              <img
                alt="Certaineed"
                src={certaineed}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </div>
            <div className='bg-slate-200 p-3 rounded-lg hover:bg-blue-300 flex justify-center'>
              <img
                  alt="Transistor"
                  src={owens}
                  className="col-span-2 max-h-12 object-contain lg:col-span-1"
                />
            </div>
            <div className='bg-slate-200 p-3 rounded-lg hover:bg-blue-300'>
              <img
                alt="IKO"
                src={iko}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoCloud