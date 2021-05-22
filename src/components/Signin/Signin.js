import React, { Component } from 'react';
import Form from '../Form/Form';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            incorrectSignin: 'correct',
        }
    }
    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    onSubmitSignin = () => {
        fetch('https://secret-falls-92473.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                } else if( this.state.email.length <= 0 || this.state.password.length <= 0) {
                    this.setState({ incorrectSignin:'enterUser' })
                } else {
                    this.setState({ incorrectSignin:'incorrect' })
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
                            <Form
                                onEmailChange={this.onEmailChange}
                                onPasswordChange={this.onPasswordChange}
                            />
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
                    {
                        this.state.incorrectSignin ==='enterUser' ? 
                        <p className="db fw6 lh-copy f6">Please enter email and password</p> : 
                        this.state.incorrectSignin ==='incorrect' ?
                        <p className="db fw6 lh-copy f6">Incorrect Email or Password</p> : 
                        null
                    }
                </div>
            </div>
        );
    }
}

export default Signin;