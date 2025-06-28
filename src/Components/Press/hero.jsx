const Hero = ({
	title = 'News Articles & Press Releases from The Trevor Project',
	subtitle = `We’ve been making real strides in advocacy, education, and crisis
  support for LGBTQ+ young people – find the latest LGBTQ+ news and
  press releases to support your reporting here.`,
	image,
	background = '#003a48',
}) => {
	return (
		<section
			className='min-h-screen py-16 px-4 flex justify-center items-center'
			style={{ background }}>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-40'>
				{/* text content */}
				<div className='text-white space-y-4 max-w-xl text-center md:text-left'>
					<h1 className='text-[32px] md:text-[52px] leading-tight font-bold'>
						{title}
					</h1>
					<p className='text-lg md:text-[22px] leading-relaxed'>{subtitle}</p>
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
