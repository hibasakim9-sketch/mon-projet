import React from 'react'
import './Hero.css';
import flesh from '../../assets/flesh.png'

const Hero = () => {
  return (
    <div className='Hero container'>
        <div className="hero-text">
            <h1>We ensure education for a better world</h1>
            <p>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. Quia quod, iusto dicta voluptas ea recusandae voluptatum sit corporis ab obcaecati porro quibusdam mollitia architecto totam culpa nam accusantium est molestias quasi repellendus nostrum, dolorem quam tempora provident. Vel iusto dolorum, soluta magnam eos recusandae
                 debitis sed delectus fugiat, est qui.</p>
                 <button  className='btn'>Explore more<img src={flesh}/></button>
        </div>
      
    </div>
  )
}

export default Hero
