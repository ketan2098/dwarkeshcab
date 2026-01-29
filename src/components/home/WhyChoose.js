// src/components/WhyChoose.js
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const data = [
    { title: "Clean Car", items: ["Sanitised", "Odour-Free", "Professionally Cleaned"] },
    { title: "Transparent Billing", items: ["No Hidden Charges", "Simple Pricing"] },
    { title: "Reliable Service", items: ["On Time", "Immediate Driver Details"] },
    { title: "Professional Drivers", items: ["Verified", "Customer-Friendly"] },
];

const steps = [
    {
        no: "01",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
    },
    {
        no: "02",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
    {
        no: "03",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
    },
    {
        no: "04",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
    },
];

export default function WhyChoose() {

    const [active, setActive] = useState(1); // default = 02

    return (
        <>
            <Container className="py-5">





                <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 3rem;
          text-align: center;
        }

        .feature-card {
          border-radius: 20px;
          padding: 30px 24px;
          background: #f8f9fa;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          height: 100%;
          cursor: pointer;
        }

        .feature-card:hover {
          background: #f5c63b;
          color: white !important;
          transform: translateY(-15px);
          box-shadow: 0 30px 60px rgba(255, 140, 0, 0.4);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: inherit;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          font-size: 1rem;
          line-height: 2;
          position: relative;
          padding-left: 24px;
          color: inherit;
        }

        .feature-list li::before {
          content: '•';
          color: #f5c63b;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -4px;
        }

        .feature-card:hover .feature-list li::before {
          color: white;
        }
      `}</style>

                <div className="container py-5">
                    <h2 className="text-center mb-4">
                        Why <span className="text-warning">Dwarkesh Cab?</span>
                    </h2>

                    <div className="row g-4">
                        {/* Card 1: Clean Car */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-card">
                                <h3 className="card-title">Clean Car</h3>
                                <ul className="feature-list">
                                    <li>Sanitised</li>
                                    <li>Odour-Free</li>
                                    <li>Professionally Cleaned</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: Transparent Billing */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-card">
                                <h3 className="card-title">Transparent Billing</h3>
                                <ul className="feature-list">
                                    <li>No Hidden Charges</li>
                                    <li>Simple Pricing</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3: Reliable Service */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-card">
                                <h3 className="card-title">Reliable Service</h3>
                                <ul className="feature-list">
                                    <li>On Time</li>
                                    <li>Immediate Driver Details</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 4: Professional Drivers */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="feature-card">
                                <h3 className="card-title">Professional Drivers</h3>
                                <ul className="feature-list">
                                    <li>Verified</li>
                                    <li>Customer-Friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>

    );
}
