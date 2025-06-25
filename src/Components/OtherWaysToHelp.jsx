const OtherWaysToHelp = () => {
	return (
		<div className='w-full max-w-6xl mx-auto px-4 py-12'>
			{/* Main Heading */}
			<h2 className='text-4xl md:text-[46px] font-bold text-center text-[#101066] leading-14 mb-12 lg:mb-16'>
				There are other ways to help.
			</h2>

			{/* Cards Container */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Volunteer Card */}
				<div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-600 via-teal-700 to-yellow-400 p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
					<div className='space-y-6 text-center'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							Train to be a<br />
							<span className='caveat text-[70px]'>counselor</span>
						</h3>

						<p className='text-lg md:text-xl leading-[34px] opacity-95'>
							One volunteer can help ensure LGBTQ+ young people have someone to
							turn to 24/7.
						</p>
					</div>

					<button className='bg-white text-[#003A48] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
						Volunteer Now
					</button>
				</div>

				{/* Donation Card */}
				<div className='relative overflow-hidden rounded-xl bg-gradient-to-bl from-yellow-400 via-teal-700 to-teal-600 p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
					<div className='space-y-6 text-center'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							Your donation will
							<br />
							<span className='caveat text-[70px]'>save lives.</span>
						</h3>
						{/*bg-gradient-to-br from-teal-600 via-teal-700 to-yellow-400  */}
						<p className='text-lg md:text-xl leading-[34px] opacity-95'>
							Every day, LGBTQ+ young people reach out for mental health
							support. When you donate to Trevor, you ensure our volunteers can
							continue to be there for them.
						</p>
					</div>

					<button className='bg-white text-[#003A48] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
						Donate Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default OtherWaysToHelp;
