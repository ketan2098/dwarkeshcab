import { Container, Row, Col, Card, Button } from "react-bootstrap";
import dzire from "../../assets/dzire.webp"; // Example image path
import ertiga from "../../assets/ertiga.webp"; // Example image path
import innova from "../../assets/innova.webp"; // Example image path
import kia from "../../assets/kia.webp"; // Example image path
import tempo from "../../assets/tempo.webp"; // Example image path

const taxiData = [
    {
        title: "Innova Crysta",
        price: "18/km",
        img: innova,
    },
    {
        title: "Kia Carens",
        price: "14/km",
        img: kia,
    },
    {
        title: "Ertiga",
        price: "12/km",
        img: ertiga,
    },
    {
        title: "Swift Dezire",
        price: "10/km",
        img: dzire,
    },
    {
        title: "Tempo Traveller",
        price: "24/km",
        img: tempo,
    },
];

export default function TaxiCards() {
    return (
        <div className="py-5 taxi-card-section">
            <Container>
                <Row className="g-4">
                    <div className="text-center mb-5 section-header">
                        <span className="section-subtitle">Our Cars</span>

                        <h2 className="section-title mt-2">
                            Let's Check Available
                        </h2>

                        <div className="section-underline"></div>
                    </div>
                    {taxiData.map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={index}>
                            <Card className="taxi-card h-100 text-center">
                                <div className="taxi-img-wrapper">
                                    <img src={item.img} alt="Taxi" />
                                </div>

                                <Card.Body>
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <p className="price-text">{item.price}</p>

                                    <div className="divider"></div>
                                    <Button className="book-btn" onClick={() => window.location.href = 'tel:+917046648733'}>
                                        BOOK TAXI NOW →
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
