import React from 'react'
import './Structures.css';
import imgStructure from '../img/logo1.png'

function Structures() {

  return (
    <div className='container'>
      <div className='structure-container'> 
        <div>
          <img src={imgStructure} alt="" className="imgStructure" />
          <figcaption>Partner_name</figcaption>
        </div>
        <div className='structure-infos'>
          <p>adress_structure</p>        
          <p>city</p>        
        </div>
      </div>

      <div className='structure-container'> 
        <div>
          <img src={imgStructure} alt="" className="imgStructure" />
          <figcaption>Partner_name</figcaption>
        </div>
        <div className='structure-infos'>
          <p>adress_structure</p>
          <p>city</p>        
        </div>
      </div>
    </div>
  )
}

export default Structures