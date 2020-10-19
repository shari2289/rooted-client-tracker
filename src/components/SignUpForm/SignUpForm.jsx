import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignUpForm.css';

class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignUpOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (

        <div id="SignUpPage">
            <h2> Sign Up </h2>
            <form onSubmit={this.handleSubmit} >
                <div>
                    <div><input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /></div>
                </div>
                <div>
                    <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit" className="button">SUBMIT</button>
                    <Link to='/'>Cancel</Link>
                </div >
            </form>
        </div>

    );
}
}

export default SignUpForm;