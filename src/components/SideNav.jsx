import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';



export default function SideNav() {
    
    
    return (
        <>
        <div className='side-nav' data-aos="zoom-in-right" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-once>
            <ul>
                <Link to='#header'
                 smooth><li><div className="circle"><i class="fas fa-home"></i></div></li></Link>
                <Link to='#about' smooth><li><div className="circle"><i class="fas fa-user-alt"></i></div></li></Link>
                <Link to='#facts' smooth><li><div className="circle"><i class="fas fa-sticky-note"></i></div></li></Link>
                <Link to='#skills' smooth><li><div className="circle"><i class="far fa-newspaper"></i></div></li></Link>
                <Link to='#services' smooth><li><div className="circle"><i class="fas fa-digital-tachograph"></i></div></li></Link>
                <Link to='#contact' smooth><li><div className="circle"><i class="fas fa-envelope"></i></div></li></Link>
                
            </ul>
            
        </div>
        </>
        
    )
}
