import { usePage } from '@inertiajs/react';
import AccountMenu from './Elements/AccountMenu';
import AllCategories from './Elements/AllCategories';
import Brand from './Elements/Brand';
import CartList from './Elements/CartList';
import CurrencyOptions from './Elements/CurrencyOptions';
import DealToday from './Elements/DealToday';
import LanguageOptions from './Elements/LanguageOptions';
import LocationDropdown from './Elements/LocationDropdown';
import MiddleNav from './Elements/MiddleNav';
import NotificationSlider from './Elements/NotificationSlider';
import SearchBox from './Elements/SearchBox';
import WishList from './Elements/WishList';

const PageHeader = () => {
    const { company } = usePage().props;

    return (
        <header className="pb-md-4 pb-0">
            <div className="header-top">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 d-xxl-block d-none">
                            <div className="top-left-header">
                                <i className="iconly-Location icli text-white"></i>
                                <span className="text-white">{company.address}</span>
                            </div>
                        </div>
                        <NotificationSlider />
                        <div className="col-lg-3">
                            <ul className="about-list right-nav-about">
                                <li className="right-nav-list">
                                    <LanguageOptions />
                                </li>

                                <li className="right-nav-list">
                                    <CurrencyOptions />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-nav top-header sticky-header">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="navbar-top">
                                <Brand />
                                <div className="middle-box">
                                    <LocationDropdown />
                                    <SearchBox />
                                </div>

                                <div className="rightside-box">
                                    <div className="search-full">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-search font-light"></i>
                                            </span>
                                            <input type="text" className="form-control search-type" placeholder="Search here.." />
                                            <span className="input-group-text close-search">
                                                <i data-feather="x" className="font-light"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="right-side-menu">
                                        <li className="right-side">
                                            <div className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <div className="search-box">
                                                        <i className="fa-solid fa-search"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="right-side">
                                            <a href="contact-us.html" className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <i className="fa-solid fa-phone mr-3 border-1 p-2"></i>
                                                </div>
                                                <div className="delivery-detail">
                                                    <h6>24/7 Delivery</h6>
                                                    <h5>{company.phone}</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="right-side">
                                            <WishList />
                                        </li>
                                        <li className="right-side">
                                            <CartList />
                                        </li>

                                        <li className="right-side onhover-dropdown">
                                            <AccountMenu />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="header-nav">
                            <AllCategories />
                            <MiddleNav />
                            <DealToday />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
