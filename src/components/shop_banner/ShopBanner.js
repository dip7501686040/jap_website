import React from 'react'
import './ShopBanner.css'
import homeImage from '../../images/home-image.jpg'
import yogaNamaste from '../../images/yoga_namaste.jpg'

function ShopBanner() {
    return (
        <section id="shop_banner">
            <div className="shop_banner__heading">
                <h1>Janakalyan Ayurved Paharmacy</h1>
                <div className="shop_banner__img">
                    <img src={homeImage} className="shop_banner__home_image" alt="home image" />
                    <img src={yogaNamaste} className="shop_banner__yoga_namste_image" alt="yoga namaste image" />
                </div>
                <h3>Genuine Ayurveda Store with 25 years of experience</h3>
            </div>
        </section>
    )
}

export default ShopBanner
