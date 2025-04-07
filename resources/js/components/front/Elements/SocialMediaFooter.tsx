const SocialMediaFooter = () => {
    return (
        <div className="social-link">
            <h6 className="text-content">Stay connected :</h6>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://in.pinterest.com/" target="_blank">
                        <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialMediaFooter;
