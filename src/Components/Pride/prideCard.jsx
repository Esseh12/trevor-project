const PrideCard = () => {
	return (
		<div className='bg-[#f9c058] py-16'>
			<div className=' w-full max-w-6xl mx-auto px-4 py-12'>
				{/* Cards Container */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Volunteer Card */}
					<div className='relative overflow-hidden rounded-xl bg-[#6d4fe6]  p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
						<div className='space-y-6 text-center '>
							<h3 className='text-3xl md:text-5xl font-bold leading-tight text-white'>
								Make an
								<br />
								<span className='caveat text-[70px]'>impact.</span>
								Create a fundraiser.
							</h3>

							<p className='text-lg md:text-xl leading-[34px] font-semibold text-white'>
								Engage your community to raise life-saving funds and help bring
								awareness to Trevor’s mission.
							</p>
						</div>

						<button className='bg-white text-[#101066] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
							Fundraise Now
						</button>
					</div>

					{/* Donation Card */}
					<div className='relative overflow-hidden rounded-xl bg-[#6d4fe6] p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
						<div className='space-y-6 text-center'>
							<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
								Advocate for
								<br />
								<span className='caveat text-[70px]'>change.</span>
							</h3>
							{/*bg-gradient-to-br from-teal-600 via-teal-700 to-yellow-400  */}
							<p className='text-lg md:text-xl leading-[34px] opacity-95'>
								We have initiatives happening in all 50 states to change hearts,
								minds, and laws in support of young LGBTQ+ lives.
							</p>
						</div>

						<button className='bg-white text-[#003A48] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrideCard;
