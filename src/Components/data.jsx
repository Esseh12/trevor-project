import blog1 from '../assets/2024_Guide_Testifying-Against-Harmful-Bills.webp';
import blog2 from '../assets/TTP_Blog-Press-Release-Icon-Sets_Against-Action_Option3.png';
import blog3 from '../assets/Advocacy_Display_Banner.webp';
import blog4 from '../assets/TTP_Blog-Press-Release-Icon-Sets_Positive-Step-or-General_Option3.webp';
import blog5 from '../assets/ttp_logo_primary_tagline_rgb_square_WhiteTangerine.webp';
import blog6 from '../assets/TTP_PostElectionMessage_Blog.webp';

export const newsItems = [
	{
		id: 1,
		date: 'JUNE 18, 2025',
		title:
			'Supreme Court Greenlights Healthcare Discrimination for Transgender Youth in U.S. v. Skrmetti',
		tags: ['Health', 'Transgender & Nonbinary'],
		icon: blog1,
	},
	{
		id: 2,
		date: 'JUNE 18, 2025',
		title:
			'Trump Administration Orders Termination of National LGBTQ+ Youth Suicide Lifeline, Effective July 17th',
		tags: ['Family', 'Allyship', 'Mental Health'],
		icon: blog2,
	},
	{
		id: 3,
		date: 'MARCH 10, 2025',
		title:
			"The Trevor Project Condemns Supreme Court's Decision to Consider Conversion Therapy Ban Challenge",
		tags: ['Conversion Therapy', 'Advocacy'],
		icon: blog3,
	},
	{
		id: 4,
		date: 'JUNE 2, 2025',
		title:
			"Celebrities Sign The Trevor Project's Open Letter to Protect Federal Funding for LGBTQ+ Youth Suicide Prevention",
		tags: ['suicide prevention', 'Talent', 'LGBTQ+'],
		icon: blog4,
	},
	{
		id: 5,
		date: 'MAY 1, 2025',
		title:
			'New HHS Report on Health Care for Transgender Youth Includes Dangerous Misinformation, Encourages Conversion Therapy',
		icon: blog5,
	},
	{
		id: 6,
		date: ' March 20, 2025',
		title:
			'The Trevor Project Launches Public Awareness Campaign to Address LGBTQ+ Youth Mental Health Crisis in Rural Communities',
		tags: ['Family', 'Allyship', 'Mental Health'],
		icon: blog6,
	},
	{
		id: 7,
		date: ' April 21, 2025',
		title:
			'Trump Administration Proposes Defunding Suicide Lifeline for LGBTQ+ Youth Beginning October 2025',
		icon: blog5,
	},
	{
		id: 8,
		date: 'March 10, 2025',
		title:
			'The Trevor Project Condemns Supreme Courts Decision to Consider Conversion Therapy Ban Challenge',
		tags: ['Conversion Therapy', 'Advocacy'],
		icon: blog1,
	},
];

export const resources = [
	{
		image: blog1,
		category: 'PRESS',
		title: 'The Trevor Project Shares Post-Election Day Crisis...',
		description:
			'The Trevor Project, the leading suicide prevention and crisis intervention organization for LGBTQ young people, shares important resources and support information following the election.',
		tags: ['Election', 'data'],
	},
	{
		image: blog6,
		category: 'PRESS',
		title: 'The Trevor Project Reported a 33% Increase...',
		date: 'Tuesday, January 21, 2025',
		description:
			'The Trevor Project, the leading suicide prevention and crisis intervention organization for LGBTQ young people, reported significant increases in crisis contacts.',
		tags: ['Donations', 'Allyship'],
	},
	{
		image: blog6,
		category: 'PRESS',
		title: 'Stack Overflow Co-Founder Jeff Atwood...',
		description:
			'The Atwood family made eight $1 million donations to The Trevor Project over the past several years, demonstrating ongoing commitment to LGBTQ youth support.',
		tags: ['Mental Health', 'Community'],
	},
];

export const menuItems = [
	{
		title: 'Who We Are',
		items: [
			{
				name: 'Pride',
				description: 'Celebrate Pride with us',
				path: '/pride',
			},
			{
				name: 'Financial Reports',
				description: 'Look at our yearly annual financial statements',
				path: '/financial-reports',
			},
			{
				name: 'Contact Us',
				description: 'Reach out to one of our team members',
				path: '/contact-us',
			},
		],
	},
	{
		title: 'What We Do',
		items: [
			{
				name: 'Crisis Services',
				description:
					'We provide counseling support for LGBTQ+ young people 24/7, all year round',
				path: '/crisis-services',
			},
			{
				name: 'Peer Support',
				description:
					'We provide an affirming international community for LGBTQ+ young people',
				path: '/visit-trevorspace',
			},
			{
				name: 'Advocacy',
				description:
					'We work to change hearts, minds, and laws in support of young LGBTQ+ lives',
				path: '/advocacy',
			},
			{
				name: 'Public Education',
				description:
					'We help allies and educators understand the needs of LGBTQ+ young people',
				path: '/public-education',
			},
			{
				name: 'Research',
				description:
					'We conduct research studies to equip policymakers and other LGBTQ+ youth facing professionals',
				path: '/research',
			},
		],
	},
	{
		title: 'Get Involved',
		items: [
			{
				name: 'Partner With Us',
				description: 'Join our list of amazing partners',
				path: '/partner-with-us',
			},
			{
				name: 'Volunteer',
				description: 'Apply to join us in supporting young LGBTQ+ lives',
				path: '/volunteer',
			},
		],
	},
	{
		title: 'Support Us',
		items: [
			{
				name: 'Donate',
				description: 'Support The Trevor Project Today',
				path: '/be-the-one',
			},
			{
				name: 'Fundraise',
				description: 'Tap into your network and help us change the world',
				path: '/fundraise',
			},
			{
				name: 'Donor Community',
				description: 'Learn about our grant opportunities',
				path: '/circle-of-light',
			},
			{
				name: 'Commemorative Giving',
				description:
					'Make a tribute gift, leave a legacy, or create a memorial fundraiser in honour of a loved one',
				path: '/commemorative-giving',
			},
		],
	},
	{
		title: 'Resources',
		items: [
			{
				name: 'Blog',
				description: "Get the latest news from what's happening in our field",
				path: '/blog',
			},
			{
				name: 'News Press',
				description:
					"Get the latest news and press release from what's happening in our field",
				path: '/press',
			},
			{
				name: 'Research Briefs',
				description:
					'Get the latest research and clinical implications related to LGBTQ+ youth and suicide risks',
				path: '/research-briefs',
			},
			{
				name: 'Breathing Exercise',
				description:
					'Try this calming exercise that will help you relax and focus',
				path: '/breathing-exercise',
			},
			{
				name: 'Mental Health Survey',
				description: 'Understand the mental health of LGBTQ+ young people',
				path: '/survey-international',
			},
			{
				name: 'Resource Center',
				description:
					'Explore resources for allyship, sexual orientation, gender identity, mental health, and many more',
				path: '/resources',
			},
		],
	},
];
