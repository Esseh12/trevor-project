import sephora from '../../assets/sephora-logo.png';
import knockAround from '../../assets/knockaround.png';
import usta from '../../assets/USTA-PRIDE-Social-Media-Profile-IconArtboard-1-copy-5].webp';
import dvPride from '../../assets/2024_DV-PRIDE-LOGO.webp';
import lemonade from '../../assets/lemonade_logo_-_wordmarklarger.png';
import hotTopic from '../../assets/Hot-Topic.webp';
import hm from '../../assets/HM-Logo.svg';
import dental from '../../assets/dental.jpeg';
import holden from '../../assets/holden.webp';
import humble from '../../assets/HumbleLogoRed.jpg';
import levis from '../../assets/lsco_logo_red.webp';
import ptc from '../../assets/PTC_LogoDescriptor_Main_Navy-1.webp';
import devis from '../../assets/DY_LOGO_2023.jpg';
import lulemon from '../../assets/lululemon_Yogo_RGB_CLR.webp';

const CorporatePartnersCarousel = () => {
	// Sample corporate partners data based on the images
	const partners = [
		{ name: 'David Yurman', logo: devis, type: 'luxury' },
		{
			name: 'Delta Dental',
			logo: dental,
			type: 'healthcare',
		},
		{ name: 'Dolce Vita', logo: dvPride, type: 'fashion' },
		{
			name: 'Abercrombie & Fitch',
			logo: 'Abercrombie & Fitch',
			type: 'fashion',
		},
		{ name: 'Adupe', logo: 'adupe', type: 'beauty' },
		{ name: "Harry's", logo: "HARRY'S", type: 'grooming' },
		{ name: 'Holden', logo: holden, type: 'brand' },
		{
			name: 'Hot Topic Foundation',
			logo: hotTopic,
			type: 'retail',
		},
		{ name: 'Humble', logo: humble, type: 'gaming' },
		{
			name: 'Foundation by Chubbies',
			logo: 'foundation BY chubbies',
			type: 'apparel',
		},
		{ name: 'H&M', logo: hm, type: 'fashion' },
		{ name: 'Knockaround', logo: knockAround, type: 'eyewear' },
		{ name: 'Levi Strauss & Co.', logo: levis, type: 'apparel' },
		{ name: 'Lemonade', logo: lemonade, type: 'insurance' },
		{ name: 'Lululemon', logo: lulemon, type: 'athletic' },
		{
			name: 'JanSport',
			logo: 'JANSPORT',
			subtitle: 'ALWAYS WITH YOU',
			type: 'bags',
		},
		{
			name: 'Kate Spade New York',
			logo: 'kate spade NEW YORK',
			type: 'luxury',
		},
		{ name: 'OPI', logo: 'O·P·I', type: 'beauty' },
		{
			name: 'Petco',
			logo: ptc,
			subtitle: 'THE HEALTH + WELLNESS CO.',
			type: 'pets',
		},
		{ name: 'Rare Beauty', logo: 'Rare Beauty', type: 'beauty' },
		{ name: 'Sephora', logo: sephora, type: 'beauty' },
		{ name: 'Viva Glam', logo: 'VIVA GLAM', type: 'beauty' },
		{ name: "Macy's", logo: "macy's", type: 'retail' },
		{ name: 'UGG', logo: 'UGG', type: 'footwear' },
		{ name: 'Southwire', logo: 'Southwire', type: 'industrial' },
		{ name: 'USTA', logo: usta, type: 'sports' },
	];

	return (
		<div className='w-full  px-4 py-12 bg-white'>
			<div className='text-center mb-12'>
				<h2 className='text-4xl font-bold text-blue-900 mb-4'>
					Pride 2025 Corporate Partners
				</h2>
				<div className='w-24 h-1 bg-rainbow-gradient mx-auto rounded-full'></div>
			</div>

			<div className='relative overflow-hidden'>
				{/* First Row - Scrolling Right */}
				<div className='flex animate-scroll-right mb-8 space-x-8'>
					{[...partners.slice(0, 13), ...partners.slice(0, 13)].map(
						(partner, index) => (
							<div
								key={`row1-${index}`}
								className='flex-shrink-0 w-64 h-32 flex flex-col items-center justify-center p-4 '>
								<div className={`text-center`}>
									<img
										src={partner.logo}
										alt=''
									/>
								</div>
								{partner.subtitle && (
									<div className='text-xs text-gray-500 mt-1 text-center'>
										{partner.subtitle}
									</div>
								)}
							</div>
						)
					)}
				</div>

				{/* Second Row - Scrolling Left */}
				<div className='flex animate-scroll-left space-x-8'>
					{[...partners.slice(13), ...partners.slice(13)].map(
						(partner, index) => (
							<div
								key={`row2-${index}`}
								className='flex-shrink-0 w-32 h-32 bg-white flex flex-col items-center justify-center p-4 '>
								<div className={`text-center `}>
									<img
										src={partner.logo}
										alt=''
									/>
								</div>
								{partner.subtitle && (
									<div className='text-xs text-gray-500 mt-1 text-center'>
										{partner.subtitle}
									</div>
								)}
							</div>
						)
					)}
				</div>
			</div>

			<div className='text-center mt-12'>
				<button className='px-8 py-3 bg-[#101066] text-white rounded-lg font-semibold '>
					Become a Partner
				</button>
			</div>

			<style jsx>{`
				@keyframes scroll-right {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				@keyframes scroll-left {
					0% {
						transform: translateX(-50%);
					}
					100% {
						transform: translateX(0);
					}
				}

				.animate-scroll-right {
					animation: scroll-right 30s linear infinite;
				}

				.animate-scroll-left {
					animation: scroll-left 30s linear infinite;
				}

				.bg-rainbow-gradient {
					background: linear-gradient(
						90deg,
						#ff0000,
						#ff8c00,
						#ffd700,
						#adff2f,
						#00ff7f,
						#00bfff,
						#0080ff,
						#8000ff
					);
				}

				.animate-scroll-right:hover,
				.animate-scroll-left:hover {
					animation-play-state: paused;
				}
			`}</style>
		</div>
	);
};

export default CorporatePartnersCarousel;
