import React from 'react';

const Signin = () => {
    return (
        <div className="relative z13 br3 ba pa3 dark-gray b--black-10 mv4 w-100 w-50-m mw6 shadow-5 w-25-l mw-5 flex justify-center items-center center">
            <form className="measure tc">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                </fieldset>
                <div className="relative z20">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db">Register</a>
                </div>
            </form>
        </div>
    );
};

export default Signin;