import React,{useEffect} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Facts() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='facts' id='facts'
        data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once>
            <h1>FACTS</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="counter">
            <div className="c-box">
                <i class="far fa-smile-wink"></i>
                <div className="c-number">
                <VisibilitySensor >
                    {({ isVisible }) => (
                    <div>
                        {isVisible ? <CountUp start={0} end={232} duration={1} delay={0}/> :'0'}
                    </div>
                    )}
                </VisibilitySensor>
                </div>
                <p>Happy Clients</p>
                
               
            
            </div>
            <div className="c-box">
                <i class="fas fa-book-open"></i>
                <div className="c-number">
                <VisibilitySensor>
                    {({ isVisible }) => (
                    <div>
                        {isVisible ? <CountUp start={0} end={521} duration={1} delay={0}/> :'0'}
                    </div>
                    )}
                </VisibilitySensor>
                </div>
                <p>Projects</p>

            </div>
            <div className="c-box">
                <i class="fas fa-headphones-alt"></i>
                <div className="c-number">
                <VisibilitySensor >
                    {({ isVisible }) => (
                    <div>
                        {isVisible ? <CountUp start={0} end={1463} duration={1} delay={0}/> :'0'}
                    </div>
                    )}
                </VisibilitySensor>
                </div>
                <p>Support</p>

            </div>
            <div className="c-box">
                <i class="fas fa-certificate"></i>
                <div className="c-number">
                <VisibilitySensor>
                    {({ isVisible }) => (
                    <div>
                        {isVisible ? <CountUp start={0} end={25} duration={1} delay={0}/> :'0'}
                    </div>
                    )}
                </VisibilitySensor>
                </div>
                <p>Awards</p>
            

            </div>
        </div>
            
        </div>
    )
}
