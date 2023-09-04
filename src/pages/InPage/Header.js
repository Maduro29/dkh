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
                    <div className='header-content-first'>
                        <div className='header-logo'></div>
                        <span className='header-text'>CỔNG THÔNG TIN ĐÀO TẠO ĐẠI HỌC</span>
                    </div>
                    <div className='header-content-second'>
                        <div className='header-user'>
                            Chào mừng: &nbsp;
                            <div className='header-user-name'>Trần Mạnh Dũng</div>&nbsp; - &nbsp;
                            <div className='header-user-id'><b>21020119</b></div> &nbsp;- &nbsp;
                            <div className='header-user-logout'>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
