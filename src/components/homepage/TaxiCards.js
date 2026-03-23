import dzire from "../../assets/dzire.webp";
import ertiga from "../../assets/ertiga.webp";
import innova from "../../assets/innova.webp";
import kia from "../../assets/kia.webp";
import tempo from "../../assets/tempo.webp";

const taxiData = [
    { title: "Innova Crysta", price: "₹19 / km", img: innova },
    { title: "Kia Carens", price: "₹15 / km", img: kia },
    { title: "Ertiga SUV", price: "₹13 / km", img: ertiga },
    { title: "Swift Dzire", price: "₹11 / km", img: dzire },
    { title: "Tempo Traveller", price: "₹26 / km", img: tempo },
];

export default function TaxiCards() {
    return (
        <div className="py-5 taxi-card-section">
            <div className="container">

                {/* Section Header */}
                <div className="text-center mb-5 section-header">
                    <span className="section-subtitle">Our Cars</span>
                    <h2 className="section-title mt-2">Let's Check Available</h2>
                    <div className="section-underline"></div>
                </div>

                {/* Cards */}
                <div className="row g-4">
                    {taxiData.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="card taxi-card h-100 text-center">

                                <div className="taxi-img-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid"
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <p className="price-text">{item.price}</p>

                                    <div className="divider"></div>

                                    <a href="tel:+919429826555" className="btn book-btn">
                                        BOOK TAXI NOW →
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
