// src/components/OneWayServices.js

export default function OneWayServices() {
    const routes = [
        "Rajkot → Junagadh",
        "Rajkot → Dwarka",
        "Rajkot → Somnath",
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">
                One Way <span className="text-warning">Cab Services</span>
            </h2>

            <div className="row">
                {routes.map((route, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body text-center">

                                <h5 className="mb-3">{route}</h5>

                                <p className="mb-1">Sedan: ₹1900 – ₹3500</p>
                                <p className="mb-3">SUV: ₹2800 – ₹4500</p>

                                <a
                                    href="tel:+917046648733"
                                    className="btn btn-warning w-100"
                                >
                                    CALL NOW
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
