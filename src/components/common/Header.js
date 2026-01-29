import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <strong style={{ color: "#FFC107" }}>Dwarkesh</strong>Cab
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>

                    <Button variant="outline-warning" onClick={() => window.location.href = 'tel:+917046648733'}>
                        📞 +91 70466 48733
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
