import React from 'react';

export default function ContactUsHero() {
	return (
		<section className='bg-[#003a48] min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8'>
			<div className='max-w-4xl mx-auto text-center'>
				{/* Main Heading */}
				<h1 className='text-4xl sm:text-[46px] font-bold text-white mb-6'>
					Contact Us
				</h1>

				{/* Description Text */}
				<div className='max-w-2xl mx-auto mb-10 sm:mb-12'>
					<p className='text-lg sm:text-xl lg:text-2xl text-white leading-9'>
						If you are an LGBTQ+ young person in need of support, reach out to
						one of our crisis counselors, available 24/7. If you'd like to reach
						out to The Trevor Project for general inquiries, please explore the
						options below. This includes Trevor Project email addresses and
						forms for specific teams.
					</p>
				</div>

				{/* CTA Button */}
				<div className='flex justify-center'>
					<button
						className='bg-[#ff5a3d] text-white font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-lg '
						onClick={() => {
							// Handle button click - could navigate to counselor page
							console.log('Reach a Counselor clicked');
						}}>
						Reach a Counselor
					</button>
				</div>
			</div>
		</section>
	);
}
