import React from 'react'
import $ from 'jquery'
import './Modal.css'

export default function Modal(img) {
   

  
    return (
        <div className='big-card'>
          <div className="back-layer"></div>
            <div className="card py-4 text-center container">
                <div className='close-btn'><i class="fa-solid fa-xmark fa-4x fw-bolder pe-2"></i></div>
                <h2 className="card-title pt-5">LOG CABIN</h2>
                <div className="divider">
                <div className="divider-line text-white"></div>
                <div className="divider-icon"><i class="fa-solid fa-star"></i></div>
                <div className="divider-line"></div>
            </div>
                <img src={"./images/cabin.png"} className="card-img-top rounded mb-5 pt-3"/>
                    <div className="card-body">
                        
                        <p className="card-text pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam..</p>
                        <a href="#" className="btn btn-success py-2"><i class="fa-solid fa-x pe-2"></i>Close Window</a>
                    </div>
            </div>
   
        </div>
    )}
