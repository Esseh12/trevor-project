export default function CommemorativeGivingMain() {
	const cards = [
		{
			title: 'Give a Meaningful Gift',
			description:
				'Make a one-time or monthly tribute gift as a way to honor and celebrate the life of your loved one.',
			buttonText: 'Make a Gift',
		},
		{
			title: 'Create a Commemorative Fund',
			description:
				'Honor the life of your loved one by creating a tribute fundraiser for family and friends to support.',
			buttonText: 'Start a Fund',
		},
		{
			title: 'Leave a Legacy of Hope',
			description:
				'Create a lasting legacy as a champion for LGBTQ+ rights by including Trevor in your will or estate.',
			buttonText: 'Contact Us',
		},
	];

	return (
		<div className=' px-4 py-16'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{cards.map((card, index) => (
						<div
							key={index}
							className='bg-[#40009a] backdrop-blur-sm rounded-2xl p-8 text-center text-white group md:p-12'>
							<h3 className='text-2xl md:text-[26px] leading-[39px] font-semibold mb-8 '>
								{card.title}
							</h3>
							<p className='mb-8 text-xl leading-7.5'>{card.description}</p>
							<button className='bg-white px-8 py-3 rounded-lg transition-colors text-xl leading-7.5 font-semibold text-[#003A48] group-hover:text-white group-hover:bg-[#003a48]'>
								{card.buttonText}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
