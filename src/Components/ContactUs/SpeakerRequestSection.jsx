export default function SpeakerRequestSection() {
	return (
		<section className='mb-16 md:mt-0 lg:min-h-screen bg-white px-4'>
			<div className='bg-gray-50 max-w-4xl mx-auto rounded-2xl w-full'>
				<div className='px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
					<div className='text-center'>
						{/* Main Heading */}
						<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#003A48] mb-8 sm:mb-12 leading-snug'>
							Request A Speaker from The
							<br className='hidden sm:block' />
							<span className='block sm:inline'> Trevor Project</span>
						</h1>

						{/* Description */}
						<div className='max-w-2xl mx-auto mb-10 sm:mb-16'>
							<p className='text-[#003A48] text-sm sm:text-base md:text-lg leading-relaxed'>
								The Trevor Project is proud to share its commitment to serving
								LGBTQ+ youth with companies, NGOs, schools, and more. Please
								complete the form below to submit a speaker request. Due to the
								high volume of requests, we may not be able to respond to each
								one.
							</p>
						</div>

						{/* Request Button */}
						<div>
							<button className='bg-[#003A48] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg text-sm sm:text-base md:text-lg'>
								Request A Speaker
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
