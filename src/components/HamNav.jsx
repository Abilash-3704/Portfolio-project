import React,{useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function HamNav() {
    const [state,setState]=useState(false);
    const handleclick=()=>{
        setState(!state);
    }
    return (
        <>
        
        <i className={state?'fas fa-times close':'fas fa-bars close'} onClick={()=>handleclick()}></i>
        <div className='ham' style={{transform:state?'translateX(0px)':'translateX(-2000px)'}}>

            <ul>
                <Link to='#header' onClick={()=>handleclick()} smooth><div className='li'><i className="fas fa-home"></i><p>Home</p></div></Link>
                <Link to='#about' onClick={()=>handleclick()} smooth><div className='li'><i className="fas fa-user-alt"></i><p>About</p></div></Link>
                <Link to='#facts' onClick={()=>handleclick()} smooth><div className='li'><i className="fas fa-sticky-note"></i><p>Resume</p></div></Link>
                <Link to='#skills' onClick={()=>handleclick()} smooth><div className='li'><i className="far fa-newspaper"></i><p>Portfolio</p></div></Link>
                <Link to='#services' onClick={()=>handleclick()} smooth><div className='li'><i className="fas fa-digital-tachograph"></i><p>Services</p></div></Link>
                <Link to='#contact' onClick={()=>handleclick()} smooth><div className='li'><i className="fas fa-envelope"></i><p>Contact</p></div></Link>
                
                
            </ul>
            
        </div>
        
        </>
    )
}
