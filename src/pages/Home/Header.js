import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Header.scss';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-content'>
                    <div className='header-logo'></div>
                    <span className='header-text'>CỔNG THÔNG TIN ĐÀO TẠO ĐẠI HỌC</span>
                </div>
            </div>
        );
    }
}

export default Header;
