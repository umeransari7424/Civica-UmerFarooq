import React from 'react'
import {HiOutlineArrowLeft} from "react-icons/hi"
// import {SlArrowDown} from "react-icons/si"

function Hero() {
  return (
    <div className='hero'>
        <div className="container-fluid px-5 py-4 text-center">
            <div className='text-start'>
                <span>
                <HiOutlineArrowLeft size={"20px"}/> &nbsp;Back 
                </span>
            </div>
            
            <div className='civica'>
                <img src="Assets/Group 3285.png" className='img-fluid mt-5' style={{width:"500px"}} alt="not found" />
            </div>
            <br />
            <div className='years'>
                <h4>30 YEARS OF EXPERIENCE</h4>
                <h1>EXPERTISE</h1>
            </div>
            <div className='years'>
                <p>MORE ABOUT OUR PARTNER </p>
            </div> <br />
            <div>
                <img src="Assets/Path 59.png" className='img-fluid' style={{width:"60px"}} alt="not found" />
            </div>
        </div>
    </div>
  )
}

export default Hero