import React from "react";

function Responsive() {
    const sliderOneText = {
        head: "BOOK TAXI FOR YOUR RIDE",
        subHead: "WELCOME TO Dwarkesh cab!",
        desc: "There are many variations of passages available the majority have suffered alteration in some form generators on the Internet tend to repeat predefined chunks injected humour randomised words look even slightly believable.",
    }
    const sliderTwoText = {
        head: "RELIABLE TAXI SERVICES",
        subHead: "TRUSTED TAXI COMPANY",
        desc: "There are many variations of passages available the majority have suffered alteration in some form generators on the Internet tend to repeat predefined chunks injected humour randomised words look even slightly believable.",
    }
    const sliderThreeText = {
        head: "YOUR SAFETY IS OUR PRIORITY",
        subHead: "24/7 CUSTOMER SUPPORT",
        desc: "There are many variations of passages available the majority have suffered alteration in some form generators on the Internet tend to repeat predefined chunks injected humour randomised words look even slightly believable.",
    }
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="banner-slick">


                <div className="banner-slide">
                    <img
                        src={require("../../assets/slider-2.jpg")}
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

                                    <h3 className="banner-title">
                                        BOOK <span>TAXI</span> FOR YOUR RIDE
                                    </h3>

                                    <p className="banner-text">
                                        {sliderOneText.desc}
                                    </p>

                                    <div className="d-flex gap-3 flex-wrap">
                                        <a href="tel:7046648733" className="btn btn-warning px-4 py-3 rounded-pill fw-bold">
                                            Book Now →
                                        </a>

                                        {/* <a href="/booking" className="btn btn-light px-4 py-3 rounded-pill fw-bold">
                                            LEARN MORE →
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Responsive;
