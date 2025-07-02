const CelebratePride = () => {
	return (
		<section className='max-w-7xl mx-auto px-4 py-20 flex flex-col items-center gap-24 sm:gap-32 mt-26 md:mt-36'>
			{/* Top section */}
			<div className='bg-[#ECF2FF] flex flex-col justify-center items-center gap-6 p-6 sm:p-10 lg:p-12 w-full max-w-4xl rounded-xl text-[#101066]'>
				<h1 className='font-semibold text-3xl sm:text-4xl lg:text-[40px] leading-snug text-center'>
					Pride Belongs Here
				</h1>
				<p className='max-w-xl text-center text-base sm:text-lg lg:text-[22px] leading-relaxed'>
					LGBTQ+ young people deserve to feel pride in who they are. By showing
					up as allies and supporters, we’re letting LGBTQ+ young people
					everywhere know that they’re seen and valued.
				</p>
				<button className='bg-[#003A48] text-white rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-[20px] font-bold'>
					Celebrate Pride
				</button>
			</div>

			{/* Bottom section */}
			<div className='text-[#101066] text-center w-full max-w-3xl px-4'>
				<h1 className='font-semibold text-3xl md:text-[60px] leading-9 md:leading-[70px]'>
					The Trevor Project is here for you,
					<span className='font-semibold block caveat text-4xl sm:text-6xl lg:text-[85px] leading-tight mt-1'>
						day or night.
					</span>
				</h1>
				<p className='text-base sm:text-lg lg:text-[26px] leading-relaxed sm:leading-9 lg:leading-10 mt-6'>
					The Trevor Project is the leading suicide prevention and crisis
					intervention nonprofit organization for LGBTQ+ young people. We
					provide information & support to LGBTQ+ young people 24/7, all year
					round.
				</p>
			</div>
		</section>
	);
};

export default CelebratePride;
