const CartList = () => {
    return (
        <div className="onhover-dropdown header-badge">
            <button type="button" className="btn position-relative header-wishlist p-0">
                <i className="fa-solid fa-shopping-cart text-green-600"></i>
                <span className="position-absolute translate-middle badge start-100 top-0">
                    2<span className="visually-hidden">unread messages</span>
                </span>
            </button>
            <div className="onhover-div">
                <ul className="cart-list">
                    <li className="product-box-contain">
                        <div className="drop-cart">
                            <a href="#" className="drop-image">
                                <img src="assets/images/vegetable/product/1.png" className="blur-up lazyload" alt="" />
                            </a>

                            <div className="drop-contain">
                                <a href="#">
                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                </a>
                                <h6>
                                    <span>1 x</span> $80.58
                                </h6>
                                <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="product-box-contain">
                        <div className="drop-cart">
                            <a href="#" className="drop-image">
                                <img src="assets/images/vegetable/product/2.png" className="blur-up lazyload" alt="" />
                            </a>

                            <div className="drop-contain">
                                <a href="#">
                                    <h5>Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                </a>
                                <h6>
                                    <span>1 x</span> $25.68
                                </h6>
                                <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="price-box">
                    <h5>Total :</h5>
                    <h4 className="theme-color fw-bold">$106.58</h4>
                </div>

                <div className="button-group">
                    <a href="#" className="btn btn-sm cart-button">
                        View Cart
                    </a>
                    <a href="checkout.html" className="btn btn-sm cart-button theme-bg-color text-white">
                        Checkout
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartList;
