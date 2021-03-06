import React, { Component } from 'react';
import Form from '../Form/Form';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    onSubmitSignin = () => {
        //error checking
        if (!this.state.name || this.state.name.length <= 0) {
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const testEmail = re.test(String(this.state.email).toLowerCase());
        if (!testEmail || testEmail.length <= 0) {
            return false;
        }
        if (!this.state.password || this.state.password.length <= 0) {
            return false;
        }
        const { onRouteChange, loadUser } = this.props;
        fetch('https://secret-falls-92473.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                    loadUser(user)
                    onRouteChange('home')
                }
            })
        
    }

    render() {
        return (
            <article className="br3 ba pa3 dark-gray b--black-10 mv4 w-100 w-50-m mw6 shadow-5 w-25-l mw-5 flex justify-center items-center center tc relative z20">
                <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                            onChange={this.onNameChange}
                        />
                    </div>
                    <Form
                        onEmailChange={this.onEmailChange}
                        onPasswordChange={this.onPasswordChange}
                    />
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