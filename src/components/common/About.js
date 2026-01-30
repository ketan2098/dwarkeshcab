import React from "react";
import aboutCarImage from "../../assets/about.png"; // Example image path

export default function AboutCab() {
    return (
        <div class="about-section py-5">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-6 col-md-12 position-relative" style={{ marginBottom: "2rem" }}>
                        <div class="about-img-wrapper position-relative">

                            <img
                                src={aboutCarImage}
                                alt="Taxi Service"
                                class="img-fluid about-car"
                            />

                            <div class="experience-badge text-center">
                                <span>05 Years Of</span>
                                <strong>Quality Service</strong>
                            </div>

                            <div class="about-shape"></div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">

                        <h6 class="section-subtitle text-uppercase fw-bold">
                            About Us
                        </h6>

                        <h2 class="section-title fw-bold">
                            We Provide Trusted <span>Cab Service</span> In The State
                        </h2>

                        <p class="section-text">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by
                            injected humour.
                        </p>

                        <ul class="about-list list-unstyled">
                            {/* ✔ */}
                            <li> At vero eos et accusamus et iusto odio.</li>
                            <li> Established fact that a reader will be distracted.</li>
                            <li> Sed ut perspiciatis unde omnis iste natus sit.</li>
                        </ul>

                        <a href="tel:7046648733" class="btn btn-warning px-4 py-3 rounded-pill fw-bold">
                            Book Now →
                        </a>

                    </div>

                </div>
            </div>
        </div>

    );
}