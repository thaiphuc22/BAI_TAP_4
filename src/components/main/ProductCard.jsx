// import React from 'react'

const ProductCard = () => {
    return (
        <div>
            <div className="col mb-5">
                <div className="card h-100">
                    {/* Sale badge*/}
                    <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                        Sale
                    </div>
                    {/* Product image*/}
                    <img
                        className="card-img-top"
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                        alt="..."
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* Product name*/}
                            <h5 className="fw-bolder">Special Item</h5>
                            {/* Product reviews*/}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                            </div>
                            {/* Product price*/}
                            <span className="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <a className="btn btn-outline-dark mt-auto" href="#">
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
