import Slider from "react-slick";
import surat from "../../assets/surat.webp";
import junagadh from "../../assets/junagadh.webp";
import ahmd from "../../assets/ahmd.webp";
import mumbai from "../../assets/mumbai.webp";
import bhavnagar from "../../assets/bhavnagar.webp";
import Morbi from "../../assets/morbi.webp";
import Somnath from "../../assets/somnath.webp";
import Dwarka from "../../assets/dwarka.webp";
import Baroda from "../../assets/baroda.webp";

const slides = [

    {
        image: ahmd,
        route: "Rajkot To Ahmedabad",
        suv: "₹3500",
        sedan: "₹2000",
    },
    {
        image: Baroda,
        route: "Rajkot To Baroda",
        suv: "₹4500",
        sedan: "₹3500",
    },
    {
        image: mumbai,
        route: "Rajkot To Mumbai",
        suv: "₹13000",
        sedan: "₹9000",
    },
    {
        image: bhavnagar,
        route: "Rajokot To Bhavnagar",
        suv: "₹4300",
        sedan: "₹3000",
    },
    {
        image: surat,
        route: "Rajkot To Surat",
        suv: "₹7000",
        sedan: "₹5500",
    },
    {
        image: junagadh,
        route: "Rajkot To Junagadh",
        suv: "₹2800",
        sedan: "₹1900",
    },
    {
        image: Dwarka,
        route: "Rajkot To Dwarka",
        suv: "₹4500",
        sedan: "₹3500",
    },
    {
        image: Somnath,
        route: "Rajkot To Somnath",
        suv: "₹4500",
        sedan: "₹3500",
    },
    {
        image: Morbi,
        route: "Rajkot To Morbi",
        suv: "₹2500",
        sedan: "₹2000",
    },
];

export default function Packages() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="slider-container py-3">
            <div className="container">

                <h2 className="text-center section-title mb-2">
                    Choose your <span className="text-warning">Way</span>
                </h2>

                <Slider {...settings}>
                    {slides.map((item, index) => (
                        <div key={index} className="p-2">
                            <div className="card route-card h-100 text-center">

                                <img
                                    src={item.image}
                                    alt={item.route}
                                    className="card-img-top"
                                    style={{ borderRadius: "10px" }}
                                />

                                <div className="card-body">
                                    <h6 className="mb-3">{item.route}</h6>

                                    <div className="d-flex justify-content-between mb-2">
                                        <span>SUV Price</span>
                                        <strong>{item.suv}</strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Sedan Price</span>
                                        <strong>{item.sedan}</strong>
                                    </div>

                                    <a
                                        href="tel:+919429826555"
                                        className="btn btn-warning w-100"
                                    >
                                        BOOK NOW →
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
}
