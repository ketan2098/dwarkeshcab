// src/components/OneWayServices.js
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function OneWayServices() {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">
                One Way <span className="text-warning">Cab Services</span>
            </h2>

            <Row>
                {["Rajkot → Junagadh", "Rajkot → Dwarka", "Rajkot → Somnath"].map(
                    (route, i) => (
                        <Col md={4} key={i} className="mb-4">
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5>{route}</h5>
                                    <p>Sedan: ₹1900 – ₹3500</p>
                                    <p>SUV: ₹2800 – ₹4500</p>
                                    <Button variant="warning" className="w-100" onClick={() => window.location.href = 'tel:+917046648733'}>
                                        CALL NOW
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                )}
            </Row>
        </Container>
    );
}
