import { Container, Row, Col } from "react-bootstrap";
import AboutCab from "../components/common/About";

export default function About() {
    return (
        <Container className="py-5 mt-5">
            <Row>
                {/* <Col md={6}>
                    <h2>
                        About <span className="text-warning">Dwarkesh Cab</span>
                    </h2>
                    <p>
                        Dwarkesh Cab is a trusted taxi service provider in Gujarat,
                        offering safe, reliable and affordable cab services.
                    </p>
                    <p>
                        We specialize in airport transfers, one-way trips,
                        round trips and long-distance travel.
                    </p>
                </Col>

                <Col md={6}>
                    <img
                        src="https://images.unsplash.com/photo-1542362567-b07e54358753"
                        className="img-fluid rounded"
                        alt="about cab"
                    />
                </Col> */}
                <AboutCab />

            </Row>
        </Container>
    );
}

