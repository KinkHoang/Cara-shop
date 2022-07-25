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
        <h4 className="bold">Contact</h4>
        <p>
            <strong>Address: </strong> 12 Distric, Hochiminh City
        </p>
        <p>
            <strong>Phone:</strong> +84 359797197 / (+84)393836817
        </p>
        <p>
            <strong>Hours:</strong> 10:00 - 18:00. Mon - Sat
        </p>
        <div className="follow">
            <h4 className="bold">Follow us</h4>
            <div className="icon">
                <i ><a className="fab fa-facebook-f" href ="https://www.facebook.com/CarafurnitureShop/"></a></i>
                <i ><a className="fab fa-twitter"href ="https://www.twitter.com/"></a></i>
                <i ><a className="fab fa-instagram" href ="https://www.instagram.com/"></a></i>
                <i ><a className="fab fa-pinterest-p" href ="https://pinterest.com/"></a></i>
                <i ><a className="fab fa-youtube" href ="https://www.youtube.com/"></a></i>
            </div>
        </div>
    </div>
    <div className="col">
        <h4 className="bold">About</h4>
        <a href="#">About</a>
        <a href="#">Delivery Infomation</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Term & Conditions</a>
        <a href="#">Contact us</a>
    </div>

    <div className="col">
        <h4 className="bold">My account</h4>
        <a href="#">Sign in</a>
        <a href="#">View cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>
    <div className="col install">
        <h4 className="bold">Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={Logo4} alt="" />
    </div>
    <div className="copyright">
        <p>@2022, TungDev - Ecommerce Template</p>
    </div>
</footer>
  )
}

export default Footer

