const CelebratePride = () => {
	return (
		<section className='max-w-7xl mx-auto py-24 flex items-center justify-center flex-col gap-52'>
			{/* Top section */}
			<div className='bg-[#ECF2FF] flex flex-col justify-center items-center gap-6 p-12 w-4xl h-[70vh] rounded-xl text-[#101066]'>
				<h1 className='font-semibold text-[40px] leading-12'>
					Pride Belongs Here
				</h1>
				<p className='max-w-xl text-center text-[22px] leading-7'>
					LGBTQ+ young people deserve to feel pride in who they are. By showing
					up as allies and supporters, we’re letting LGBTQ+ young people
					everywhere know that they’re seen and valued.
				</p>
				<button className='bg-[#003A48] text-white rounded-lg px-8 py-4 text-[20px] font-bold'>
					Celebrate Pride
				</button>
			</div>

			{/* Bottom section */}
			<div className='text-[#101066] text-center w-3xl'>
				<h1 className='font-semibold text-7xl leading-20'>
					The Trevor Project is here for you,
					<span className='font-semibold text-[90px] leading-24 caveat block'>
						day or night.
					</span>
				</h1>
				<p className='text-[30px] leading-10 mt-6'>
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
