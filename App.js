import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from'./Components/About/About';
import Compus from './Components/Compus/Compus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
         <Title subtitle='Our programs' title='What we Offer'/>
       <Programs/>
       <About/>
      <Title subtitle='Gallery' title='Campue photos'/>
     <Compus/>
<Title subtitle='Contact us' title='Get in touch'/>
<Contact/>
<Footer/>
      </div>

   
    </div>
 
  )
}

export default App
