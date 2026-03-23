import Slider from "react-slick";


const testimonialsData = [
    {
        name: "Amit Shah",
        role: "Customer",
        review:
            "Great experience! The service was smooth, reliable, and exactly what I needed. Highly recommended for anyone looking for quality.",
    },
    {
        name: "Priya Patel",
        role: "Customer",
        review:
            "Very user-friendly and efficient. I was impressed with how easy everything was from start to finish. Will definitely use it again.",
    },
    {
        name: "Rahul Mehta",
        role: "Customer",
        review:
            "Excellent support and fast service. Everything worked perfectly and exceeded my expectations. Truly a great experience.",
    },
    {
        name: "Neha Verma",
        role: "Customer",
        review:
            "Really impressed with the overall experience. Everything was quick, smooth, and hassle-free. Definitely worth trying!",
    },
    {
        name: "Arjun Kumar",
        role: "Customer",
        review:
            "Super convenient and reliable service. It saved me a lot of time, and the quality was top-notch. Highly satisfied!",
    },
    {
        name: "Sneha Iyer",
        role: "Customer",
        review:
            "Clean design and easy to use. The entire process felt seamless, and the results were exactly what I expected.",
    },
];

const Testimonials = () => {
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
        <section className="testimonial-section text-center text-white py-5">
            <div className="container">
                <p className="text-warning text-uppercase small">Testimonials</p>
                <h2 className="fw-bold mb-5">
                    What People Say <span className="text-warning">Say's</span>
                </h2>

                <Slider {...settings}>
                    {/* <div className="row g-4"> */}

                    {testimonialsData.map((item, index) => (

                        <div className="col-md-6 col-lg-3 p-2" key={index}>
                            <div className="testimonial-card p-4">

                                {/* Avatar */}
                                {/* Avatar */}
                                <div className="d-flex align-items-center mb-3">
                                    <div className="avatar-initials me-3">
                                        {item.name
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")}
                                    </div>

                                    <div className="text-start">
                                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                                        <small className="text-warning">{item.role}</small>
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="testimonial-text">
                                    There are many variations of words suffered available to the
                                    have majority but the majority suffer to alteration injected
                                    hidden the middle text.
                                </p>

                                {/* Stars */}
                                <div className="text-warning">
                                    ★★★★★
                                </div>

                                {/* Quote Icon */}
                                <span className="quote-icon">❝</span>
                            </div>
                        </div>
                    ))}

                    {/* </div> */}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;