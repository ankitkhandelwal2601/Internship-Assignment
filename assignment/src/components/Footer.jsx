import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <footer className="footer bg-black text-white border-base-300 border-t">
                    <aside className="grid-flow-col items-center">
                        <img
                            src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
                            style={{ height: '30px', width: '100px' }}
                            alt="Gelato Logo"
                        />
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">

                        <div className="grid grid-flow-col gap-4">
                            <p>Find Gelato on: </p>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.347 3.608 1.322.974.975 1.26 2.242 1.322 3.608.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.347 2.633-1.322 3.608-.975.974-2.242 1.26-3.608 1.322-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.347-3.608-1.322-.974-.975-1.26-2.242-1.322-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.85C2.295 5.784 2.58 4.517 3.555 3.543c.975-.975 2.242-1.26 3.608-1.322C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.667 0 8.271.014 7.001.072 5.631.134 4.345.42 3.371 1.395c-.975.975-1.26 2.242-1.322 3.608-.058 1.267-.072 1.663-.072 4.95s.014 3.683.072 4.95c.062 1.366.347 2.633 1.322 3.608.974.975 2.26 1.26 3.608 1.322 1.267.058 1.663.072 4.95.072s3.683-.014 4.95-.072c1.366-.062 2.633-.347 3.608-1.322.975-.975 1.26-2.242 1.322-3.608.058-1.267.072-1.663.072-4.95s-.014-3.683-.072-4.95c-.062-1.366-.347-2.633-1.322-3.608-.975-.975-2.242-1.26-3.608-1.322C15.683.014 15.287 0 12 0z"
                                    ></path>
                                    <path
                                        d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.327A4.165 4.165 0 0 1 7.835 12 4.165 4.165 0 0 1 12 7.835 4.165 4.165 0 0 1 16.165 12 4.165 4.165 0 0 1 12 16.165zm4.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                                    ></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                    ></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path
                                        d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.76-1.75 1.76zm12.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.74 1.37-1.51 2.82-1.51 3.01 0 3.57 1.98 3.57 4.56v4.72z"
                                    ></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                    ></path>
                                </svg>
                            </a>

                        </div>
                    </nav>
                </footer>
                <footer className="footer bg-black text-white p-10">
                    <nav>
                        <h6 className="text-left">
                            Gelato has created the world's largest network for local production<br />and distribution of customized products.
                            Together we bring<br />creativity to life -
                            and into business.
                        </h6>
                        <button className="btn bg-white text-black border border-black rounded-full w-28 py-0.5 px-2">
                            Get started
                        </button>


                        <h6 className="text-left">
                            Get the app
                        </h6>
                        <div className="flex items-center space-x-4">
                            <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="Badge 1" />
                            <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="Badge 2" />
                        </div>

                    </nav>
                    <nav className="mb-3">
                        <h6 className="footer-title text-white text-xs">Print on demand</h6>
                        <a className="link link-hover text-xs mb-0.5">What is print on demand?</a>
                        <a className="link link-hover text-xs mb-0.5">Product catalog</a>
                        <a className="link link-hover text-xs mb-0.5">Shipping and delivery</a>
                        <a className="link link-hover text-xs mb-0.5">Dropshipping products</a>
                        <a className="link link-hover text-xs mb-0.5">Pro sellers</a>
                        <a className="link link-hover text-xs mb-0.5">White label products</a>
                        <a className="link link-hover text-xs mb-0.5">Returns policy</a>
                        <a className="link link-hover text-xs mb-0.5">Global, yet local</a>
                        <a className="link link-hover text-xs mb-0.5">Sustainability</a>
                        <a className="link link-hover text-xs mb-0.5">Support</a>
                    </nav>
                    <nav className="mb-3">
                        <h6 className="footer-title text-white text-xs">Integrations</h6>
                        <a className="link link-hover text-xs mb-0.5">Shopify</a>
                        <a className="link link-hover text-xs mb-0.5">Etsy</a>
                        <a className="link link-hover text-xs mb-0.5">WooCommerce</a>
                        <a className="link link-hover text-xs mb-0.5">Wix</a>
                        <a className="link link-hover text-xs mb-0.5">Squarespace</a>
                        <a className="link link-hover text-xs mb-0.5">BigCommerce</a>
                        <a className="link link-hover text-xs mb-0.5">API</a>
                    </nav>
                    <nav className="mb-3">
                        <h6 className="footer-title text-white text-xs">Start selling</h6>
                        <a className="link link-hover text-xs mb-0.5">Embroidery</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand t-shirts</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand hoodies</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand posters</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand canvas</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand calendars</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand mugs</a>
                        <a className="link link-hover text-xs mb-0.5">Global, yet local</a>
                        <a className="link link-hover text-xs mb-0.5">Sustainability</a>
                        <a className="link link-hover text-xs mb-0.5">Support</a>
                        <a className="link link-hover text-xs mb-0.5">Shopify</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand Europe</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand UK</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand France</a>
                        <a className="link link-hover text-xs mb-0.5">Print on demand Canada</a>
                        <a className="link link-hover text-xs mb-0.5">Merch maker</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white text-xs">Company</h6>
                        <a className="link link-hover text-xs mb-0.5">GelatoConnect</a>
                        <a className="link link-hover text-xs mb-0.5">About Gelato</a>
                        <a className="link link-hover text-xs mb-0.5">Leadership team</a>
                        <a className="link link-hover text-xs mb-0.5">Board & investors</a>
                        <a className="link link-hover text-xs mb-0.5">Newsroom</a>
                        <a className="link link-hover text-xs mb-0.5">Blog</a>
                        <a className="link link-hover text-xs mb-0.5">Customer Stories</a>
                        <a className="link link-hover text-xs mb-0.5">Partners</a>
                        <a className="link link-hover text-xs mb-0.5">Careers</a>
                        <a className="link link-hover text-xs mb-0.5">Affiliates program</a>
                    </nav>
                </footer>
                <footer className="footer bg-black text-white border-base-300 px-10">
                    <aside className="grid-flow-col items-center">
                        <img
                            src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
                            style={{ height: '30px', width: '100px' }}
                            alt="Gelato Logo"
                        />
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <button className="btn bg-transparent text-white border border-white w-32 py-0.5 hover:bg-transparent hover:text-white hover:border-white">
                            English (India)
                        </button>
                    </nav>
                </footer>
            </div>
        </>
    )
}

export default Footer
