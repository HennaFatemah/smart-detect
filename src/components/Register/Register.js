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
        const { onRouteChange, loadUser } = this.props;
        fetch('http://localhost:3000/register', {
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
                if(user){
                    loadUser(user)
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