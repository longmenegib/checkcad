import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import HeaderWithoutSlide from '../components/HeaderWithoutSlide'
import Products from '../components/Products'
import Search from '../components/Search'

export default function ProductPage() {
  return (
    <div>
        <HeaderWithoutSlide />

        <Search />
        
         <div className='container px-5 py-2 mx-auto lg:pt-4 lg:px-32'>
            <span className="block text-3xl font-extrabold text-indigo-600">View All Our Products</span>
        </div>
        
        <Products />
    
        <Footer />
    </div>
  )
}
