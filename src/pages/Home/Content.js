import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Content.scss';
import Login from './Content/Login';
import School from './Content/School';
import Annoucement from './Content/Announcement';
import Footer from './Content/Footer';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='content-container'>
                <div className='content-content'>
                    <div className='content-first'>
                        <div className='content-school'>
                            <School />
                        </div>
                        <div className='content-login'>
                            <Login />
                        </div>
                    </div>
                    <div className='content-second'>
                        <Annoucement />
                    </div>
                    <div className='content-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
