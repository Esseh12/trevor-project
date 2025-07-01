const ResearchOverview = () => {
	return (
		<section className='bg-[#f4f4fb] text-center text-[#0d0056] px-4 py-16 md:mb-24 '>
			<div className='max-w-2xl mx-auto space-y-6'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
					Ongoing Research Initiatives
				</h2>

				<h3 className='text-xl sm:text-2xl font-semibold mt-4'>
					Project SPARK
				</h3>
				<p className='text-sm sm:text-base italic text-gray-700'>
					(Studying Protective And RisK factors: A Longitudinal Mental Health
					and Experiences Study among LGBTQ+ Young People)
				</p>

				<p className='text-base sm:text-lg text-gray-800'>
					Our two-year longitudinal study is currently collecting data from
					enrolled LGBTQ+ young people to track how their experiences impact
					their mental health over time. Preliminary findings will be released
					later this year!
				</p>

				<h3 className='text-xl sm:text-2xl font-semibold mt-10'>
					U.S. National Survey on the Mental Health of LGBTQ+ Young People
				</h3>
				<p className='text-base sm:text-lg text-gray-800'>
					The 2025 U.S. National Survey on the Mental health of LGBTQ+ Young
					People is now open! If you’re LGBTQ+ and 13–24, we would love to hear
					from you.
				</p>

				<div className='pt-4'>
					<a
						href='#'
						className='inline-block bg-[#ff5722] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-md hover:bg-[#e64a19] transition'>
						Click here to take the survey!
					</a>
				</div>
			</div>
		</section>
	);
};

export default ResearchOverview;
