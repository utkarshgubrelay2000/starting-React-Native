import React from 'react'
import './preloader.css'
function Prelouder (props){
    return(
        <section className='preloader'>

        <div className='container'>
            <div className="rot" style={{borderRight:` .3rem solid ${props.borderColor}`}}></div>
            <div className="zoomer" style={{backgroundColor:props.zoomerBgc}  }   ></div>
            <h3 classname="loading" style={{color:props.textColor}}>
Welcome to Website
            </h3>
    </div>
        </section>
) 
}
export default Prelouder