const DealBoxModalSection = () => {
    return (
        <div className="modal fade theme-modal deal-modal" id="deal-box" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <div>
                            <h5 className="modal-title w-100" id="deal_today">
                                Deal Today
                            </h5>
                            <p className="text-content mt-1">Recommended deals for you.</p>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="deal-offer-box">
                            <ul className="deal-offer-list">
                                <li className="list-1">
                                    <div className="deal-offer-contain">
                                        <a href="/terms" className="deal-contain">
                                            <h5>Terms of Service</h5>
                                        </a>
                                        <a href="/privacy" className="deal-contain">
                                            <h5>Privacy Policy</h5>
                                        </a>
                                        <a href="#" className="deal-image">
                                            <img src="assets/images/vegetable/product/10.png" className="blur-up lazyload" alt="" />
                                        </a>

                                        <a href="#" className="deal-contain">
                                            <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                            <h6>
                                                $52.57 <del>57.62</del> <span>500 G</span>
                                            </h6>
                                        </a>
                                    </div>
                                </li>

                                <li className="list-2">
                                    <div className="deal-offer-contain">
                                        <a href="#" className="deal-image">
                                            <img src="assets/images/vegetable/product/11.png" className="blur-up lazyload" alt="" />
                                        </a>

                                        <a href="#" className="deal-contain">
                                            <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                            <h6>
                                                $52.57 <del>57.62</del> <span>500 G</span>
                                            </h6>
                                        </a>
                                    </div>
                                </li>

                                <li className="list-3">
                                    <div className="deal-offer-contain">
                                        <a href="#" className="deal-image">
                                            <img src="assets/images/vegetable/product/12.png" className="blur-up lazyload" alt="" />
                                        </a>

                                        <a href="#" className="deal-contain">
                                            <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                            <h6>
                                                $52.57 <del>57.62</del> <span>500 G</span>
                                            </h6>
                                        </a>
                                    </div>
                                </li>

                                <li className="list-1">
                                    <div className="deal-offer-contain">
                                        <a href="#" className="deal-image">
                                            <img src="assets/images/vegetable/product/13.png" className="blur-up lazyload" alt="" />
                                        </a>

                                        <a href="#" className="deal-contain">
                                            <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                            <h6>
                                                $52.57 <del>57.62</del> <span>500 G</span>
                                            </h6>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealBoxModalSection;
