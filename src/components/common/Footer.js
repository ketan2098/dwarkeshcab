import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp, } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <Container>
                    <Row className="gy-4">
                        {/* BRAND */}
                        <Col lg={4} md={6}>
                            <div className="footer-brand">
                                <h2>
                                    Dwarkesh<span>CAB</span>
                                </h2>
                                <p>
                                    Dwarkesh Cab is a service provider in Gujarat.
                                    We believe in client satisfaction.
                                </p>
                                <p className="copyright">
                                    ©2025 All rights reserved.
                                </p>
                            </div>
                        </Col>

                        {/* QUICK LINKS */}
                        <Col lg={3} md={6}>
                            <h5 className="footer-title">Quick Links</h5>
                            <ul className="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </Col>

                        {/* CONTACT */}
                        <Col lg={3} md={6}>
                            <h5 className="footer-title">Get In Touch</h5>
                            <ul className="footer-contact">
                                <li style={{ cursor: "pointer" }}>
                                    <FaMapMarkerAlt />
                                    Akashvani, kalvadroad road, Rajkot.
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <a href="mailto:dwarkeshcab@gmail.com" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                                        dwarkeshcab@gmail.com
                                    </a>
                                </li>
                                <li style={{ cursor: "pointer" }}>
                                    <FaPhoneAlt />
                                    <a href="tel:+917046648733" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>

                                        +91 70466 48733
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        {/* MAP */}
                        <Col lg={2} md={6}>
                            <h5 className="footer-title">Location</h5>
                            <div className="footer-map">
                                <iframe
                                    title="location"
                                    src="https://www.google.com/maps?q=Raiya%20Road%20Rajkot&output=embed"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/7046648733"
                className="whatsapp-float"
                target="_blank"
                rel="noreferrer"
            >
                <FaWhatsapp />
            </a>
        </>
    );
}

