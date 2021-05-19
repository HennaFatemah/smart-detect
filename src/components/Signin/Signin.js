import React, { Component } from 'react';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: '',
        }
    }
    onEmailChange = (e) => {
        this.setState({ signinEmail: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ signinPassword: e.target.value })
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword,
            })
        })
            .then(response => response.json())
            .then(data => {
                if(data === "success") {
                    this.props.onRouteChange('home')
                }
            })
        
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="relative z13 br3 ba pa3 dark-gray b--black-10 mv4 w-100 w-50-m mw6 shadow-5 w-25-l mw-5 flex justify-center items-center center">
                <div className="measure tc">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
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
                                onChange={this.onEmailChange}
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
                                onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="relative z20">
                        <input
                            onClick={this.onSubmitSignin}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;