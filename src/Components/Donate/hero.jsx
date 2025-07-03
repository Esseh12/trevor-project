import heroImg from '../../assets/EOY2023_Landing_HeroImage.jpg';

const Hero = () => {
	return (
		<section className='relative bg-gray-900 text-white overflow-hidden'>
			{/* Background gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10'></div>

			{/* Hero image */}
			<div className='absolute inset-0'>
				<img
					src={heroImg}
					alt='Young person and older adult sharing a joyful moment'
					className='w-full h-full object-cover'
				/>
			</div>

			{/* Content container */}
			<div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row items-center min-h-screen py-60 md:py-20'>
					{/* Text content */}
					<div className='flex-1 text-center  lg:pr-12 mb-8 lg:mb-0'>
						<h1 className='text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight mb-6 lg:mb-8 md:max-w-xs md:mx-auto'>
							Your support builds a hopeful future for LGBTQ+ young people.
						</h1>

						<div className='mb-8 lg:mb-10'>
							<button className='bg-white text-[#FF5A3D] font-bold px-8 py-4 rounded-lg hover:bg-white/85 transition-colors duration-200 text-xl '>
								Donate Now
							</button>
						</div>
					</div>

					{/* Image space - hidden on mobile since bg image covers it */}
					<div className='flex-1 lg:block hidden'>
						{/* This space is intentionally left for layout balance */}
					</div>
				</div>
			</div>

			{/* Bottom gradient fade */}
			<div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent z-10'></div>
		</section>
	);
};

export default Hero;
