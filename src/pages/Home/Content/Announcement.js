import React, { Component } from 'react';
import './Announcement.scss';
class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='announce-container'>
                <div className='announce-content'>
                    <div className='announce-title'><b>THÔNG BÁO</b></div>
                    <div className='announce-first'>
                        <div className='announce-first-title'><b>Hệ thống đào tạo và đăng ký học đã được nâng cấp vào ngày 04/05/2023. Với hệ thống đăng ký học</b></div>
                        <div className='announce-first-content'>
                            <ul className='announce-first-list'>
                                <li className='announce-first-item'>Thời gian sử dụng hệ thống mỗi lần đăng nhập sẽ chỉ giới hạn trong 20 phút.
                                </li>
                                <li className='announce-first-item'>Sau khi ghi nhận đăng ký học thành công hoặc hết thời gian 20 phút sử dụng, hệ thống sẽ tự động đăng xuất tài khoản (dành vị trí cho các bạn khác đăng ký). Khi đăng xuất tài khoản, sinh viên chỉ có thể đăng nhập lại sau 30 phút kể từ lần login cuối cùng. </li>
                                <li className='announce-first-item'>Hệ thống sẽ tự nhận diện sinh viên dùng Tool đăng ký. Danh sách sinh viên sử dụng Tool đăng ký tự động sẽ được gửi cho đơn vị để có biện pháp xử lý. </li>
                                <li className='announce-first-item'>Hệ thống sẽ tạm dừng để bảo trì định kỳ từ 1h đến muộn nhất là 4h sáng hàng ngày.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='announce-second'>
                        <div className='announce-second-title'><b>Các bạn sinh viên lưu ý: Chỉ nên đăng nhập trước thời gian đăng ký từ 5 đến 10 phút.</b></div>
                        <div className='announce-second-content'>
                            <ul className='announce-second-list'>
                                <li className='announce-second-item'>(Video) Hướng dẫn sử dụng Cổng thông tin đào tạo - Đăng ký học năm 2023
                                </li>
                                <li className='announce-second-item'>Link hỗ trợ riêng chỉ đăng ký học: https://www.facebook.com/supportdangkyhocvnu </li>
                                <li className='announce-second-item'>(Video) Bài giảng môn Tin học cơ sở  | Câu hỏi ôn tập </li>
                                <li className='announce-second-item'>Kỹ năng học tập hiệu quả ở bậc đại học </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Announcement;




