import React from 'react'

function Content4() {
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center items-center my-10 mt-16 md:mt-24' style={{ backgroundColor: '#FAF6EF' }}>
                {/* Left Section */}
                <div className='order-2 md:order-1 w-full md:w-1/2 flex-1'>
                    <div className="space-y-8">
                        <p className='text-2xl mb-1'>
                            For print on demand sellers
                        </p>
                        <h1 className='text-6xl font-semibold'>
                            Accelerate business growth with<br />innovative design<br />tools and apps
                        </h1>
                        <p className='text-2xl mb-1'>
                            See how our cutting-edge solutions can help you<br />reach new customers and maximize your profits.
                        </p>

                        <div className="flex space-x-4 mt-4">
                            <a className="btn bg-black text-white rounded-full hover:text-gray-400 hover:bg-black">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='order-1 w-full md:w-1/2 flex-1 flex justify-center'>
                    <img
                        src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
                        className='w-92 h-92'
                        alt='Content4 Image'></img>
                </div>
            </div>
        </>
    )
}

export default Content4;
