import { Link, usePage } from '@inertiajs/react';

const BrandFooter = () => {
    const { company } = usePage().props;
    return (
        <div className="footer-logo">
            <div className="theme-logo">
                <Link href={route('home')}>
                    <img src="assets/images/logo/1.png" className="blur-up lazyload" alt="" />
                </Link>
            </div>

            <div className="footer-logo-contain">
                <p>We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a perfect place for a couple.</p>

                <ul className="address">
                    <li>
                        <i className="fa-solid fa-home"></i>
                        <a href="javascript:void(0)">{company.address}</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="javascript:void(0)">{company.support}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BrandFooter;
