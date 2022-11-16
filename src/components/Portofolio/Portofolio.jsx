import React from 'react';
import './Portofolio.css';
// import Modal from '../Modal/Modal'
import $ from 'jquery';
import { useState, useEffect } from 'react';





const Portofolio = () => {

    let data=[

        {id:1, imgSrc:"./images/cabin.png", title:"LOG CABIN"},
        {id:2, imgSrc:"./images/cake.png", title:"TASTY CAKE"},
        {id:3, imgSrc:"./images/circus.png", title:"CIRCUS TENT"},
        {id:4, imgSrc:"./images/game.png", title:"CONTROLLER"},
        {id:5, imgSrc:"./images/safe.png", title:"LOCKED SAFE"},
        {id:6, imgSrc:"./images/submarine.png", title:"SUBMARINE"}
    ]


// let [modal, setModal]=useState(false);
let [tempimgSrc, setTempImgSrc]=useState('');
let [title, setTitle]=useState('');



const getImg=(imgSrc, title)=>{
    setTempImgSrc(imgSrc);
    setTitle(title)
    // setModal(true);
  
    console.log(imgSrc)
}


const openModal=(imgSrc)=>{
    $('.big-card').show();
}

const closeModal=()=>{
    $('.big-card').hide();
}
    return (
        <div className='body'>
          
            <div className='container'>
                <div className='portofolio-wrapper pt-5 mt-5'>
                    <h2 className='section-title'>Porofolio</h2>
                    <div className="divider">
                        <div className="divider-line text-white"></div>
                        <div className="divider-icon"><i className="fa-solid fa-star"></i></div>
                        <div className="divider-line"></div>
                    </div>
                </div>


                {/*********************************** cards ***************************************************************************/}
                <div className="row text-center m-5 gy-3">                  
                       
                        {data.map((item, index)=>{
                            return (
                            <div className="img-box col-md-4" key={index} onClick={()=>{getImg(item.imgSrc,item.title)}}>
                                <img src={item.imgSrc} className='w-100' onClick={()=>{openModal(item.imgSrc)}} />
                                <div className="layer"><i class="fa-solid fa-plus"></i></div>
                            </div>
                            )
                        })}
                            
                        </div>
                    </div>                    

{/* Modal */}

<div className='big-card'>
          <div className="back-layer"></div>
            <div className="card py-4 text-center container">
                <div className='close-btn'><i class="fa-solid fa-xmark fa-4x fw-bolder pe-2" onClick={()=>{closeModal()}}></i></div>
                
                     <h2 className="card-title pt-5">{title} </h2>
               
                <div className="divider">
                <div className="divider-line text-white"></div>
                <div className="divider-icon"><i class="fa-solid fa-star"></i></div>
                <div className="divider-line"></div>
            </div>
                <img src={tempimgSrc} className="card-img-top rounded mb-5 pt-3"/>
                    <div className="card-body">
                        
                        <p className="card-text pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam..</p>
                        <a href="#" className="btn btn-success py-2" onClick={()=>{closeModal()}}><i class="fa-solid fa-x pe-2"></i>Close Window</a>
                    </div>
            </div>
   
        </div> 
        </div> 
               



     

     
















    );
}

export default Portofolio;
