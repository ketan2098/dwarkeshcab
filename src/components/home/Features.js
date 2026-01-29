import { Container, Row, Col, Card } from "react-bootstrap";
import {
    FaShieldAlt,
    FaTaxi,
    FaMoneyBillWave,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        title: "Safety Guarantee",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaShieldAlt />,
    },
    {
        title: "Fast Pickup",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaTaxi />,
    },
    {
        title: "Affordable Rate",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaMoneyBillWave />,
    },
    {
        title: "24/7 Support",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaHeadset />,
    },
];

export default function FeatureSection() {
    return (
        <div className="feature-section">
            <div className="feature-overlay"></div>

            <Container className="position-relative">
                {/* Header */}
                <div className="text-center mb-5">
                    <span className="feature-subtitle">FEATURE</span>
                    <h2 className="feature-title">Our Awesome Feature</h2>
                    <div className="feature-underline"></div>
                </div>

                {/* Cards */}
                <Row className="g-4 justify-content-center">
                    {features.map((item, index) => (
                        <Col lg={3} md={6} sm={12} key={index}>
                            <Card className="feature-card text-center h-100">
                                <div className="feature-icon">
                                    {item.icon}
                                </div>
                                <h5 className="fw-bold">{item.title}</h5>
                                <p>{item.desc}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Bottom Taxi Pattern */}
            <div className="taxi-strip"></div>
        </div>
    );
}
