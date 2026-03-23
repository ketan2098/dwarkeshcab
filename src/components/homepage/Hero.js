import React from "react";
import bannerImg from "../../assets/banner.png";

export default function Hero() {
    return (
        <section
            className="home-banner py-5"
            style={{ backgroundColor: "#ffd000" }}
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
                        <h1 className="fw-bold display-6">
                            Earn. Connect.<br />Contribute to Society
                        </h1>

                        <p className="mt-3 text-dark">
                            Partner with us, drive your car, and earn more.<br />
                            Experience a smarter way to grow.
                        </p>

                        <a
                            href="tel:+919429826555"
                            className="btn btn-dark px-4 py-2 mt-3"
                        >
                            SIGN UP NOW
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img
                            src={bannerImg}
                            alt="Car Banner"
                            className="img-fluid banner-car"
                            style={{ maxWidth: "500px" }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
