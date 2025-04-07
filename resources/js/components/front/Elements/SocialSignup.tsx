const SocialSignup = () => {
    return (
        <>
            <div className="other-log-in">
                <h6>or</h6>
            </div>

            <div className="log-in-button">
                <ul>
                    <li>
                        <a
                            href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                            className="btn google-button w-100"
                        >
                            <img src="assets/images/inner-page/google.png" className="blur-up lazyload" alt="" />
                            Sign up with Google
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" className="btn google-button w-100">
                            <img src="assets/images/inner-page/facebook.png" className="blur-up lazyload" alt="" /> Sign up with Facebook
                        </a>
                    </li>
                </ul>
            </div>
            <div className="other-log-in">
                <h6></h6>
            </div>
        </>
    );
};

export default SocialSignup;
