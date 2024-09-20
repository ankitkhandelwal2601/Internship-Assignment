import React from 'react';

function Banner() {
    return (
        <>
            {/* Added margin to push the banner down below the navbar */}
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center items-center my-10 mt-40 md:mt-40'>
                {/* Left Section */}
                <div className='order-2 md:order-1 w-full md:w-1/2 flex-1'>
                    <div className="space-y-8">
                        <h1 className='text-6xl font-semibold'>
                            Print on demand for your ecommerce business
                        </h1>
                        <p className='text-3xl mb-1'>
                            Sign up for free and only pay for what you sell
                        </p>
                        <h6 className='mt-0'>
                            Turn your passion into profit with the world's largest <a href='#' className="underline">print on demand</a> network.
                        </h6>

                        <div className="flex space-x-4 mt-4">
                            <a className="btn bg-black text-white rounded-full hover:text-gray-400 hover:bg-black">
                                Get started for free
                            </a>
                            <a className="btn bg-white text-black border border-black rounded-full hover:bg-gray-200 hover:text-black">
                                See our products
                            </a>
                        </div>
                    </div>

                    <a href='#' className='mt-8 block'>
                        <img src='https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg'
                            style={{ height: '50px', width: '150px' }} />
                    </a>

                    <div className="flex flex-col space-y-1 mt-4">
                        <a className="flex items-center">
                            <img src='https://www.gelato.com/assets/rating-stars/star.svg' alt="Star" className="w-5 h-5" />
                            <img src='https://www.gelato.com/assets/rating-stars/star.svg' alt="Star" className="w-5 h-5" />
                            <img src='https://www.gelato.com/assets/rating-stars/star.svg' alt="Star" className="w-5 h-5" />
                            <img src='https://www.gelato.com/assets/rating-stars/star.svg' alt="Star" className="w-5 h-5" />
                            <img src='https://www.gelato.com/assets/rating-stars/star.svg' alt="Star" className="w-5 h-5" />
                            <h6 className="ml-2 text-lg">4.8/5</h6>
                        </a>
                        <h6 className="mt-1">based on 910 reviews</h6>
                    </div>
                </div>

                {/* Right Section */}
                <div className='order-1 w-full md:w-1/2 flex-1 flex justify-center'>
                    <img src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/" className='w-92 h-92' alt='Banner Image'></img>
                </div>
            </div>

        </>
    );
}

export default Banner;
