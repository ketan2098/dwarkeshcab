export default function Contact() {
    return (
        <div className="container py-5 mt-5">
            <div className="row">

                {/* Left Section */}
                <div className="col-md-6">
                    <h2>
                        Contact <span className="text-warning">Dwarkesh Cab</span>
                    </h2>

                    <div className="card p-3 mb-4 border-0 shadow-sm">
                        <p className="mb-2">📍 Rajkot, Gujarat</p>

                        <a
                            href="tel:+917046648733"
                            className="text-decoration-none text-dark mb-2"
                        >
                            📞 +91 70466 48733
                        </a>

                        <a
                            href="mailto:dwarkeshcab@gmail.com"
                            className="text-decoration-none text-dark"
                        >
                            ✉ dwarkeshcab@gmail.com
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Message"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-warning w-100">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
