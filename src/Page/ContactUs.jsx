import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Contact() {
    return (
        <Container className="py-5 mt-5">
            <Row>
                <Col md={6} className="border-0">
                    <h2>
                        Contact <span className="text-warning">Dwarkesh Cab</span>
                    </h2>

                    <Card className="p-3 mb-4">
                        <p style={{ cursor: "pointer" }}>📍 Rajkot, Gujarat</p>
                        <a href="tel:+917046648733" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>

                            <p>📞 +91 70466 48733</p>
                        </a>
                        <p>
                            <a href="mailto:dwarkeshcab@gmail.com" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                                ✉ dwarkeshcab@gmail.com
                            </a>
                        </p>
                    </Card>
                </Col>

                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="tel" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={3} placeholder="Message" />
                        </Form.Group>

                        <Button variant="warning" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
