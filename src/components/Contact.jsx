import React from 'react'

export default function Contact() {
    return (
        <div className='contact' id='contact' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once>
            <h1>CONTACT</h1>
            <div className="contact-box">
                <div className="c-data">
                    <div className="con-box">
                        <i class="fas fa-map-marker-alt fa-3x"></i>
                        <div className="con-text">
                            <h2>Location:</h2>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <i class="fas fa-envelope fa-3x"></i>
                        <div className="con-text">
                        <h2>Email:</h2>
                        <p>info@example.com</p>
                        </div>

                    </div>
                    <div className="con-box">
                        <i class="fas fa-mobile-alt fa-3x"></i>
                        <div className="con-text">
                            <h2>Call:</h2>
                            <p>+1 5589 55488 55</p>
                        </div>


                    </div>
                </div>
            </div>

            
        </div>
    )
}
