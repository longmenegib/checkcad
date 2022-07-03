import React, { useState } from "react";
import './pageloading.css'

import { ThreeDots } from  'react-loader-spinner'

export default function PageLoading({showloadModal, saveFile}) {

    const startProcessing=()=>{
         
        saveFile();
        
    }
  return (
    <>
    <button
      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      onClick={() => startProcessing()}
    >
      Submit
    </button>
    {showloadModal ? (
      <>
        <div className="pagee flex justify-center items-center overflow-x-hidden overflow-y-none fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-auto max-w-3xl flex justify-center items-center">
            {/* <div className="flex justify-center items-center">
                <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> */}

            <ThreeDots
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
          </div>
        </div>
      </>
    ) : null}
  </>
  )
}
