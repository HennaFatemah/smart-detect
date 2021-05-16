import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onImageUrlChange, onButtonSubmit }) => {
    return (
        <div className="flex flex-column">
            <p className="f3 center ">
                {'Detect the faces in your pictures. Enjoy this app with any picture you want to play around with!'}
            </p>
            <div className="flex">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" onChange={ onImageUrlChange } className="f4 pa2 w-70 center" />
                    <button onClick={ onButtonSubmit } className="w-30 center grow f4 link ph3 pv2 dib white bg-mid-gray ba b--mid-gray">Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;