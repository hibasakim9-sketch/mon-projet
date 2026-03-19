import React from 'react'
import './Programs.css';
import etudiant1 from '../../assets/etudiant3.jpg';
import etudiant2 from '../../assets/etd.jfif';
import etudiant3 from '../../assets/etd1.jfif';

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={etudiant1} alt="" />
        </div>
   
          <div className="program">
            <img src={etudiant2} alt="" />
        </div>
     
          <div className="program">
            <img src={etudiant3} alt="" />
        </div>
      
      
    </div>
  )
}

export default Programs
