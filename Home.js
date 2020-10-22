import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home" >
            <div className="home__container" >
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/1917/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_en-GB._CB419087828_.jpg" alt="" />

                <div className="home__row" >
                    <Product 
                    id="132143"
                    title="The lean startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={249}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}  />
                    <Product
                    id="132243"
                    title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={33249}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Apple/Family_Stripes/Watches/AMZ_FamiyStripe_Series_3_GPS._CB450739241_.png"
                    rating={5} />
                    <Product
                    id="132343" 
                    title="The Joy of Living: Unlocking the Secret and Science of Happiness"
                    price={449}
                    image="https://m.media-amazon.com/images/I/51CO-l3c9oL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row" >
                <Product
                id="132443"
                title="Lectro Kinza 27.5T 7S Speed Electric Cycle (Blue & Black)"
                    price={24449}
                    image="https://m.media-amazon.com/images/I/81uCQQB0GbL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5} />
                <Product
                id="132543" 
                    title="MRF Cricket BAT English Willow Grand (Size 4)"
                    price={5995}
                    image="https://m.media-amazon.com/images/I/61hLtKzVbBL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                />
                </div>

                <div className="home__row" >
                <Product
                id="132643" 
                    title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Certified Android Smart OLED TV KD-65A8G (Black) (2019 Model)"
                    price={200490}
                    image="https://m.media-amazon.com/images/I/91vpNsKYq+L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                />
                </div>
            </div>
        </div>
    )
}

export default Home
