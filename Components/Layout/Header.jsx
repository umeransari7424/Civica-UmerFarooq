import React from 'react'
import {BiShoppingBag} from "react-icons/bi"

function Header() {
  return (
    <div className='header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid px-5 ">
    <div className='d-flex'>

        <div>
            <img src="Assets/Group 3055.png" className='img-fluid' style={{width:"50px"}} alt="not found" />
        </div>
        &nbsp; &nbsp; 
        <div>
          <img src="Assets/ZIMO B.png" className='img-fluid zim' style={{width:"135px"}} alt="not found" />
        </div>
           &nbsp; &nbsp; 
        <div>
          <h6 className='our mt-3'>OUR PARTNERSHIP</h6>
        </div>
          
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
          <img src="Assets/ZIMO ZIG B.png" className='img-fluid' style={{width:"130px"}} alt="not found" />
          </a>
        </li>
      </ul>
     
    </div>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
        <div className='d-flex'>
            <div className='text-end mt-2'>
                <span className='london'>
                17:23 LONDON UNITED KINGDOM
                </span> 
                <span className='london'>
                SUNDAY,12 FEBRUARY 2023
                </span>

            </div> &nbsp; &nbsp;
            <div>
                <img src="Assets/flag.png " className='img-fluid mt-3' style={{width:"30px"}} alt="not found" />
            </div>
        </div>
        </li>
        &nbsp; &nbsp; &nbsp; 
        <li className="nav-item">
        <img src="Assets/Path 7582.png" className='img-fluid mt-2' alt="" />
        </li>
        &nbsp; &nbsp;  &nbsp; 
        <li className="nav-item">
        <img src="Assets/Group 2867.png" className='img-fluid mt-2' alt="" />
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    </div>
  )
}

export default Header