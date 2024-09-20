import React from 'react';

function Content3() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center items-center my-10'>
                {/* Right Section */}
                <div className='order-1 md:order-1 w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:pr-8'> {/* Increased right padding for better spacing */}
                    <img
                        src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"
                        className='w-full md:w-92 h-auto' // Adjusted size for better fit
                        alt='Banner Image' />
                </div>

                {/* Left Section */}
                <div className='order-2 md:order-1 w-full md:w-1/2 flex-1'>
                    <div className="space-y-6"> {/* Adjusted spacing between items */}
                        <p className='text-xl font-semibold'> {/* Made the font bold for emphasis */}
                            For print producers
                        </p>
                        <h1 className='text-6xl font-semibold'>
                            GelatoConnect
                        </h1>
                        <p className='text-3xl'>
                            Elevate efficiency, cut costs, and seamlessly<br />automate with our all-in-one software solution<br />for the print industry
                        </p>

                        <div className="flex space-x-4 mt-4">
                            <a className="btn bg-black text-white rounded-full hover:text-gray-400 hover:bg-black">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content3;
