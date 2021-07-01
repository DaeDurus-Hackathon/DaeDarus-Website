import React from 'react';
import Particles from 'react-particles-js';
import nasaConfig from '../../config/footer-config';

export default function FooterBackground(){
    return(
      <div>
      <Particles         
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%'
        
      }} params={nasaConfig}/>
      </div>

    )
}