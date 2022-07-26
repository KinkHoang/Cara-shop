import React from 'react'
import "./styles.scss";
import Logo1 from "../../../assets/img/logo.png";
import Logo2 from "../../../assets/img/app.jpg";
import Logo3 from "../../../assets/img/play.jpg";
import Logo4 from "../../../assets/img/pay.png";
import history from "../../../utils/history";
const Footer = () => {

  return (
    
    <footer className="section-p1">
        
    <div className="col">
        <img className="logo" src={Logo1} alt="" onClick={() => history.push("/")}/>
        <h4 className="bold">Liên Hệ</h4>
        <p>
            <strong>Địa chỉ: </strong> Hai Chau Distric, Da Nang City
        </p>
        <p>
            <strong>Điện thoại:</strong> +84 356990500
        </p>
        <p>
            <strong>Giờ làm việc:</strong> 8:00 - 18:00. Mon - Sat
        </p>
        <div className="follow">
            <h4 className="bold">Mạng xã hội</h4>
            <div className="icon">
                <i ><a target="_blank" className="fab fa-facebook-f"  href ="https://www.facebook.com/CarafurnitureShop/"></a></i>
                <i ><a target="_blank" className="fab fa-twitter"href ="https://www.twitter.com/"></a></i>
                <i ><a target="_blank" className="fab fa-instagram" href ="https://www.instagram.com/"></a></i>
                <i ><a target="_blank" className="fab fa-pinterest-p" href ="https://pinterest.com/"></a></i>
                <i ><a target="_blank" className="fab fa-youtube" href ="https://www.youtube.com/"></a></i>
            </div>
        </div>
    </div>
    <div className="col">
        <h4 className="bold">Về chúng tôi</h4>
        <a href="#">Về chúng tôi</a>
        <a href="#">Thông tin giao hàng</a>
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Điều khoản & Điều kiện</a>
        <a href="#">Liên hệ</a>
    </div>

    <div className="col">
        <h4 className="bold">Tài khoản của tôi</h4>
        <a href="#" onClick={() => history.push("/login")}>Đăng Nhập</a>
        <a href="#" onClick={() => history.push("/cart")}>Giỏ hàng</a>
        <a href="#">Danh sách yêu thích</a>
        <a href="#">Đơn hàng của bạn</a>
        <a href="#">Giúp đỡ</a>
    </div>
    <div className="col install">
        <h4 className="bold">Cài đặt App</h4>
        <p>Từ App Store hoặc Google Play</p>
        <div className="row">
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
        </div>
        <p>Cổng thanh toán</p>
        <img src={Logo4} alt="" />
    </div>
    <div className="copyright">
        <p>@2022, Viet Hoang - Ecommerce project</p>
    </div>
</footer>
  )
}

export default Footer

