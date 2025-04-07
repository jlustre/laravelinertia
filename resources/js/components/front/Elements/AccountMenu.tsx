import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

const AccountMenu = () => {
    const logoutUrl = '/logout';
    const { auth } = usePage<SharedData>().props;
    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        document.getElementById('logout-form')?.submit();
    };

    return (
        <>
            <div className="delivery-login-box">
                <div className="delivery-icon">
                    <i className="fa-solid fa-user mr-2 border-1 p-2"></i>
                </div>
                <div className="delivery-detail">
                    <h6>{auth.user ? auth.user.name : 'Guest'}</h6>
                    <h5>My Account</h5>
                </div>
            </div>

            <div className="onhover-div onhover-div-login">
                {auth.user ? (
                    <ul className="user-box-name">
                        <li className="product-box-contain">
                            <a href="my-account.html">My Account</a>
                        </li>
                        <li className="product-box-contain">
                            <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li className="product-box-contain">
                            <a href="#">Cart</a>
                        </li>
                        <li className="product-box-contain">
                            <a href="checkout.html">Checkout</a>
                        </li>
                        <li className="product-box-contain">
                            <Link href="#" onClick={handleLogout}>
                                Log Out
                            </Link>
                        </li>
                        <form id="logout-form" action={logoutUrl} method="POST" style={{ display: 'none' }}>
                            <input
                                type="hidden"
                                name="_token"
                                value={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''}
                            />
                        </form>
                    </ul>
                ) : (
                    <ul className="user-box-name">
                        <li className="product-box-contain">
                            <Link href={route('login')}>Login</Link>
                        </li>
                        <li className="product-box-contain">
                            <Link href={route('register')}>Register</Link>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default AccountMenu;
