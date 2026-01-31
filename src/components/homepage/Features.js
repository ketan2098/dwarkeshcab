import {
    FaShieldAlt,
    FaTaxi,
    FaMoneyBillWave,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        title: "Safety Guarantee",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaShieldAlt />,
    },
    {
        title: "Fast Pickup",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaTaxi />,
    },
    {
        title: "Affordable Rate",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaMoneyBillWave />,
    },
    {
        title: "24/7 Support",
        desc: "There are many variations of passages of lorem ipsum available.",
        icon: <FaHeadset />,
    },
];

export default function FeatureSection() {
    return (
        <section className="feature-section position-relative">
            <div className="feature-overlay"></div>

            <div className="container position-relative">
                {/* Header */}
                <div className="text-center mb-5">
                    <span className="feature-subtitle d-block mb-2">
                        FEATURE
                    </span>

                    <h2 className="feature-title">
                        Our Awesome Feature
                    </h2>

                    <div className="feature-underline mx-auto"></div>
                </div>

                {/* Cards */}
                <div className="row g-4 justify-content-center">
                    {features.map((item, index) => (
                        <div
                            className="col-lg-3 col-md-6 col-sm-12"
                            key={index}
                        >
                            <div className="feature-card text-center h-100 p-4">

                                <div className="feature-icon mb-3">
                                    {item.icon}
                                </div>

                                <h5 className="fw-bold">
                                    {item.title}
                                </h5>

                                <p className="mb-0">
                                    {item.desc}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Taxi Pattern */}
            <div className="taxi-strip"></div>
        </section>
    );
}
