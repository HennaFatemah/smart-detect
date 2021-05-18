import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        <>
            {
                isSignedIn
                ?
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer relative z10">Sign Out</p>
                </nav>
                :
                <>
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer relative z10">Sign In</p>
                        <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer relative z10">Register</p>
                    </nav>
                </>
            }
        </>
    );
};

export default Navigation;