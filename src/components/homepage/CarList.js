const cars = [
    {
        name: "Toyota Innova",
        price: "₹19 / KM",
        img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/car-1867761_960_720.jpg",
    },
    {
        name: "Kia Carens",
        price: "₹15 / KM",
        img: "https://cdn.pixabay.com/photo/2018/03/07/10/39/car-3207122_960_720.jpg",
    },
    {
        name: "Innova Crysta",
        price: "₹18 / KM",
        img: "https://cdn.pixabay.com/photo/2016/11/21/15/47/car-1845653_960_720.jpg",
    },
];

export default function CarList() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">
                Choose your <span className="text-warning">Car</span>
            </h2>

            <div className="row">
                {cars.map((car, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                        <div className="card shadow-sm h-100">

                            <img
                                src={car.img}
                                alt={car.name}
                                className="card-img-top"
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">{car.name}</h5>
                                <strong className="d-block">{car.price}</strong>

                                <a
                                    href="tel:+919429826555"
                                    className="btn btn-warning mt-3 w-100"
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
