import theOne from '../../assets/BTO_TypographyLifesavingGift.webp';

const BeTheOne = () => {
	return (
		<section className='bg-white text-center px-4 py-16 lg:py-24'>
			{/* Main hero image */}
			<div className='max-w-4xl md:max-w-md mx-auto'>
				<img
					src={theOne}
					alt='Be the One'
					className='w-full h-auto object-contain'
				/>
			</div>

			{/* Support Text */}
			<div className='max-w-3xl mx-auto mt-10'>
				<h2 className='text-2xl md:text-3xl font-semibold text-[#001F54] mb-4'>
					Support The Trevor Project
				</h2>
				<p className='text-base md:text-lg text-[#001F54] leading-relaxed px-2'>
					LGBTQ+ young people with at least one accepting adult in their life
					report significantly lower rates of attempting suicide. A donation
					ensures young people always have that adult: The Trevor Project can
					connect LGBTQ+ young people to a supportive adult 24/7. Your gift
					allows us to continue our life-saving work.
				</p>
			</div>

			{/* Donate Button */}
			<div className='mt-8'>
				<button className='bg-[#130C54] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#1f1b6b] transition'>
					Donate Now
				</button>
			</div>
		</section>
	);
};

export default BeTheOne;
