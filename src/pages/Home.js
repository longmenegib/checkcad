import React from 'react'
import Calltoaction from '../components/Calltoaction'
import Footer from '../components/footer'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import Products from '../components/Products'
import SLider from '../components/SLider'
import CheckModal from '../components/CheckModal'
import PageLoading from '../components/PageLoading'
import Carousel from '../components/Carousel'
import Meet from '../components/Meet'

export default function Home() {
  return (
    <div>
        <Header />
        
        {/* <SLider /> */}

        <Calltoaction />
        
        <Products />
        
        <Testimonial />

        <Meet />

        {/* <PageLoading/> */}

        {/* <div className="w-screen flex justify-center">
        <Carousel />
       </div> */}

        <Footer />
    </div>
  )
}
