import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">

                {/* BRAND */}
                <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
                    <span style={{ color: "#FFC107" }}>Dwarkesh</span>Cab
                </Link>

                {/* TOGGLER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENU */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
                        </li>

                    </ul>

                    {/* CALL BUTTON */}
                    <a
                        href="tel:+919429826555"
                        className="btn btn-outline-warning"
                        onClick={closeNavbar}
                    >
                        📞 +91 94298 26555
                    </a>
                </div>

            </div>
        </nav>
    );
}