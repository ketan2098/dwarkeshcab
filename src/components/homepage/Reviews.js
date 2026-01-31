export default function Reviews() {
    const reviews = [
        "Excellent service",
        "Very professional drivers",
        "Highly recommended",
    ];

    return (
        <div className="review-bg py-5">
            <div className="container">
                <h2 className="text-center text-white mb-4">
                    Our Customer <span className="text-warning">Reviews</span>
                </h2>

                <div className="row">
                    {reviews.map((review, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card text-center h-100">
                                <div className="card-body">
                                    <div className="mb-2">⭐⭐⭐⭐⭐</div>
                                    <p className="mb-0">{review}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
