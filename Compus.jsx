import React from 'react'
import './Compus.css'
import ett1 from '../../assets/ett1.jfif';
import ett6 from '../../assets/ett6.jpeg';
import ett7 from '../../assets/ett7.jpg';
import ett4 from '../../assets/ett4.jfif';
import flesh from '../../assets/flesh.png'
const Compus = () => {
  return (
    <div className='compus'>
        <div className="gallery">
            <img src={ett1} alt="" />
              <img src={ett6} alt="" />
                <img src={ett7} alt="" />
                  <img src={ett4} alt="" />
        </div>
         <button className='btn dark-btn'>See more here<img src={flesh}/></button>

    </div>
  )
}

export default Compus;
