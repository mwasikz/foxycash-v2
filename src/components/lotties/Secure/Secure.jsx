import React from 'react';
import Lottie from 'react-lottie';
import animationData from './hero-3.json';

function Secure() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
  return (
    <div>
      <Lottie
            options={defaultOptions}
            
      />
    </div>
  )
}

export default Secure;