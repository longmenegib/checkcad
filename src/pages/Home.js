import React from 'react'
import Calltoaction from '../components/Calltoaction'
import Footer from '../components/footer'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import Products from '../components/Products'
import SLider from '../components/SLider'
import CheckModal from '../components/CheckModal'
import PageLoading from '../components/PageLoading'

export default function Home() {
  return (
    <div>
        <Header />
        
        {/* <SLider /> */}

        <Calltoaction />
        
        <Products />
        
        <Testimonial />

        {/* <PageLoading/> */}
        
        <Footer />
    </div>
  )
}
