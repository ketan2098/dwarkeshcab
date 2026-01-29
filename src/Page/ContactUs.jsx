// import React from "react";
// import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export default function ContactUs() {
//     return (
//         <section className="py-5 bg-white">
//             <div className="container">
//                 <div className="row g-5 align-items-start">

//                     {/* LEFT CONTACT INFO */}
//                     <div className="col-lg-4 col-md-12">
//                         <div className="d-flex mb-4">
//                             <FaHome size={28} className="text-warning me-3 mt-1" />
//                             <div>
//                                 <h6 className="fw-bold mb-1">Binghamton, New York</h6>
//                                 <p className="mb-0 text-muted">
//                                     4343 Hinkle Deegan Lake Road
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="d-flex mb-4">
//                             <FaPhoneAlt size={24} className="text-warning me-3 mt-1" />
//                             <div>
//                                 <h6 className="fw-bold mb-1">00 (958) 9865 562</h6>
//                                 <p className="mb-0 text-muted">
//                                     Mon to Fri 9am to 6 pm
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="d-flex">
//                             <FaEnvelope size={24} className="text-warning me-3 mt-1" />
//                             <div>
//                                 <h6 className="fw-bold mb-1">support@colorlib.com</h6>
//                                 <p className="mb-0 text-muted">
//                                     Send us your query anytime!
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT FORM */}
//                     <div className="col-lg-8 col-md-12">
//                         <form>
//                             <div className="row g-4">
//                                 <div className="col-md-6">
//                                     <input
//                                         type="text"
//                                         className="form-control py-3"
//                                         placeholder="Enter your name"
//                                     />
//                                 </div>

//                                 <div className="col-md-6">
//                                     <textarea
//                                         className="form-control py-3"
//                                         rows="6"
//                                         placeholder="Enter Message"
//                                     ></textarea>
//                                 </div>

//                                 <div className="col-md-6">
//                                     <input
//                                         type="email"
//                                         className="form-control py-3"
//                                         placeholder="Enter email address"
//                                     />
//                                 </div>

//                                 <div className="col-md-6"></div>

//                                 <div className="col-md-6">
//                                     <input
//                                         type="text"
//                                         className="form-control py-3"
//                                         placeholder="Enter subject"
//                                     />
//                                 </div>

//                                 <div className="col-12 text-end">
//                                     <button
//                                         type="submit"
//                                         className="btn btn-warning px-5 py-3 fw-bold text-white"
//                                     >
//                                         SEND MESSAGE
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }


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
