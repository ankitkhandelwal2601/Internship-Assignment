import React from 'react'

function Content1() {
    return (
        <>
            <div className="flex justify-center items-center bg-[#FAF6EF] p-6">
                <div className="mx-8"> {/* Added margin to the left and right */}
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">
                        90%<br />
                        of all orders are produced<br />locally
                    </h2>
                </div>
                <div className="mx-8"> {/* Added margin to the left and right */}
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">
                        90%<br />
                        of orders arrive within 5 days<br />of ordering
                    </h2>
                </div>
                <div className="mx-8"> {/* Added margin to the left and right */}
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">
                        140+<br />
                        print providers across 32<br />countries
                    </h2>
                </div>
            </div>


            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center items-center my-10 mt-16 md:mt-24'>
                {/* Left Section */}
                <div className='order-2 md:order-1 w-full md:w-1/2 flex-1'>
                    <div className="space-y-8">
                        <h1 className='text-5xl font-semibold'>
                            We’re lowering prices by<br />up to 40%
                        </h1>
                        <p className='text-2xl mb-1'>
                            Thanks to our global production network we are<br />lowering prices on dozens of products across<br />select markets
                        </p>

                        <div className="flex space-x-4 mt-4">
                            <a className="btn bg-black text-white rounded-full hover:text-gray-400 hover:bg-black">
                                Order today
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='order-1 w-full md:w-1/2 flex-1 flex justify-center'>
                    <img src="https://a.storyblok.com/f/165154/1280x720/a3d54e1afd/cc-1358_icp-creatives-required_poster-calendar-card_40-_1280x720-2-1.png/m/1000x0/"
                        className='w-92 h-92'
                        alt='Content1 Image'></img>
                </div>
            </div>
        </>
    )
}

export default Content1