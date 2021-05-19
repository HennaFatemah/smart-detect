import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: '',
        }
    }

    onNameChange = (e) => {
        this.setState({ registerName: e.target.value })
    }

    onEmailChange = (e) => {
        this.setState({ registerEmail: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ registerPassword: e.target.value })
    }

    onSubmitSignin = () => {
        const { onRouteChange } = this.props;
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword,
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user){
                    onRouteChange('home')
                }
            })
        
    }

    render() {
        return (
            <article className="br3 ba pa3 dark-gray b--black-10 mv4 w-100 w-50-m mw6 shadow-5 w-25-l mw-5 flex justify-center items-center center tc relative z20">
                <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                            onChange={this.onNameChange}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div className="mt3">
                        <input
                            onClick={this.onSubmitSignin}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                            type="submit" 
                            value="Sign In"/>
                    </div>
                </div>
            </article>
        );
    }
}

export default Register;