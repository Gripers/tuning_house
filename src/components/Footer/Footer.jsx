import React from 'react'
import "./Footer.css"
import img from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className='bg'>

<div className="container__footer footer">
<div className='footer-text'>
    <img src={img} alt="" />
    <h6>Bizning joylashuvimiz:</h6>
    <p>
        Toshkent shahri, Farxod bozori avtoturargohi yonida "Auto Tuning Centre" servisi
<br />
<br />
Toshkent shahri, Sergili mashina bozori
    </p>
    <p>+998 95 144 19 19</p>
</div>


<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1673855154552!5m2!1sru!2s"  height="350"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
    </div>
  )
}

export default Footer