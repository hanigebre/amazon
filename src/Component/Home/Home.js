// 


import React, { Component } from 'react'
import "./Main.css"
import AdvertismentOne from './Advertisment/AdvertismentFour/AdvertismentOne/AdvertismentOne'
import Signin from './Signin/Signin'
import ProductBanner from './ProductBanner/ProductBanner'
import Horizontaladvertisment from './HorizontalAdvertisment/Horizontaladvertisment'
import LastPage from './LastPage/LastPage'
import { Link } from "react-router-dom"


const Home = ()=>{
   
 return (
            <div className='mainPage' style={{ paddingTop: "260px", display: "flex", flexWrap: "wrap", backgroundColor: "#EAEDED", size: "" }} >
                <div style={{ display: "flex", }}>
           
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Shop Laptops & Tablets"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                            footer="shop now" 
                            price={123}
                            />
                    </Link>
               
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Easy returns"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
                            footer="shop now" 
                             price={64.85}
                            id='123456'/>
                    </Link>

                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Health & Personal Care"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/cleansers_Afe0t1JgGI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666787822650"
                            footer="shop now" 
                            price={79.35}
                            id='234567'/>
                    </Link>
                    <div className='sign__product'>
                        <Signin />
                        <ProductBanner />
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: "15px" }}>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Electronics" className="electronics__image"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/laptop_0WVcTVzrH2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666812323084"
                            footer="See more"
                            price={89.56} 
                            id='345678'
                        />
                    </Link>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Dresses"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/dresses_IphzxhAm1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666812323619"
                            footer="shop now" 
                            price={23.89} 
                            id='124568'/>
                    </Link>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Toy under $30"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/toys_w6AkEImD1E.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666812323093"
                            footer="shop now" 
                            price={68} 
                            id='348697'/>
                    </Link>
                    <div style={{ marginBottom: "15px" }}>
                        <Link to="/checkout" className='home__links'>
                            <AdvertismentOne title="Computers & accessories"
                                image="https://ik.imagekit.io/x67cvkx60/amazon-image/computeraccessories_X0A7GGO02.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666818812724"
                                footer="shop now" 
                                price={623} 
                                id='349672'/>
                        </Link>
                    </div>
                </div>
                <div style={{ display: "flex", height: "300px", backgroundColor: "white", alignItems: "center" }}>
                   
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/caterpilar_dqzaxyg_M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952731049" 
                        id='234593' price={35.95}/>
                       
                       
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/goodmoon_WZVdKr7jTR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952731475" 
                        id='203806' price={68.36}/>
                       
                        <Link to='/orders' >
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/chicka_FI5wYmKA7u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952733025"  id='300056' price={65.58}/>
                        </Link>
                        <Link to='/orders' className='home__links'>
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/loveyouForever_s1xZ2ILk1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952731310" 
                        id='223388' price={65.89}/>
                        </Link>
                        <Link to='/orders' className='home__links'>
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/howmuchIloveYou_frxXnNV_sT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952730857" 
                        id='555666' price={67.88}/>
                        </Link>
                        <Link to='/orders' className='home__links'>
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/Corduroy_yyERZmYk24.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952731414" 
                        id='778866' price={58.23}/>
                        </Link>
                        <Link to='/orders' className='home__links'>
                        <Horizontaladvertisment image="https://ik.imagekit.io/x67cvkx60/amazon-image/loveyouForever_s1xZ2ILk1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666952731310" 
                        id='134565' price={78}/>
                        </Link>
                    
                </div>

                <div style={{ display: "flex" }}>
                    <Link to="/checkout" className='home__links'>

                        <AdvertismentOne title="For your Fitness Needs"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/fitness_3QP4J7yGt-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963776598"
                            footer="shop now" 
                            price={123}
                            id='565689'/>
                    </Link>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Kindle E readers"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/kindle_89pqHs14fv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963776289"
                            footer="shop now" 
                            price={352}
                            id='741852'/>
                    </Link>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Shop Pet supplies"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/puppies_uPbUIahml.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963999850"
                            footer="shop now" 
                            price={435} id='852123'/>
                    </Link>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Computers & accessories"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/kitchen_BZUbgz6ms-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666964186196"
                            footer="shop now" 
                            price={254} id='369486'/>
                    </Link>

                </div>

                <div style={{ display: "flex" }}>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Deals in Tools and Home Improvement"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/Holiday2022/Graphics/XCM_CUTTLE_1475305_2610205_379x304_1X_en_US._SY304_CB608600856_.jpg"
                            footer="shop now" 
                            price={543} id='327539'/>
                    </Link>
                    <Link to="/checkout" className='home__links'>
                        <AdvertismentOne title="Womens Boots"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/boots_1nrgbjXiu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963776524"
                            footer="shop now" 
                            price={365} id='159357'/>
                    </Link>
                    <Link to='/order' className='home__links'>
                        <AdvertismentOne title="Men's fashion Clothes"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/fashion_T7lwI_9Ni2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963776609"
                            footer="shop now" 
                            price={37} id='651324'/>
                    </Link>
                   
                    <Link to='/orders' className='home__links'>
                        <AdvertismentOne title="Find your ideal TV"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                            footer="shop now" 
                            price={867} id='729927'/>
                    </Link>

                </div>
                <div style={{ display: "flex" }}>
                    <Link to='/orders' className='home__links'>
                        <AdvertismentOne title="Watches"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/watchs_BKk3UvEm0a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666965215781"
                            footer="shop now"
                            price={562} id='356127'/>
                    </Link>
              
                    <Link to='orders' className='home__links'>
                        <AdvertismentOne title="Child Tools"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/newtoys_Z-kjaeFku.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963776578"
                            footer="shop now" 
                            price={138} id='987321'/>
                    </Link>
                    <Link to='orders' className='home__links'>
                        <AdvertismentOne title="Create with strip lights"
                            image="https://ik.imagekit.io/x67cvkx60/amazon-image/striplights_y2hhenaX7f.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666963778446"
                            footer="shop now" 
                            price={387} id='654357'/>
                    </Link>
                    <Link to='/orders' className='home__links'>
                        <AdvertismentOne title="Get fit at home"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
                            footer="shop now" 
                            price={269} id='621358'/>
                    </Link>
                </div>
                <div style={{ backgroundColor: "white", textAlign: "center", width: "100%", height: "200px", marginBottom: "15px", marginTop: "15px" }} >
                    <LastPage />
                </div>
            </div>
        )
    }
export default Home
