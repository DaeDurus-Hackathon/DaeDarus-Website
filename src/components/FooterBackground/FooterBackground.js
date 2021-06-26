import React from 'react';
import Particles from 'react-particles-js';
import nasaConfig from '../../config/footer-config';

export default function FooterBackground(){
    return(
        <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%"
        }}
        >
        <Particles params={nasaConfig}/>
        </div>
    )
}