import React from 'react';

function NavBar() {
    return (
        <div className='container mx-auto z-50 fixed top-0 left-0 right-0'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 absolute left-0">
                            <li>
                                <a className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000">
                                        <path d="M0 0h24v24H0z" fill="none" opacity=".1" />
                                        <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" />
                                    </svg>
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center">IN/INR</a>
                                <ul className="p-2">
                                    <li><a className="flex items-center">Language - IN</a></li>
                                    <li><a className="flex items-center">Currency - INR</a></li>
                                </ul>
                            </li>
                            <li><a className="flex items-center">Cart</a></li>
                            <li><a className="flex items-center">Sign in</a></li>
                        </ul>
                    </div>
                    <img src='https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg' style={{ height: '20px', width: '80px' }} alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" opacity=".1" />
                                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" />
                                </svg>
                                Contact us
                            </a>
                        </li>
                        <li>
                            <details>
                                <summary className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        fill="#000000">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                                    </svg>
                                    IN/INR
                                </summary>
                                <ul className="p-2">
                                    <li><a className="flex items-center">Language - IN</a></li>
                                    <li><a className="flex items-center">Currency - INR</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                                Cart
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                                Sign in
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-black text-white rounded-full hover:text-gray-400 hover:bg-black">Sign up for free</a>
                </div>
            </div>
            <hr className="border-t-2 border-gray-200" />
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <ul className="menu menu-horizontal px-0 space-x-4 flex-nowrap whitespace-nowrap">
                        <li>
                            <details>
                                <summary>Products</summary>
                                <ul className="p-2">
                                    <li><a>Bestsellers</a></li>
                                    <li><a>Mens clothing</a></li>
                                    <li><a>Women clothing</a></li>
                                    <li><a>Kids and baby clothing</a></li>
                                    <li><a>Wall art</a></li>
                                    <li><a>Calendars</a></li>
                                    <li><a>Cards</a></li>
                                    <li><a>Photo books</a></li>
                                    <li><a>Hats</a></li>
                                    <li><a>Phone cases</a></li>
                                    <li><a>Mugs</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Start selling</summary>
                                <ul className="p-2">
                                    <li><a>Print your demand</a></li>
                                    <li><a>Setup your business</a></li>
                                    <li><a>Sell custom products</a></li>
                                    <li><a>Integrations</a></li>
                                    <li><a>Shipping and delivery</a></li>
                                    <li><a>Partner Services</a></li>
                                    <li><a>Custom packaging</a></li>
                                    <li><a>Move your product</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Tools and apps</summary>
                                <ul className="p-2">
                                    <li><a>Tools and apps overview</a></li>
                                    <li><a>Personalization Studio</a></li>
                                    <li><a>Auto File Sync</a></li>
                                    <li><a>Design Maker</a></li>
                                    <li><a>Product creation tools</a></li>
                                    <li><a>Mockup studio</a></li>
                                    <li><a>Price Navigator</a></li>
                                    <li><a>Analytics</a></li>
                                    <li><a>Gelato App</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Pricing</summary>
                                <ul className="p-2">
                                    <li><a>Payments and pricing</a></li>
                                    <li><a>Subscription plans</a></li>
                                    <li><a>Gelato+</a></li>
                                    <li><a>Gelato Gold</a></li>
                                    <li><a>Platinum</a></li>
                                    <li><a>SOffers</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><a>Resource Center</a></li>
                                    <li><a>Gelato Academy</a></li>
                                    <li><a>Customer Stories</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Pro sellers</a></li>
                        <li>
                            <details>
                                <summary>GelatoConnect</summary>
                                <ul className="p-2">
                                    <li><a>Gelato Connect</a></li>
                                    <li><a>Logistics</a></li>
                                    <li><a>Workflow</a></li>
                                    <li><a>Procurement</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="border-t-2 border-gray-200" />
        </div>
    );
}

export default NavBar;
