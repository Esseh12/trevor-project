const NationalSurvey = () => {
	return (
		<div className='min-h-screen bg-[#f3f3f7]'>
			{/* Main Content */}
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
				{/* National Survey Section */}
				<div className='text-center mb-16 lg:mb-24'>
					<h1 className='text-3xl sm:text-4xl  font-bold text-[#003A48] mb-8 leading-tight'>
						National Survey on the Mental
						<br />
						Health of LGBTQ+ Young People
					</h1>

					<p className='text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed'>
						Amplifying the experiences of more than 18,000 LGBTQ+ young people
						across the U.S., these data underscore the harmful impact that
						anti-LGBTQ+ bullying and politics can have on youth mental health,
						while also giving us a roadmap to better support and uplift the
						LGBTQ+ young people in our lives.
					</p>

					{/* Statistics Cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12'>
						{/* Card 1 */}
						<div className=' p-8 lg:p-10 '>
							<div className='text-5xl lg:text-6xl font-bold text-[#003A48] mb-4'>
								39%
							</div>
							<p className='text-gray-700 text-base lg:text-lg leading-relaxed'>
								of LGBTQ+ young people seriously considered attempting suicide
								in the past year — including 46% of transgender and nonbinary
								young people.
							</p>
						</div>

						{/* Card 2 */}
						<div className='p-8 lg:p-10 '>
							<div className='text-5xl lg:text-6xl font-bold text-[#003A48] mb-4'>
								90%
							</div>
							<p className='text-gray-700 text-base lg:text-lg leading-relaxed'>
								of LGBTQ+ young people said their well-being was negatively
								impacted due to recent politics.
							</p>
						</div>

						{/* Card 3 */}
						<div className=' p-8 lg:p-10 '>
							<div className='text-5xl lg:text-6xl font-bold text-[#003A48] mb-4'>
								54%
							</div>
							<p className='text-gray-700 text-base lg:text-lg leading-relaxed'>
								of transgender and nonbinary young people found their school to
								be gender-affirming, and those who did reported lower rates of
								attempting suicide.
							</p>
						</div>
					</div>

					<button className='bg-[#003A48] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-900 transition-colors duration-300 shadow-lg hover:shadow-xl'>
						See Our Latest Survey
					</button>
				</div>

				{/* 50 State Report Section */}
				<div className='text-center p-8 lg:p-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-[#003A48] mb-8 leading-tight'>
						50 State Report on the Mental
						<br />
						Health of LGBTQ+ Young People
					</h2>

					<p className='text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed'>
						State-level analyses of mental health and suicide risk, access to
						care, impacts of anti-LGBTQ+ victimization and policies, and methods
						to support LGBTQ+ youth – as described by over 18,000 LGBTQ+ young
						people ages 13-24 across the United States themselves.
					</p>

					<button className='bg-[#003A48] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-900 transition-colors duration-300 shadow-lg hover:shadow-xl'>
						See Results for Your State
					</button>
				</div>
			</div>
		</div>
	);
};

export default NationalSurvey;
