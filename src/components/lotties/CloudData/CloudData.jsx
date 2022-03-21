import React from 'react';
import Lottie from 'react-lottie';
import animationData from './hero-4.json';

function CloudData() {
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
            height={400}
            width={400}
      />
    </div>
  )
}

export default CloudData;