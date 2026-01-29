// import { Container, Button } from "react-bootstrap";

// export default function Hero() {
//     return (

//         <section className="hero-banner">
//             <div className="container h-100">
//                 <div className="row align-items-center h-100 g-5">
//                     {/* Left: Text Content */}
//                     <div className="col-lg-6 col-md-7 text-center text-md-start">
//                         <h1 className="hero-title">
//                             Earn. Connect.<br />
//                             Contribute to<br />
//                             Society
//                         </h1>
//                         <p className="hero-subtitle mt-4">
//                             Partner with us to drive your own livelihood and more.<br />
//                             Join thousands of drivers earning flexibly every day.
//                         </p>
//                         <button className="btn signup-btn mt-5">
//                             SIGN UP NOW
//                         </button>
//                     </div>

//                     {/* Right: Car Image */}
//                     <div className="col-lg-6 col-md-5 text-center">
//                         <img
//                             src="https://i.imgur.com/0tL9Z3f.png"
//                             alt="CarrGo Taxi Service Yellow Car"
//                             className="hero-car img-fluid"
//                         />
//                     </div>
//                 </div>

//                 {/* Optional: Slider dots at bottom */}
//                 <div className="slider-dots">
//                     <span className="dot active"></span>
//                     <span className="dot"></span>
//                     <span className="dot"></span>
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from "react";
import bannerImg from "../../assets/banner.png";


export default function Hero() {
    return (
        <section className="home-banner" style={{ backgroundColor: "#ffd000" }}>
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
                        <button className="btn btn-dark px-4 py-2 mt-3">
                            SIGN UP NOW
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img
                            src={bannerImg}
                            alt="Car Banner"
                            className="img-fluid banner-car"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
