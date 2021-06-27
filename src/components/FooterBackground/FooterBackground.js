import React from 'react';
import Particles from 'react-particles-js';
import nasaConfig from '../../config/footer-config';

export default function FooterBackground(){
    return(
      <div>
      <Particles         
      style={{
        position: "relative",
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        zIndex: 0
        
      }} params={nasaConfig}/>
      </div>

    )
}