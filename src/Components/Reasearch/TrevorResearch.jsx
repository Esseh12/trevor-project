import React from 'react';

const ResearchCard = ({
	title,
	date,
	description,
	linkText = 'Learn More',
}) => (
	<div className='bg-white border border-[#7faeb3] rounded-lg p-6  duration-200 max-w-sm'>
		<h3 className='text-xl font-bold text-black mb-4 leading-6.5'>{title}</h3>
		<div className='mb-4'>
			<span className='text-lg font-bold text-black'>{date}</span>
			<span className='text-lg font-bold text-black mx-2'>—</span>
			<span className='text-black font-medium text-base'>{description}</span>
		</div>
		<button className='text-black font-bold text-lg underline underline-offset-8 hover:decoration-wavy'>
			{linkText}
		</button>
	</div>
);

const TrevorResearch = () => {
	const researchData = [
		{
			title: 'Positive Events and Mental Health Among LGBTQ+ Young People',
			date: 'JUN. 18, 2025',
			description:
				'Several recent positive events – such as doing enjoyable things for oneself, feeling more comfortable financially, receiving positive feedback at scho...',
		},
		{
			title: 'Mental Health Diagnoses and Access to Care Among LGBTQ+...',
			date: 'MAY. 14, 2025',
			description:
				'Nearly two-thirds (65%) of participants reported having at least one mental health diagnosis. The most commonly reported were anxiety disorders...',
		},
		{
			title: 'The Impact of Houselessness and Food Insecurity on the...',
			date: 'APR. 23, 2025',
			description:
				'LGBTQ+ young people with a history of houselessness had over twice the rate of attempting suicide in the past year than those who have never...',
		},
		{
			title:
				'The Mental Health and Experiences of LGBTQ+ Young People in the...',
			date: 'MAR. 19, 2025',
			description:
				'LGBTQ+ young people living in rural areas were half as likely as those in non-rural areas to say their community was supportive of LGBTQ+ people (34%...',
		},
		{
			title: 'The Role of Parent and Caregiver Support on Perceived Life...',
			date: 'FEB. 26, 2025',
			description:
				'Black transgender and nonbinary young people with parents and caregivers who supported their LGBTQ+ identity reported a greater sense of life...',
		},
		{
			title: 'The Relationship Between Parental and Caregiver Support and...',
			date: 'FEB. 6, 2025',
			description:
				'Among TGNBQ youth of color, acceptance for gender identity was linked to 36% lower odds of a past-year suicide attempt.',
		},
	];

	return (
		<div className='mt-20 md:mt-80 mb-12'>
			<div className='max-w-7xl mx-auto px-4 py-12  min-h-screen'>
				{/* Header Section */}
				<div className='text-center mb-12'>
					<h1 className='text-4xl text-[40px] font-bold text-[#101066] mb-6 leading-12'>
						Latest Research from The Trevor Project
					</h1>
					<p className='text-xl text-[#101066]  max-w-2xl mx-auto leading-9'>
						We are committed to producing innovative research that brings
						knowledge and clinical implications to the field of LGBTQ+ mental
						health and suicide research. We accomplish this by leading the
						development, execution, and analysis of survey data collected from
						LGBTQ+ young people. We translate these findings and statistics to
						inform evidence-based policies and practices.
					</p>
				</div>

				{/* Research Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto'>
					{researchData.map((research, index) => (
						<ResearchCard
							key={index}
							title={research.title}
							date={research.date}
							description={research.description}
						/>
					))}
				</div>

				{/* View All Button */}
				<div className='text-center'>
					<button className='bg-[#101066] text-white px-10 py-6 rounded-lg font-medium hover:bg-[#101066]/90 transition-colors duration-200 text-lg'>
						View All Research Briefs
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrevorResearch;
