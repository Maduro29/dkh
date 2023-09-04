import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Content.scss';
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
                            <div className='content-school-title'>ĐANG ĐĂNG KÝ HỌC</div>
                            <div className='content-school-list'>
                                <ul className='school-list'>
                                    <li className='school'>Trường Đại học Khoa học Tự nhiên - từ 2023-09-02 08:00:00 đến 2023-09-05 08:00:00
                                    </li>
                                    <li className='school'>Trường Đại học Khoa học Tự nhiên - từ 2023-09-02 08:00:00 đến 2023-09-05 08:00:00
                                    </li>
                                    <li className='school'>Trường Đại học Giáo dục - từ 2023-09-01 11:30:00 đến 2023-09-18 08:00:00</li>
                                    <li className='school'>Trường Đại học Công nghệ - từ 2023-08-29 08:00:00 đến 2023-09-08 10:00:00</li>
                                </ul>
                            </div>
                        </div>
                        <div className='content-login'>

                        </div>
                    </div>
                    <div className='content-second'></div>
                    <div className='content-footer'></div>
                </div>
            </div>
        );
    }
}

export default Content;
