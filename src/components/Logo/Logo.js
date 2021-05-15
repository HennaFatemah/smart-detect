import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import FaceDetect from '../../assets/logo/face-recognition.svg';

const Logo = () => {
    return (
        <div className="ma4 mt0 ">
            <Tilt style={{width: 'fit-content'}} className="tilt br2 shadow-2 parallax-effect relative z10"  perspective={500}>
                <div  className="inner-element w4 h4">
                    <img className="w3" src={FaceDetect} alt="Face Detect Logo" />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;