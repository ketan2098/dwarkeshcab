import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import aboutCarImage from "../../assets/about.png"; // Example image path
import surat from "../../assets/surat.webp"; // Example image path
import junagadh from "../../assets/junagadh.webp"; // Example image path
import ahmd from "../../assets/ahmd.webp"; // Example image path
import mumbai from "../../assets/mumbai.webp"; // Example image path
import bhavnagar from "../../assets/bhavnagar.webp"; // Example image path


const slides = [

    {
        image: mumbai,
        type: "text",
        route: "Jamnagar To Mumbai",
        suv: "₹2500",
        sedan: "₹1800",
    },
    {
        image: ahmd,
        type: "text",
        route: "Jamnagar To Ahmedabad",
        suv: "₹3000",
        sedan: "₹2200",
    },
    {
        image: bhavnagar,
        type: "text",
        route: "Jamnagar To Bhavnagar",
        suv: "₹2700",
        sedan: "₹2000",
    },
    {
        image: surat,
        type: "text",
        route: "Jamnagar To Surat",
        suv: "₹6000",
        sedan: "₹4800",
    },
    {
        image: junagadh,
        type: "text",
        route: "Jamnagar To Junagadh",
        suv: "₹6000",
        sedan: "₹4800",
    },

];

export default function Packages() {
    // const settings = {
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 4,
    //     // slidesToScroll: 1,
    //     responsive: [
    //         { breakpoint: 992, settings: { slidesToShow: 2 } },
    //         { breakpoint: 576, settings: { slidesToShow: 1 } },
    //     ],
    // };



    var settings = {
        dots: false,
        infinite: true,
        speed: 500, // Adjust speed as needed
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false, // Show navigation arrows
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1500, // Set autoplay speed (in milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="slider-container mx-3">
                {/* <Slider {...settings}>
                    {slides.map((item, index) => (
                        <div key={index} className="px-3">
                            <Card className="route-card">
                                <img src={aboutCarImage} alt="Blog" />
                                <Card.Body>
                                    <h4>{item.route}</h4>
                                    <div className="price-row">
                                        <span>SUV Price</span>
                                        <strong>{item.suv}</strong>
                                    </div>
                                    <div className="price-row">
                                        <span>Sedan Price</span>
                                        <strong>{item.sedan}</strong>
                                    </div>
                                    <Button className="read-btn">READ MORE →</Button>

                                </Card.Body>
                            </Card>

                        </div>
                    ))}
                </Slider> */}

                <div
                    className=''
                    style={{ margin: "0 auto", textAlign: "-webkit-center" }}>
                    <h2 className="text-center section-title mb-4">
                        Choose your <span className="text-warning">Way</span>
                    </h2>
                    <div className='row' style={{ overflow: "hidden" }}>
                        <Slider {...settings}>
                            {slides.map((item, index) => (
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                    className="p-1"
                                >
                                    <Card className="route-card">
                                        <img src={item.image} alt="Blog" style={{ borderRadius: "10px" }} />
                                        <Card.Body>
                                            <h6>{item.route}</h6>
                                            <div className="price-row">
                                                <span>SUV Price</span>
                                                <strong>{item.suv}</strong>
                                            </div>
                                            <div className="price-row">
                                                <span>Sedan Price</span>
                                                <strong>{item.sedan}</strong>
                                            </div>
                                            <a href="tel:7046648733">
                                                <Button className="read-btn">BOOK NOW →</Button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>

        </>
    );
}
{/* <div className="py-4">
    <Slider {...settings}>
        {slides.map((item, index) => (
            <div key={index} className="px-3">
                <Card className="route-card">
                    <img src={aboutCarImage} alt="Blog" />
                    <Card.Body>
                        <h4>{item.route}</h4>
                        <div className="price-row">
                            <span>SUV Price</span>
                            <strong>{item.suv}</strong>
                        </div>
                        <div className="price-row">
                            <span>Sedan Price</span>
                            <strong>{item.sedan}</strong>
                        </div>
                        <Button className="read-btn">READ MORE →</Button>

                    </Card.Body>
                </Card>

            </div>
        ))}
    </Slider>
</div> */}