import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <>
        
        <div className='about' id='about'
        data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once style={{overflowX:'hidden'}}>
            <h1>ABOUT</h1>
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className="bio">
                <div className="bio-image">
                    <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg" alt="" />
                </div>
                <div className="bio-data">
                    <h2>Web Developer.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li>Birthday: 1 May 1995</li>
                        <li>Age: 30</li>
                        <li>Website: www.example.com</li>
                        <li>Degree: Bachelors</li>
                        <li>Phone: +123 456789</li>
                        <li>Email: email@example.com </li>
                        <li>City: New York,USA</li>
                        <li>Freelance: Available</li>
                    </ul>
                    <p>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p>
                </div>
            </div>
            
        </div>
        </>
    )
}
