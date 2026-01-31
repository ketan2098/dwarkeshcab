import Slider from "react-slick";
import surat from "../../assets/surat.webp";
import junagadh from "../../assets/junagadh.webp";
import ahmd from "../../assets/ahmd.webp";
import mumbai from "../../assets/mumbai.webp";
import bhavnagar from "../../assets/bhavnagar.webp";

const slides = [
    {
        image: mumbai,
        route: "Jamnagar To Mumbai",
        suv: "₹2500",
        sedan: "₹1800",
    },
    {
        image: ahmd,
        route: "Jamnagar To Ahmedabad",
        suv: "₹3000",
        sedan: "₹2200",
    },
    {
        image: bhavnagar,
        route: "Jamnagar To Bhavnagar",
        suv: "₹2700",
        sedan: "₹2000",
    },
    {
        image: surat,
        route: "Jamnagar To Surat",
        suv: "₹6000",
        sedan: "₹4800",
    },
    {
        image: junagadh,
        route: "Jamnagar To Junagadh",
        suv: "₹6000",
        sedan: "₹4800",
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
                                        href="tel:+917046648733"
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
