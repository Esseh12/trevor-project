import React from 'react';

const SupportCard = ({ title, description, buttonText = 'Learn More' }) => (
	<div className='bg-white rounded-lg border border-[#92babe] p-6 sm:pb-14 '>
		<h3 className='text-xl font-bold text-[#101066] mb-4'>{title}</h3>
		<p className='text-[#101066] mb-6 leading-relaxed'>{description}</p>
		<button className='text-[#101066] font-semibold underline underline-offset-8 hover:decoration-wavy'>
			{buttonText}
		</button>
	</div>
);

export default function TrevorSupportSection() {
	const supportItems = [
		{
			title: 'Crisis Services',
			description:
				'Crisis counselors are trained to answer calls, chats, or texts from LGBTQ+ young people who reach out on our free, confidential, and secure 24/7 service when they are struggling.',
		},
		{
			title: 'Public Education',
			description:
				'Competent suicide prevention starts with how we educate ourselves and each other. The Trevor Project offers LGBTQ+ youth suicide prevention trainings that give everyone the ability to help.',
		},
		{
			title: 'Advocacy',
			description:
				'Through legislation, litigation, and public education, The Trevor Project advocates for policies that help prevent suicide among LGBTQ+ young people.',
		},
		{
			title: 'Research',
			description:
				'We produce innovative research that brings knowledge and clinical implications to the field of LGBTQ+ mental health and suicide research. We accomplish this by developing, executing, and analyzing survey data collected from LGBTQ+ young people.',
		},
		{
			title: 'Peer Support',
			description:
				'TrevorSpace is a welcoming online social community for LGBTQ+ young people between the ages of 13-24 years old. With over 400,000 members across the globe, LGBTQ+ youth can find support groups and make friends in a moderated, online safe space.',
		},
		{
			title: 'Your Donation',
			description:
				'Show LGBTQ+ young people that Pride Belongs Here — and that they belong, too with your generous gift today. Your support in our crisis intervention services and suicide prevention programs is life-saving.',
			buttonText: 'Donate Now',
		},
	];

	return (
		<div className='bg-white min-h-screen py-12 px-4'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl sm:text-4xl font-bold text-[#101066] text-center mb-12'>
					Support Pride Belongs Here
				</h1>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
					{supportItems.map((item, index) => (
						<SupportCard
							key={index}
							title={item.title}
							description={item.description}
							buttonText={item.buttonText}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
