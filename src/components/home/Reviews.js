import { Container, Row, Col, Card } from "react-bootstrap";

export default function Reviews() {
    return (
        <div className="review-bg py-5">
            <Container>
                <h2 className="text-center text-white mb-4">
                    Our Customer <span className="text-warning">Reviews</span>
                </h2>
                <Row>
                    {["Excellent service", "Very professional drivers", "Highly recommended"].map(
                        (r, i) => (
                            <Col md={4} key={i}>
                                <Card className="text-center">
                                    <Card.Body>
                                        ⭐⭐⭐⭐⭐
                                        <p>{r}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </div>
    );
}
