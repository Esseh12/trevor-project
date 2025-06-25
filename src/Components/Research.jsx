import { useState } from 'react';

const ResearchComponent = () => {
	const [visibleCount, setVisibleCount] = useState(6);
	const [sortBy, setSortBy] = useState('newest');
	const [showSortDropdown, setShowSortDropdown] = useState(false);

	const researchData = [
		{
			title: 'Positive Events and Mental Health Among LGBTQ+ Young People',
			date: 'JUN. 18, 2025',
			preview:
				'Several recent positive events - such as doing enjoyable things for oneself, feeling more comfortable financially, receiving positive feedback at scho...',
		},
		{
			title:
				'Mental Health Diagnoses and Access to Care Among LGBTQ+ Young People',
			date: 'MAY. 14, 2025',
			preview:
				'Nearly two-thirds (65%) of participants reported having at least one mental health diagnosis. The most commonly reported were anxiety disorders...',
		},
		{
			title:
				'The Impact of Houselessness and Food Insecurity on the Mental Health of LGBTQ+ Young People',
			date: 'APR. 23, 2025',
			preview:
				'LGBTQ+ young people with a history of houselessness had over twice the rate of attempting suicide in the past year than those who have never be...',
		},
		{
			title:
				'The Mental Health and Experiences of LGBTQ+ Young People in the Rural U.S.',
			date: 'MAR. 19, 2025',
			preview:
				'LGBTQ+ young people living in rural areas were half as likely as those in non-rural areas to say their community was supportive of LGBTQ+ people (34%...',
		},
		{
			title:
				'The Role of Parent and Caregiver Support on Perceived Life Expectancy and Life Satisfaction',
			date: 'FEB. 26, 2025',
			preview:
				'Black transgender and nonbinary young people with parents and caregivers who supported their LGBTQ+ identity reported a greater sense of life...',
		},
		{
			title:
				'The Relationship Between Parental and Caregiver Support and Suicide Among LGBTQ+ Youth of Color',
			date: 'FEB. 6, 2025',
			preview:
				'Among TGNBO youth of color, acceptance for gender identity was linked to 36% lower odds of a past-year suicide attempt.',
		},
		{
			title: 'School Climate and Mental Health Among LGBTQ+ Students',
			date: 'JAN. 15, 2025',
			preview:
				'Students in supportive school environments reported significantly lower rates of depression and anxiety compared to those in hostile environments...',
		},
		{
			title: 'Digital Wellness and Social Media Impact on LGBTQ+ Youth',
			date: 'DEC. 12, 2024',
			preview:
				'Positive online community engagement was associated with improved mental health outcomes, while cyberbullying experiences increased distress...',
		},
		{
			title: 'Healthcare Access Barriers for Transgender Youth',
			date: 'NOV. 28, 2024',
			preview:
				'Geographic location and insurance coverage were primary barriers to accessing gender-affirming healthcare services...',
		},
	];

	const handleLoadMore = () => {
		setVisibleCount((prev) => Math.min(prev + 3, researchData.length));
	};

	const visibleResearch = researchData.slice(0, visibleCount);
	const hasMore = visibleCount < researchData.length;

	return (
		<div className='max-w-7xl mx-auto p-6 py-8 md:py-24'>
			{/* Sort Dropdown */}
			<div className='relative inline-block mb-8 md:mb-16'>
				<button
					onClick={() => setShowSortDropdown(!showSortDropdown)}
					className='flex items-center gap-2 px-4 py-2 border border-[#003A48] rounded-md bg-white transition-colors text-2xl font-semibold text-[#003A48]'>
					<span className='font-medium'>Sort By:</span>
					<span className='text-[#003A48]'>
						{sortBy === 'newest' ? 'Newest to Oldest' : 'Oldest to Newest'}
					</span>
					<svg
						className='w-4 h-4 ml-2'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 9l-7 7-7-7'
						/>
					</svg>
				</button>

				{showSortDropdown && (
					<div className='absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10'>
						<button
							onClick={() => {
								setSortBy('newest');
								setShowSortDropdown(false);
							}}
							className='w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700'>
							Sort By: Newest to Oldest
						</button>
						<button
							onClick={() => {
								setSortBy('oldest');
								setShowSortDropdown(false);
							}}
							className='w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700'>
							Sort By: Oldest to Newest
						</button>
					</div>
				)}
			</div>

			{/* Research Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 '>
				{visibleResearch.map((item, index) => (
					<div
						key={index}
						className='bg-white  border border-[#7faeb3] rounded-lg p-6 duration-300 group'>
						<h3 className='text-2xl font-semibold text-black mb-4 '>
							{item.title}
						</h3>
						<p className='text-lg leading-7 text-black mb-4 font-semibold'>
							{item.date} -{' '}
							<span className='text-black mb-6 font-normal'>
								{item.preview}
							</span>
						</p>

						<div className=''>
							<button className='relative text-black font-bold  pb-1  transition-colors duration-200 text-xl leading-7'>
								<span className='relative z-10 underline group-hover:decoration-wavy'>
									Learn More
								</span>
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Load More Button */}
			{hasMore && (
				<div className='flex justify-center'>
					<div className='group'>
						<button
							onClick={handleLoadMore}
							className='relative text-gray-900   transition-colors duration-200 text-xl font-semibold leading-6'>
							<span className='relative z-10 underline group-hover:decoration-wavy'>
								Load More
							</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResearchComponent;
