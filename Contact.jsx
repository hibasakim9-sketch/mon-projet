import React from 'react'
import sm from '../../assets/sm.webp';
import message from '../../assets/message.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';
import flesh from '../../assets/flesh.png'


import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>seed us a message<img src={sm}/></h3>
            <p>Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. O
                fficia labore nisi cumque illum
                 suscipit odio voluptatibus facilis debitis 
                 sequi sunt porro voluptate corporis voluptas 
                 quidem exercitationem accusamus et numquam veritatis adipisci voluptates, repudiandae sed perspiciatis
                 velit laudantium. Id, possimus ipsam.</p>
                 <ul>
                    <li><img src={message}/>Contact@GreatStack.dev</li>
                    <li><img src={phone}/>+1 123-456-7890</li>
                    <li><img src={location}/>77 Massachusetts Ave, Cambridge<br/>MA 02139, United states</li>
                 </ul>
        </div>
         <div className="conatct-col">
            <form action="">
                <label htmlFor="">Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                       <label htmlFor="">Phone Number</label>
                <input type="number" name="phone" placeholder='Enter your mobile' required />
                       <label htmlFor="">Write your messages here </label>
                       <textarea name="message" row='6' placeholder='Enter your message' required></textarea>
                       <button type='submit' className='btn dark-nav'>Submit now<img src={flesh}/></button>
     
            </form>
         </div>
      
      
    </div>
  )
}

export default Contact
