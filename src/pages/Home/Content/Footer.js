import React, { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-content-first'>
                        <div className='footer-online'>
                            <div className='footer-text'>Đang online</div>
                            <div className='footer-count'><b>100</b></div>
                        </div>
                        <div className='footer-info'>
                            <div className='footer-info-text'>© 2008-2023 Trung tâm Quản trị Đại học số - VNU</div>
                        </div>
                    </div>
                    <div className='footer-content-second'>
                        <div className='footer-link'>Trang chủ VNU</div>
                        <div className='footer-link'>Trang chủ DUAC</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;




