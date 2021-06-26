import React from 'react';
import Particles from 'react-particles-js';
import nasaConfig from '../../config/footer-config';

export default function FooterBackground(){
    return(
        <Particles params={nasaConfig}></Particles>
    )
}