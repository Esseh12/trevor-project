import ally from '../../assets/2024_Guide_How-to-Signal-You-Are-an-Ally_Blog.webp';
import comingOut from '../../assets/Coming-Out-Handbook_Blog.webp';
import blackLgbtq from '../../assets/2024_Black-LGBTQ-Approaching-Intersectional-Conversations-Graphics_Blog.webp';
import youngBisexual from '../../assets/2024_Guide_How-to-Support-Bisexual-Young-People_Blog.png';
import suicide from '../../assets/TTP_BrandIllustrations_YouAreCaredFor_Square.webp';
import chosen from '../../assets/TTP_BrandIllustrations_ChosenFamily_Square.webp';
import stars from '../../assets/TTP_BrandIllustrations_ReachForTheStars_Square-720.webp';
import acceptance from '../../assets/2024_Guide_Journey-of-Acceptance_Blog.webp';
import bisexual from '../../assets/TTP_BrandIllustrations_Present_Square-1440x1440.webp';
import black from '../../assets/2024_Supporting-Bllack-LGBTQ-with-Mental-Health_Graphics_Blog.webp';
import safety from '../../assets/2024_GEN-Online-Safety-for-LGBTQ-Young-People_Blog.jpg';
import forYou from '../../assets/TTP_SPAM_Here-For-You-24-7_Graphics_Vertical_Blog.webp';
import survivors from '../../assets/RAINN-How-to-Support-LGBTQ-Survivors-of-Sexual-Violence_Socials.webp';

export const trending = [
	{
		id: 1,
		type: 'GUIDE',
		title: 'How to Signal You are an Ally in Hostile Environment',
		description: '',
		tags: ['Community'],
		allTags: ['Community', 'Advocacy', 'Support', 'Allyship', 'Safe Spaces'],
		gradient: 'from-orange-400 to-pink-500',
		image: ally,
	},
	{
		id: 2,
		type: 'LGBTQ+ Mental Health Resources',
		title: 'Facts About Suicide Among LGBTQ+ Young',
		description: '',
		tags: ['Conversion Therapy', 'Advocacy'],
		allTags: [
			'Conversion Therapy',
			'Advocacy',
			'BIPOC',
			'Communities of Color',
			'Transgender',
			'Suicide Risk Factors',
		],
		gradient: 'from-purple-400 to-orange-400',
		image: suicide,
		hasWhiteOverlay: true,
	},
	{
		id: 3,
		type: 'GUIDE',
		title: 'The Coming Out Handbook',
		description:
			'Explore what coming out means to you with tools and guiding questions.',
		tags: ['Sexuality', 'Questioning'],
		allTags: [
			'Sexuality',
			'Questioning',
			'Gender',
			'Questioning your gender identity',
			'Pansexuality',
			'Asexual',
		],
		gradient: 'from-orange-400 to-purple-500',
		image: comingOut,
	},
	{
		id: 4,
		type: 'GUIDE',
		title: 'Black & LGBTQ+: Approaching Intersectional Conversations',
		description: '',
		tags: ['Grief and Loss', 'BIPOC'],
		allTags: [
			'Grief and Loss',
			'BIPOC',
			'Anxious Feelings',
			'Communities of Color',
			'Sadness and Depression',
		],
		gradient: 'from-yellow-400 to-purple-500',
		image: blackLgbtq,
	},
	{
		id: 5,
		type: 'GUIDE',
		title: 'How to Support Bisexual Young People',
		description:
			'An introductory educational resource that covers topics and best practices for supporting the bisexual youth in your life.',
		tags: ['Ally', 'Pansexuality'],
		allTags: ['Ally', 'Pansexuality', 'Bisexual', 'Queer', 'Friends', 'Family'],
		gradient: 'from-purple-500 to-blue-500',
		image: youngBisexual,
	},
];

export const sexualOrientation = [
	{
		id: 1,
		type: 'Sexual Orientation Resources',
		title: 'Understanding Gay & Lesbian Identities',
		description:
			'Gay and lesbian people have the capacity to form attraction and/or',
		tags: ['Lesbian', 'Gay'],
		allTags: [
			'Dating',
			'Sexual Orientation',
			'Question your Sexual Orientation',
			'Coming Out',
		],
		image: chosen,
		hasWhiteOverlay: true,
	},
	{
		id: 2,
		type: 'Sexual Orientation Resources',
		title: 'Understanding Asexuality',
		description:
			'Within the asexual community, there are many ways for people to identify.',
		tags: ['Romance'],
		allTags: [
			'Ace Spectrum',
			'Asexual',
			'Dating',
			'Sexual Orientation',
			'Question your Sexual Orientation',
		],
		image: stars,
		hasWhiteOverlay: true,
	},
	{
		id: 3,
		type: 'GUIDE',
		title: 'The Journey of Self-Acceptance; Understanding and Overcoming',
		description: '',
		tags: ['Coming out', 'Health'],
		allTags: ['Community'],
		image: acceptance,
	},
	{
		id: 4,
		type: 'Bisexual',
		title: 'Understanding Bisexuality',
		description:
			'Bisexual people have the capacity to form attraction and/or relationships',
		tags: ['Pansexual', 'Lesbian'],
		allTags: ['Dating', 'Gay', 'Sexual Orientation', 'Bisexual'],
		image: bisexual,
		hasWhiteOverlay: true,
	},
];

export const mentalHealth = [
	{
		id: 1,
		type: 'GUIDE',
		title: 'Supporting Black LGBTQ+ Youth Mental Health',
		tags: ['Lesbian', 'Gay'],
		allTags: [
			'Dating',
			'Sexual Orientation',
			'Question your Sexual Orientation',
			'Coming Out',
		],
		image: black,
	},
	{
		id: 2,
		type: 'GUIDE',
		title: 'Online Safety for LGBTQ+ Young People',
		tags: ['Romance'],
		allTags: [
			'Ace Spectrum',
			'Asexual',
			'Dating',
			'Sexual Orientation',
			'Question your Sexual Orientation',
		],
		image: safety,
	},
	{
		id: 3,
		type: 'GUIDE',
		title: 'Here For You: 24/7',
		description: '',
		tags: ['Coming out', 'Health'],
		allTags: ['Community'],
		image: forYou,
	},
	{
		id: 4,
		type: 'GUIDE',
		title: 'How to Support LGBTQ+ Victims',
		tags: ['Pansexual', 'Lesbian'],
		allTags: ['Dating', 'Gay', 'Sexual Orientation', 'Bisexual'],
		image: survivors,
	},
];
