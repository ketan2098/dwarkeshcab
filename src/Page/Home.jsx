// import Hero from '../components/Hero'
// import VehicleList from '../components/VehicleList'
// import Newsletter from '../components/Newsletter'
// import Footer from '../components/Footer'

import About from "../components/common/About";
import Responsive from "../components/common/Banner";
import CarList from "../components/home/CarList";
import FeatureSection from "../components/home/Features";
import Hero from "../components/home/Hero";
import OneWayServices from "../components/home/OneWayServices";
import Packages from "../components/home/Packages";
import Reviews from "../components/home/Reviews";
import TaxiCards from "../components/home/TaxiCards";
import WhyChoose from "../components/home/WhyChoose";

// const Home = () => {
//     return (
//         <div>
//             <Hero />
//             <VehicleList />
//             <Newsletter />
//             <Footer />
//         </div>
//     )
// }

// export default Home




export default function Home() {
    return (
        <>
            {/* <Hero /> */}
            <Responsive />
            <About />
            <TaxiCards />
            <FeatureSection />
            <Packages />
            {/* <WhyChoose />
            <CarList />
            <OneWayServices />
            <Reviews /> */}

            {/* 
            
             <Slider {...settings}>
                    {/* Slide 
            <div className="banner-slide">
                <img
                    src={require("../../assets/slider-1.jpg")}
                    alt="Taxi Banner"
                    className="banner-img w-100"
                />

                <div className="banner-overlay"></div>

                <div className="banner-content">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 col-12">
                                <h6 className="banner-subtitle">
                                    WELCOME TO DWARKESH CAB!
                                </h6>

                                <h1 className="banner-title">
                                    BOOK <span>TAXI</span> FOR YOUR RIDE
                                </h1>

                                <p className="banner-text">
                                    {sliderOneText.desc}
                                </p>

                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="/about" className="btn btn-warning px-4 py-3 rounded-pill fw-bold">
                                        ABOUT MORE →
                                    </a>

                                    <a href="/booking" className="btn btn-light px-4 py-3 rounded-pill fw-bold">
                                        LEARN MORE →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2 
            <div className="banner-slide">
                <img
                    src={require("../../assets/slider-2.jpg")}
                    alt="Taxi Banner"
                    className="w-100 banner-img"
                />

                <div className="banner-overlay"></div>

                <div className="banner-content">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 col-12">
                                <h6 className="banner-subtitle">
                                    WELCOME TO TAXICA!
                                </h6>

                                <h1 className="banner-title">
                                    BOOK <span>TAXI</span> FOR YOUR RIDE
                                </h1>

                                <p className="banner-text">
                                    There are many variations of passages available the majority
                                    have suffered alteration in some form generators on the
                                    Internet tend to repeat predefined chunks injected humour
                                    randomised words look even slightly believable.
                                </p>

                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="/about" className="btn btn-warning px-4 py-3 rounded-pill fw-bold">
                                        ABOUT MORE →
                                    </a>

                                    <a href="/booking" className="btn btn-light px-4 py-3 rounded-pill fw-bold">
                                        LEARN MORE →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 
            <div className="banner-slide">
                <img
                    src={require("../../assets/slider-3.jpg")}
                    alt="Taxi Banner"
                    className="w-100 banner-img"
                />

                <div className="banner-overlay"></div>

                <div className="banner-content">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 col-12">
                                <h6 className="banner-subtitle">
                                    WELCOME TO TAXICA!
                                </h6>

                                <h1 className="banner-title">
                                    BOOK <span>TAXI</span> FOR YOUR RIDE
                                </h1>

                                <p className="banner-text">
                                    There are many variations of passages available the majority
                                    have suffered alteration in some form generators on the
                                    Internet tend to repeat predefined chunks injected humour
                                    randomised words look even slightly believable.
                                </p>

                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="/about" className="btn btn-warning px-4 py-3 rounded-pill fw-bold">
                                        ABOUT MORE →
                                    </a>

                                    <a href="/booking" className="btn btn-light px-4 py-3 rounded-pill fw-bold">
                                        LEARN MORE →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider >
            
            
            
            
            
            
            
            
            
            */}
        </>
    );
}
