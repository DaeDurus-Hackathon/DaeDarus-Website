import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particle-config';

export default function ParticleBackground(){
    return(
        <div>
        <Particles         
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          zIndex: 0
          
        }} params={particlesConfig}/>
        </div>
    )
}