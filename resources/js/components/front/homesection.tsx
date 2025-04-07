const HomeSection = () => {
    return (
        <section className="home-section pt-2">
            <div className="container-fluid-lg">
                <div className="row g-4">
                    <div className="col-xl-8 ratio_65">
                        <div className="home-contain h-100">
                            <div className="h-100">
                                <img src="assets/images/vegetable/banner/1.jpg" className="bg-img blur-up lazyload" alt="" />
                            </div>
                            <div className="home-detail p-center-left w-75">
                                <div>
                                    <h6>
                                        Exclusive offer <span>30% Off</span>
                                    </h6>
                                    <h1 className="text-uppercase">
                                        Stay home & delivered your <span className="daily">Daily Needs</span>
                                    </h1>
                                    <p className="d-none d-sm-block w-75">
                                        Vegetables contain many vitamins and minerals that are good for your health.
                                    </p>
                                    <button
                                        onClick={() => {
                                            location.href = '#';
                                        }}
                                        className="btn btn-animation mt-xxl-4 home-button mend-auto mt-2"
                                    >
                                        Shop Now <i className="fa-solid fa-right-long icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 ratio_65">
                        <div className="row g-4">
                            <div className="col-xl-12 col-md-6">
                                <div className="home-contain">
                                    <img src="assets/images/vegetable/banner/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                    <div className="home-detail p-center-left home-p-sm w-75">
                                        <div>
                                            <h2 className="text-danger mt-0">
                                                45% <span className="discount text-title">OFF</span>
                                            </h2>
                                            <h3 className="theme-color">Nut Collection</h3>
                                            <p className="w-75">We deliver organic vegetables & fruits</p>
                                            <a href="#" className="shop-button">
                                                Shop Now <i className="fa-solid fa-right-long"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12 col-md-6">
                                <div className="home-contain">
                                    <img src="assets/images/vegetable/banner/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                    <div className="home-detail p-center-left home-p-sm w-75">
                                        <div>
                                            <h3 className="theme-color fw-bold mt-0">Healthy Food</h3>
                                            <h4 className="text-danger">Organic Market</h4>
                                            <p className="organic">Start your daily shopping with some Organic food</p>
                                            <a href="#" className="shop-button">
                                                Shop Now <i className="fa-solid fa-right-long"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
