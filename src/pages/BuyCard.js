import React, {useState} from 'react'
import Header from '../components/Header'
import HeaderWithoutSlide from '../components/HeaderWithoutSlide'
import { useNavigate, useLocation } from 'react-router-dom';
import './pay.css';

import {
    Elements,
    CardElement,
    useStripe,
    useElements,
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";


  const Payment = () => {
    const stripe = loadStripe(
      "pk_test_51HlWUkGbWvurqLH54ySvZtinEGSqHvi9LFF00noojB7a0MEndFLtn0dWhVNrOgRu4dp7UYo8dZxglS5Wab6ljoky00K4Sls2m0"
    );
  
    const location = useLocation();
    const { order } = location.state || {};
   
    return (
      <Elements stripe={stripe}>
        <CheckoutForm order={order}/>
      </Elements>
    );
  };
  function CheckoutForm({order}) {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    
  
    const payMoney = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      setPaymentLoading(true);
      const  { paymentMethod, error } = await stripe.createPaymentMethod({
        type:'card',
        card: elements.getElement(CardElement),
      });
  
      
      if (error) {
          alert(`Error code: ${error.code}`, error.message);
          setPaymentLoading(false);
          return;
        }
        if (!paymentMethod) {
          setPaymentLoading(false);
          return;
        }
  
        if(paymentMethod){
          
          console.log("this is the payment method: ", paymentMethod);
         
        
      }
    };
  
    return (
      <div
        style={{
          padding: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <form
            style={{
              display: "block",
              width: "100%",
            }}
            onSubmit = {payMoney}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardElement
                className="card"
                options={{
                  style: {
                    base: {
                      backgroundColor: "white"
                    } 
                  },
                }}
              />
              {/* <button
                className="pay-button"
                disabled={isPaymentLoading}
              >
                {isPaymentLoading ? "Loading..." : "Pay now"}
              </button> */}
            </div>
          </form>
        </div>
      </div>
    );
  }

export default function BuyCard() {
  return (
    <div>
        <HeaderWithoutSlide/>
         <div class="mt-20">
            <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">Fill the
            Informations below to buy your gift card
            </h1>
        </div>
        <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Order Details
                    </h2>
                    <form class="justify-center w-full mx-auto" method="post" action>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="Last Name" type="text" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            {/* <div class="mt-4">
                                <div class="w-full">
                                    <label for="Address"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div> */}
                            {/* <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="city"
                                        class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span class="ml-2">Save this information for next time</span></label>
                            </div> */}
                            <Payment />
                            <div class="mt-4">
                                <button
                                    class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <h2 class="text-xl font-bold">GiftCards Summary
                        </h2>
                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">
                                <div class="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image"
                                            class="w-60"/>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Title</h2>
                                        <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span class="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/collection/190727/1600x900" alt="image"
                                            class="w-60"/>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Title</h2>
                                        <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span class="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex p-4 mt-4">
                            <h2 class="text-xl font-bold">ITEMS 2</h2>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span class="ml-2">$40.00</span></div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span class="ml-2">$10</span></div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span class="ml-2">$50.00</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
