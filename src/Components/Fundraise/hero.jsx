const Hero = ({
	subtitle = `Take your impact to the next level - join our amazing community of fundraisers and show up for LGBTQ+ young people.`,
	image,
	background = '#003a48',
}) => {
	return (
		<section
			className='min-h-screen py-16 px-4 flex justify-center items-center'
			style={{ background }}>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-40'>
				{/* text content */}
				<div className='text-white space-y-4 max-w-md text-center md:text-left'>
					<h1 className='text-[32px] md:text-[52px] leading-tight font-bold'>
						Your community has{' '}
						<span className='caveat text-5xl sm:text-6xl lg:text-[78px]'>
							power
						</span>
						. Start a fundraiser.
					</h1>
					<p className='text-lg md:text-[22px] leading-relaxed'>{subtitle}</p>
					<button className='bg-white p-5.5 text-[#003a48] font-bold leading-5 text-xl rounded-xl'>
						Become a Fundraiser
					</button>
				</div>

				{/* image content */}
				{image && (
					<div className='w-full max-w-md'>
						<img
							src={image}
							alt='Hero'
							className='rounded-xl w-full object-contain'
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default Hero;
