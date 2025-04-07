import { usePage } from '@inertiajs/react';

const ContactFooter = () => {
    const { company } = usePage().props;
    return (
        <>
            <div className="footer-title">
                <h4>Contact Us</h4>
            </div>

            <div className="footer-contact">
                <ul>
                    <li>
                        <div className="footer-number">
                            <i data-feather="phone"></i>
                            <div className="contact-number">
                                <h6 className="text-content">Hotline 24/7 :</h6>
                                <h5>{company.phone}</h5>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="footer-number">
                            <i data-feather="mail"></i>
                            <div className="contact-number">
                                <h6 className="text-content">Email Address :</h6>
                                <h5>{company.email}</h5>
                            </div>
                        </div>
                    </li>

                    <li className="social-app mb-0">
                        <h5 className="text-content mb-2">Download App :</h5>
                        <ul>
                            <li className="mb-0">
                                <a href="https://play.google.com/store/apps" target="_blank">
                                    <img src="assets/images/playstore.svg" className="blur-up lazyload" alt="" />
                                </a>
                            </li>
                            <li className="mb-0">
                                <a href="https://www.apple.com/in/app-store/" target="_blank">
                                    <img src="assets/images/appstore.svg" className="blur-up lazyload" alt="" />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactFooter;
