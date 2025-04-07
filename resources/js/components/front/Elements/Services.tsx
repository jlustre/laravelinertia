const Services = () => {
    return (
        <div className="service-contain">
            <div className="service-box">
                <div className="service-image">
                    <img src="assets/svg/product.svg" className="blur-up lazyload" alt="" />
                </div>

                <div className="service-detail">
                    <h5>Every Fresh Products</h5>
                </div>
            </div>

            <div className="service-box">
                <div className="service-image">
                    <img src="assets/svg/delivery.svg" className="blur-up lazyload" alt="" />
                </div>

                <div className="service-detail">
                    <h5>Free Delivery For Order Over $50</h5>
                </div>
            </div>

            <div className="service-box">
                <div className="service-image">
                    <img src="assets/svg/discount.svg" className="blur-up lazyload" alt="" />
                </div>

                <div className="service-detail">
                    <h5>Daily Mega Discounts</h5>
                </div>
            </div>

            <div className="service-box">
                <div className="service-image">
                    <img src="assets/svg/market.svg" className="blur-up lazyload" alt="" />
                </div>

                <div className="service-detail">
                    <h5>Best Price On The Market</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;
