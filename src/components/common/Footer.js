import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer-area pt-5 pb-4 bg-dark text-light">
                <div className="container">
                    <div className="row gy-4">

                        {/* BRAND */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-brand">
                                <h2>
                                    Dwarkesh<span className="text-warning">CAB</span>
                                </h2>
                                <p className="text-light">
                                    Dwarkesh Cab is a service provider in Gujarat.
                                    We believe in client satisfaction.
                                </p>
                                <p className="copyright mb-0 text-light">
                                    © 2025 All rights reserved.
                                </p>
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="col-lg-3 col-md-6 text-light">
                            <h5 className="footer-title">Quick Links</h5>
                            <ul className="list-unstyled footer-links">
                                <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                                <li><a href="/about" className="text-light text-decoration-none">About</a></li>
                                <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
                                <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div className="col-lg-3 col-md-6 text-light">
                            <h5 className="footer-title">Get In Touch</h5>
                            <ul className="list-unstyled footer-contact">
                                <li className="mb-2 text-light">
                                    <FaMapMarkerAlt className="me-2" />
                                    Akashvani, Kalavad Road, Rajkot
                                </li>

                                <li className="mb-2 text-light">
                                    <FaEnvelope className="me-2" />
                                    <a
                                        href="mailto:dwarkeshcab@gmail.com"
                                        className="text-light text-decoration-none"
                                    >
                                        dwarkeshcab@gmail.com
                                    </a>
                                </li>

                                <li className="text-light">
                                    <FaPhoneAlt className="me-2" />
                                    <a
                                        href="tel:+917046648733"
                                        className="text-light text-decoration-none"
                                    >
                                        +91 70466 48733
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* MAP */}
                        <div className="col-lg-2 col-md-6">
                            <h5 className="footer-title">Location</h5>
                            <div className="footer-map">
                                <iframe
                                    title="location"
                                    src="https://www.google.com/maps?q=Raiya%20Road%20Rajkot&output=embed"
                                    loading="lazy"
                                    className="w-100 rounded"
                                    style={{ height: "150px", border: 0 }}
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/917046648733"
                className="whatsapp-float"
                target="_blank"
                rel="noreferrer"
            >
                <FaWhatsapp />
            </a>
        </>
    );
}
