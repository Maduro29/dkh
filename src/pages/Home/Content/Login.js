import React, { Component } from 'react';
import './Login.scss';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='login-container'>
                <div className='login-content'>
                    <div className='login-content-first row'>
                        <div className='col-12 text-center form-title'>
                            <span className='form-title-text'><b>Đăng nhập</b></span>
                        </div>
                        <div className='form-group'>
                            <label>Mã sinh viên</label>
                            <input type='text' className='form-control login-input' placeholder='Nhập mã sinh viên' />
                        </div>
                        <div className='form-group'>
                            <label>Mật khẩu</label>
                            <input type='password' className='form-control login-input' placeholder='Nhập mật khẩu' />
                        </div>
                        <div className='col-12'>
                            <button className='btn-login btn'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;




