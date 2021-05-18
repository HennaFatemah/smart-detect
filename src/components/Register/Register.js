import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 ba pa3 dark-gray b--black-10 mv4 w-100 w-50-m mw6 shadow-5 w-25-l mw-5 flex justify-center items-center center tc">
            <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="mt3">
                    <input
                        onClick={() => onRouteChange('home')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                        type="submit" 
                        value="Sign In"/>
                </div>
            </div>
            </article>
    );
};

export default Register;