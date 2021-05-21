import React from 'react';

const Form = ({ onEmailChange, onPasswordChange }) => {
    return (
        <>
            
                <div className="mt3">
                    <label 
                        className="db fw6 lh-copy f6"
                        htmlFor="email-address"
                    >Email</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={onEmailChange}
                    />
                </div>
                <div className="mv3">
                    <label 
                        className="db fw6 lh-copy f6"
                        htmlFor="password"
                    >Password</label>
                    <input 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={onPasswordChange}
                    />
                </div>
        </>
    );
};

export default Form;