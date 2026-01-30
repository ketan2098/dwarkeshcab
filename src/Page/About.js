import { Container, Row } from "react-bootstrap";
import AboutCab from "../components/common/About";

export default function About() {
    return (
        <Container className="py-5 mt-5">
            <Row>
                <AboutCab />
            </Row>
        </Container>
    );
}

