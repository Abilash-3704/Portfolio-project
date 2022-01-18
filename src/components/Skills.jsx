import React,{useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
     useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='skills' id='skills' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once>
            <h1>SKILLS</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            
            <div className="skill-bar">
                <div className="bar">
                    <div className="slider">
                        <div className="s-indicator" >
                        <p>HTML</p>
                        <p>70%</p>
                        </div>
                        <div className="s-bar"  >
                            <div className="s-fill"  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-once data-aos-duration="1000" style={{width:'70%'}}></div>

                        </div>
                    </div>
                </div>
                <div className="bar">
                    <div className="slider">
                        <div className="s-indicator" >                        
                        <p>CSS</p>
                        <p>60%</p>
                        </div>
                        <div className="s-bar">
                            <div className="s-fill" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once style={{width:'60%'}}></div>
                        </div>
                    </div>

                </div>
                <div className="bar">
                    <div className="slider">
                        <div className="s-indicator" >
                        <p>JAVASCRIPT</p>
                        <p>60%</p>
                        </div>
                        <div className="s-bar">
                            <div className="s-fill" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once style={{width:'60%'}}></div>
                        </div>
                    </div>
                    

                </div>
                <div className="bar">
                    <div className="slider">
                        <div className="s-indicator" >
                        <p>REACT JS</p>
                        <p>60%</p>
                        </div>
                        <div className="s-bar">
                            <div className="s-fill" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once style={{width:'60%'}}></div>
                        </div>
                    </div>
                        
                </div>
                <div className="bar">
                    <div className="slider">
                        <div className="s-indicator" >
                        <p>PYTHON</p>
                        <p>50%</p>
                        </div>
                        <div className="s-bar">
                            <div className="s-fill" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once  style={{width:'50%'}}></div>
                        </div>
                    </div>
                    
                </div>
                <div className="bar">
                    <div className="slider">
                        <div className="s-indicator" >
                        <p>MY SQL</p>
                        <p>45%</p>
                        </div>
                        <div className="s-bar">
                            <div className="s-fill"data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once  style={{width:'45%'}}></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
