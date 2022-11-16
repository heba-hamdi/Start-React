import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-5 container'>
            <h2 className='contact-title'>Contact</h2>
            <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-icon"><i className="fa-solid fa-star"></i></div>
                <div className="divider-line"></div>
            </div>

            <form className='w-50 mx-auto '>

                <div className="form-group my-5">
                    <input type="text" className="form-control fs-4  pb-4" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name" />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control fs-4 pb-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>

                <div className="form-group mt-5">
                    <input type="tel" className="form-control fs-4 pb-4" id="exampleInputPhone" placeholder="Phone" />
                </div>
                <div class="form-group">
                    <textarea class="form-control fs-4 mt-5" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>

                <button type="submit" className="btn btn-success mt-3 mb-4 p-3">Submit</button>
            </form>

        </div>
    );
}

export default Contact;
