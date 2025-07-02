import img1 from '../../assets/TTP_Icons_Indigo_Fundraising.svg';
import img2 from '../../assets/TTP_Icons_Indigo_Program-Advocacy.svg';
import img3 from '../../assets/TTP_Icons_Indigo_Volunteer.svg';
import img4 from '../../assets/TTP_Icons_Indigo_Work-at-Trevor.svg';

const cardData = [
	{
		img: img1,
		title: 'Be a fundraiser.',
		desc: 'Donate your birthday, or just your social channels to gather friends and loved ones in support of your cause.',
		button: 'Fundraise Now',
	},
	{
		img: img2,
		title: 'Advocate for change.',
		desc: 'We have initiatives happening in all 50 states to change hearts, minds and laws in support of young LGBTQ+ lives.',
		button: 'Learn More',
	},
	{
		img: img3,
		title: 'Volunteer your time.',
		desc: 'Our volunteer support teams are the most vital force behind everything we do. Take a look at our opportunities to become a trained counselor for The Trevor Project.',
		button: 'Volunteer Now',
	},
	{
		img: img4,
		title: 'Work at The Trevor Project.',
		desc: 'We are always looking for talented, dedicated, and kind people to join our team. Take a look at our open roles and reach out!',
		button: 'See Jobs',
	},
];

const Base = () => {
	return (
		<div className='min-h-screen bg-[#40009a]'>
			{/* Hero Section */}
			<div className='text-center py-20 px-4'>
				<h1 className='text-4xl sm:text-5xl font-bold text-white leading-tight'>
					Join The Trevor
					<br />
					Project&apos;s mission for all
					<br />
					young LGBTQ+ lives.
				</h1>
			</div>

			{/* Cards Grid */}
			<div className='max-w-4xl mx-auto px-4 pb-20'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{cardData.map((card, index) => (
						<div
							key={index}
							className='bg-white rounded-xl p-6 sm:p-8 md:py-16 text-center w-full'>
							<div className='mb-6'>
								<div className='flex items-center justify-center mx-auto mb-4'>
									<img
										src={card.img}
										alt={card.title}
										className='w-32 h-32 sm:w-44 sm:h-44 object-contain'
									/>
								</div>
							</div>
							<h2 className='text-2xl sm:text-3xl font-bold text-indigo-900 mb-4'>
								{card.title}
							</h2>
							<p className='text-gray-600 mb-8 text-sm sm:text-base leading-relaxed'>
								{card.desc}
							</p>
							<button className='bg-indigo-900 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors text-sm sm:text-base'>
								{card.button}
							</button>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className='text-center mt-16 px-4'>
					<p className='text-white text-base sm:text-lg font-medium'>
						Learn more about The Trevor Project&apos;s story and mission
					</p>
				</div>
			</div>
		</div>
	);
};

export default Base;
