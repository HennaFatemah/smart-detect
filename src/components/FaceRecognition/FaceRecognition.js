import React from 'react';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="absolute z 10 ma flex justify-center items-center w-100">
            <div className="relative mt2">
                <img id='inputimage'  className="relative z9 w-500 h-auto"  src={imageUrl} alt="" />
                <div  className="absolute ba b--hot-pink shadow-1 z12 flex flex-wrap justify-center" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
            </div>
        </div>
    );
};

export default FaceRecognition;