import React from 'react'
import { Card, Button } from 'flowbite-react'
import deck from '../assets/services/deck.jpeg'
import patio from '../assets/services/patio.jpeg'
import roof from '../assets/services/roof.jpeg'
import garagefloor from '../assets/services/garagefloor.jpeg'
import windows from '../assets/services/windows.jpeg'
import siding from '../assets/services/siding.jpeg'
import QuoteModal from '../modals/QuoteModal'

const servicesArr = [
  {id: 1, title: "Roofing Excellence", desc: "Ensure the safety and longevity of your home with our premium roofing solutions. Our expert team guarantees durable and stylish roofs that stand the test of time.", img: roof},
  {id: 2, title: "Siding Solutions", desc: "Protect and beautify your home with our durable siding options. Our high-quality materials and expert craftsmanship ensure your home looks its best.", img: siding},
  {id: 3, title: "Windows with a View", desc: "Brighten your home with our energy-efficient and aesthetically pleasing windows. Our range ensures superior light, insulation, and style.", img: windows},
  {id: 4, title: "Patios Perfected", desc: "Transform your outdoor space into a serene retreat with our custom patio designs. Enjoy elegance and functionality with every installation.", img: patio},
  {id: 5, title: "Decks Designed for Living", desc: "Enhance your outdoor living area with our beautiful and sturdy decks. Whether for relaxation or entertaining, our decks are built to impress.", img: deck},
  {id: 6, title: "Garage Floor Innovations", desc: "Upgrade your garage with our top-quality flooring options. Our solutions offer durability and style, making your garage a functional extension of your home.", img: garagefloor},
]

const Services = () => {
  return (
    <div className='min-h-screen px-6 py-24 flex flex-col justify-center'>
      <div className='my-6 flex flex-col justify-center gap-2'>
        <h2 className='text-6xl font-bold text-center'>Our Popular Services</h2>
        <p className='md:px-24 text-center font-light my-2'>Explore our most sought-after services designed to enhance your home. Whether it's durable roofing, elegant patios, or energy-efficient windows, we bring quality craftsmanship to every project. Trust Spire Point Construction to deliver style and functionality that lasts.</p>
        <span className='text-center mx-auto'>
          <QuoteModal buttonText='Start a Project' />
        </span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto'>
        {servicesArr.map((service) => (
          <Card key={service.id} className=" hover:shadow-xl" imgSrc={service.img} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {service.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services