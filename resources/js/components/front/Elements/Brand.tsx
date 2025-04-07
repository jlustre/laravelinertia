import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const Brand = () => {
    return (
        <>
            <button
                className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#primaryMenu"
            >
                <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars"></i>
                </span>
            </button>
            <Link href={route('home')} className="web-logo nav-logo">
                <img src="assets/images/logo/1.png" className="img-fluid blur-up lazyload" alt="" />
            </Link>
        </>
    );
};

export default Brand;
