const CookieBarSection = () => {
    return (
        <div className="cookie-bar-box">
            <div className="cookie-box">
                <div className="cookie-image">
                    <img src="assets/images/cookie-bar.png" className="blur-up lazyload" alt="" />
                    <h2>Cookies!</h2>
                </div>

                <div className="cookie-contain">
                    <h5 className="text-content">We use cookies to make your experience better</h5>
                </div>
            </div>

            <div className="button-group">
                <button className="btn privacy-button">Privacy Policy</button>
                <button className="btn ok-button">OK</button>
            </div>
        </div>
    );
};

export default CookieBarSection;
