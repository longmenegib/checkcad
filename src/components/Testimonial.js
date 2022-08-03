import React from 'react'
import './testimonial.css'


export default function Testimonial() {
  return (
    <section class="relative pt-24 pb-32 overflow-hidden">
  <div class="container mx-auto px-4">
    <h2 class="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">2k+ Happy Clients</h2>
    <p class="mb-16 text-base max-w-md mx-auto text-center text-gray-600">What our customers say about us.</p>
    <div class="flex flex-wrap -m-5">
      <div class="w-full md:w-1/3 p-5">
        <div class="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div class="h-full px-7 py-8 bg-white rounded-lg">
            <img class="mb-8" src="gradia-assets/images/testimonials/avatar.png" alt=""/>
            <p class="mb-8 text-lg text-gray-900">&ldquo;You made it so simple. Bying gift cards product for my daughter is just made easy. She can listen to apple music with the apple giftcard i bought from you.&rdquo;</p>
            <h3 class="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
            <p class="text-sm text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-5">
        <div class="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
          <div class="h-full px-7 py-8 bg-white rounded-lg">
            <img class="mb-8" src="gradia-assets/images/testimonials/avatar2.png" alt=""/>
            <p class="mb-8 text-lg text-gray-900">&ldquo;Simply the best. Better than all the rest. I&rsquo;d recommend this product to beginners and advanced users.&rdquo;</p>
            <h3 class="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
            <p class="text-sm text-gray-600">Accountant</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-5">
        <div class="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div class="h-full px-7 py-8 bg-white rounded-lg">
            <img class="mb-8" src="gradia-assets/images/testimonials/avatar3.png" alt=""/>
            <p class="mb-8 text-lg text-gray-900">&ldquo;I recommend this platform to eveyone out there. Faster to check and authenticate Card in less than 30 seconds.&rdquo;</p>
            <h3 class="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
            <p class="text-sm text-gray-600">Business Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
