const actionCards = [
	{
		title: (
			<h1 className='text-[#101066] text-[46px] font-bold leading-[42px]'>
				<span className='caveat text-[52px] font-bold '>Educate</span> yourself.
			</h1>
		),
		description:
			'Explore our trainings and guides to be a better ally for LGBTQ+ young people.',
		buttonText: 'Learn More',
	},
	{
		title: (
			<h1 className='text-[#101066] text-[46px] font-bold leading-[42px]'>
				Make an <span className='caveat text-[52px] font-bold '>impact</span>{' '}
				with a fundraiser.
			</h1>
		),
		description:
			'Engage your community to raise life-saving funds and help bring awareness to Trevor’s mission.',
		buttonText: 'Fundraise Now',
	},
	{
		title: (
			<h1 className='text-[#101066] text-[46px] font-bold leading-[52px]'>
				Make a <span className='caveat text-[52px] font-bold '>lasting</span>{' '}
				impact.
			</h1>
		),
		description:
			'When you make a transformational legacy gift, you make an investment for generations to come.',
		buttonText: 'Learn How',
	},
	{
		title: (
			<h1 className='text-[#101066] text-[46px] font-bold leading-[42px]'>
				<span className='caveat text-[52px] font-bold '>Volunteer</span> your
				time.
			</h1>
		),
		description:
			'Our volunteer support teams are the most vital force behind everything we do. Take a look at our opportunities to become a trained Trevor counselor.',
		buttonText: 'Volunteer Now',
	},
];

const GradientCards = () => {
	return (
		<section className='bg-[#f7f7f7] py-16 px-4'>
			<div className='max-w-7xl mx-auto md:max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8'>
				{actionCards.map((card, index) => (
					<div
						key={index}
						className='rounded-xl bg-gradient-to-b from-[#fe866d] through-[#fed685] to-[#fee8a5] text-[#1b1464] px-5 sm:px-6 py-8 sm:py-10 flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[620px]'>
						{/* Title */}
						<div className='mb-4 sm:mb-6 text-center'>{card.title}</div>

						{/* Description */}
						<p className='text-sm sm:text-base mb-6 leading-relaxed max-w-sm text-center'>
							{card.description}
						</p>

						{/* CTA Button */}
						<button className='bg-[#130C54] text-white font-semibold text-sm sm:text-base px-5 py-2 rounded-md hover:bg-[#1f1b6b] transition'>
							{card.buttonText}
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default GradientCards;
