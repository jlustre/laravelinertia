const NewsLetterSection = () => {
    return (
        <section className="newsletter-section section-b-space bg-gray-600">
            <div className="container-fluid-lg">
                <div className="newsletter-box newsletter-box-2">
                    <div className="newsletter-contain py-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                    <div className="newsletter-detail">
                                        <h2>Join our newsletter and get...</h2>
                                        <h5>$20 discount for your first order</h5>
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter Your Email"
                                            />
                                            <i className="fa-solid fa-envelope arrow"></i>
                                            <button className="sub-btn btn-animation">
                                                <span className="d-sm-block d-none">Subscribe</span>
                                                <i className="fa-solid fa-arrow-right icon"></i>
                                            </button>
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

export default NewsLetterSection;
