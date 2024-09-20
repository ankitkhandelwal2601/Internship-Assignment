import React from 'react';

function Content2() {
    return (
        <>
            <div className="bg-[#FAF6EF] py-10"> {/* Added vertical padding */}
                <div className="flex justify-center items-center mb-8"> {/* Added margin-bottom */}
                    <h1 className="font-bold text-6xl text-center">
                        Why choose Gelato
                    </h1>
                </div>

                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center items-center my-10'> {/* Added vertical margin for overall spacing */}
                    {/* Right Section */}
                    <div className='order-1 md:order-1 w-full md:w-1/2 flex-1 flex justify-center mb-8 md:mb-0 md:pr-4'> {/* Added right padding for spacing */}
                        <img
                            src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
                            className='w-92 h-92' // Adjusted size for better fit
                            alt='Banner Image' />
                    </div>

                    {/* Left Section */}
                    <div className='order-2 md:order-2 w-full md:w-1/2 flex-1 md:pl-4'> {/* Added left padding for spacing */}
                        <div className="space-y-4"> {/* Increased space between items */}
                            <p className='text-2xl mb-2'>
                                ▻ World's largest print-on-demand network
                            </p>
                            <h3 className='mt-0'>
                                140+ print partners in 32 countries. Gelato is a truly global service.
                            </h3>
                            <p className='text-2xl mb-2'>
                                ▻ Sell globally, produce locally
                            </p>
                            <h3 className='mt-0'>
                                Your products are produced close to your customers, wherever they are.
                            </h3>
                            <p className='text-2xl mb-2'>
                                ▻ 100% free editing tools
                            </p>
                            <h3 className='mt-0'>
                                Create your custom products using our suite of free tools.
                            </h3>
                            <p className='text-2xl mb-2'>
                                ▻ 60+ logistics partners
                            </p>
                            <h3 className='mt-0'>
                                Our global network of logistics partners ensures your products are delivered fast.
                            </h3>
                            <p className='text-2xl mb-2'>
                                ▻ High-quality products
                            </p>
                            <h3 className='mt-0'>
                                We partner with the world's leading brands to ensure the best quality products.
                            </h3>
                            <p className='text-2xl mb-2'>
                                ▻ Endless creativity with Shutterstock Images
                            </p>
                            <h3 className='mt-0'>
                                Access millions of images and graphics to create unique products you can sell in your store.
                            </h3>
                            <p className='text-2xl mb-2'>
                                ▻ 1-click integration to the leading ecommerce platforms
                            </p>
                            <h3 className='mt-0'>
                                Connect your store to Gelato using our integrations with Shopify, Etsy, and more.
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Content2;
