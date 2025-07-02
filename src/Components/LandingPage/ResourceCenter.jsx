import React from 'react';

const ResourceCenter = () => {
	return (
		<div>
			<div className='max-w-5xl mx-auto bg-[#6b5df6] py-10 px-4 sm:py-12 sm:px-6 lg:py-28 lg:px-8 rounded-lg'>
				<div className='max-w-2xl mx-auto text-center'>
					{/* Main Headings */}
					<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3'>
						Learn and explore with The Trevor
					</h1>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6'>
						Project&apos;s resource center
					</h2>

					{/* Subtitle */}
					<p className='text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto'>
						Select a topic you want to learn more about.
					</p>

					{/* Topic Buttons */}
					<div className='flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mb-6 sm:mb-8'>
						<button className='bg-white text-[#101066] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium w-full sm:w-auto text-center'>
							Resources for Talking About Suicide
						</button>
						<button className='bg-white text-[#101066] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium w-full sm:w-auto text-center'>
							LGBTQ+ Mental Health Resources
						</button>
					</div>

					{/* Additional Topic */}
					<div className='mb-6 sm:mb-10'>
						<button className='bg-white text-[#101066] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium w-full sm:w-auto'>
							LGBTQ+ Community Resources
						</button>
					</div>

					{/* See More Topics CTA */}
					<div>
						<button className='bg-[#101066] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 w-full sm:w-auto'>
							See More Topics
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourceCenter;
