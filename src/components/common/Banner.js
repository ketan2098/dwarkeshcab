import React from "react";
import sliderImage from "../../assets/slider-2.jpg";

function Responsive() {
    return (
        <section className="banner-slick py-2">

            <div className="banner-slide">
                <img
                    src={sliderImage}
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
                                    Book your ride in seconds and enjoy safe, affordable, and hassle-free travel with our trusted drivers, available anytime for local and long-distance journeys, ensuring comfort, reliability, and a smooth experience every time you travel with us.
                                </p>

                                <div className="d-flex gap-3 flex-wrap">
                                    <a
                                        href="tel:9429826555"
                                        className="btn btn-warning px-4 py-3 rounded-pill fw-bold"
                                    >
                                        Book Now →
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Responsive;
