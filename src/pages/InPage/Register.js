import React, { Component } from 'react';
import Header from './Header';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='register-container'>
                <div className='register-content'>
                    <Header />
                </div>
            </div>
        );
    }
}

export default Register;
