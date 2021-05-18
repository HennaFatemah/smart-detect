import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="absolute z 10 ma flex justify-center items-center w-100">
            <div className="relative mt2">
                <img id='inputimage'  className="relative z9 h-auto" width='500px'  src={imageUrl} alt="" />
                <div  className="bounding-box z12" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
            </div>
        </div>
    );
};

export default FaceRecognition;