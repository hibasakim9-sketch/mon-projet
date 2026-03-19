import React from 'react'
import './About.css'
import video from'../../assets/video.jpg'
import etudi from'../../assets/etudi.jpg'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={video} alt=""className='play-icon' />
        <img src={etudi} alt=""  className='about-img'/>
    </div>    
    <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's leadears today</h2>
        <p>Lorem ipsum dolor sit amet consectetur, 
        necessitatibus 
            delectus sed omnis blanditiis
             porro tenetur soluta libero.
              Ex quaerat alias nesciunt dolores
               
                quaerat optio pariatur, ut dicta saepe! Fugit 
            ex illo temporibus rem necessitatibus.

        </p>
        <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Necessitatibus at, 
            ea numquam maiores perferendis
             consequuntur minima iure dignissimos 
         
             Minima nulla nostrum quae nam unde?</p>
             <p>Lorem ipsum dolor sit amet consectetur  
                ratione harum cupiditate voluptatibus sed at, vitae officia similique soluta odio porro. Nemo similique repellat voluptatibus hic placeat, dolorem nulla 
                facere itaque inventore deleniti?</p>
        </div>  
    </div>
  )
}

export default About
