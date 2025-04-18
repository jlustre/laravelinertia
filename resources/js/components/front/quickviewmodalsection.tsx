import { useState } from 'react';

const QuickViewModalSection = () => {
    const [selectedSize, setSelectedSize] = useState('');

    return (
        <div className="modal fade theme-modal view-modal" id="view" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header p-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row g-sm-4 g-2">
                            <div className="col-lg-6">
                                <div className="slider-image">
                                    <img src="assets/images/product/category/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="right-sidebar-modal">
                                    <h4 className="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                                    <h4 className="price">$36.99</h4>
                                    <div className="product-rating">
                                        <ul className="rating">
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <span className="ms-2">8 Reviews</span>
                                        <span className="text-danger ms-2">6 sold in last 16 hours</span>
                                    </div>

                                    <div className="product-detail">
                                        <h4>Product Details :</h4>
                                        <p>
                                            Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love. Caramels marshmallow
                                            icing dessert candy canes I love soufflé I love toffee. Marshmallow pie sweet sweet roll sesame snaps
                                            tiramisu jelly bear claw. Bonbon muffin I love carrot cake sugar plum dessert bonbon.
                                        </p>
                                    </div>

                                    <ul className="brand-list">
                                        <li>
                                            <div className="brand-box">
                                                <h5>Brand Name:</h5>
                                                <h6>Black Forest</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="brand-box">
                                                <h5>Product Code:</h5>
                                                <h6>W0690034</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="brand-box">
                                                <h5>Product Type:</h5>
                                                <h6>White Cream Cake</h6>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="select-size">
                                        <h4>Cake Size :</h4>
                                        <select
                                            className="form-select select-form-size"
                                            value={selectedSize} // Use value prop
                                            onChange={(e) => setSelectedSize(e.target.value)} // Add onChange handler
                                        >
                                            <option value="" disabled>
                                                Select Size
                                            </option>
                                            <option value="1.2">1/2 KG</option>
                                            <option value="0">1 KG</option>
                                            <option value="1.5">1/5 KG</option>
                                            <option value="red">Red Roses</option>
                                            <option value="pink">With Pink Roses</option>
                                        </select>
                                    </div>

                                    <div className="modal-button">
                                        <button
                                            onClick={() => {
                                                location.href = '#';
                                            }} // Corrected to use a function
                                            className="btn btn-md add-cart-button icon"
                                        >
                                            Add To Cart
                                        </button>
                                        <button
                                            onClick={() => {
                                                location.href = '#';
                                            }} // Corrected to use a function
                                            className="btn theme-bg-color view-button icon fw-bold btn-md text-white"
                                        >
                                            View More Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModalSection;
