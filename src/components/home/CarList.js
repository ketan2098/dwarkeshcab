// src/components/CarList.js
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const cars = [
    { name: "Toyota Innova", price: "₹15 / KM", img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/car-1867761_960_720.jpg" },
    { name: "Kia Carens", price: "₹14 / KM", img: "https://cdn.pixabay.com/photo/2018/03/07/10/39/car-3207122_960_720.jpg" },
    { name: "Innova Crysta", price: "₹18 / KM", img: "https://cdn.pixabay.com/photo/2016/11/21/15/47/car-1845653_960_720.jpg" },
];

export default function CarList() {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">
                Choose your <span className="text-warning">Car</span>
            </h2>
            <Row>
                {cars.map((car, i) => (
                    <Col md={4} key={i} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Img variant="top" src={car.img} />
                            <Card.Body className="text-center">
                                <h5>{car.name}</h5>
                                <strong>{car.price}</strong>
                                <Button variant="warning" className="mt-3 w-100">
                                    CALL NOW
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
