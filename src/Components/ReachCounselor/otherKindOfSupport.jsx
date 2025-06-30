const OtherKindOfSupport = () => {
	return (
		<div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
			{/* Main Heading */}
			<div>
				<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-center text-[#101066] leading-tight sm:leading-snug mb-3'>
					Looking for another kind of support?
				</h2>
				<p className='mb-8 sm:mb-12 lg:mb-16 text-[#101066] text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed sm:leading-relaxed md:leading-8 text-center max-w-3xl mx-auto px-2 sm:px-0'>
					If you're not ready to speak to a counselor, you can speak to other
					LGBTQ+ young people or explore answers and information across a
					variety of topics.
				</p>
			</div>

			{/* Cards Container */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
				{/* Volunteer Card */}
				<div className='relative overflow-hidden rounded-xl bg-[linear-gradient(to_bottom,_#ff866d,_#ffc977,_#ffe398)] p-6 sm:p-8 text-white min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px] flex flex-col justify-center items-center'>
					<div className='space-y-4 sm:space-y-6 text-center text-[#101066]'>
						<h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
							Learn About
							<br />
							<span className='caveat text-4xl sm:text-5xl md:text-6xl lg:text-[70px]'>
								friends
							</span>
						</h3>
					</div>

					<button className='bg-[#101066] text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-200 mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl'>
						Learn More
					</button>
				</div>

				{/* Donation Card */}
				<div className='relative overflow-hidden rounded-xl bg-[linear-gradient(to_bottom,_#5d35d2,_#6a57f8,_#6a57f8)] p-6 sm:p-8 text-white min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px] flex flex-col justify-center items-center'>
					<div className='space-y-4 sm:space-y-6 text-center'>
						<h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
							Get answers for
							<br />
							<span className='caveat text-4xl sm:text-5xl md:text-6xl lg:text-[70px]'>
								everything LGBTQ
							</span>
						</h3>
						<p className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-7 md:leading-8 opacity-95 px-2 sm:px-0'>
							Is there something you want to learn more about? Find topics
							you're interested in here.
						</p>
					</div>

					<button className='bg-white text-[#5d35d2] font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl'>
						Get Answers
					</button>
				</div>
			</div>
		</div>
	);
};

export default OtherKindOfSupport;
