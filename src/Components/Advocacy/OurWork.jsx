import Slider from 'react-slick';
import { FiDownload } from 'react-icons/fi';
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from 'react-icons/hi2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className='absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-4 w-16 h-12 bg-[#003a48] text-white rounded-full hidden lg:flex items-center justify-center shadow-lg hover:bg-[#003a48]/60 transition-colors z-10'>
		<HiMiniArrowLongLeft size={30} />
	</button>
);

const CustomNextArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className='absolute -right-4 top-1/2 -translate-y-1/2 translate-x-4 w-16 h-12 bg-[#003a48] text-white rounded-full hidden lg:flex items-center justify-center shadow-lg hover:bg-[#003a48]/60 transition-colors z-10'>
		<HiMiniArrowLongRight size={30} />
	</button>
);

const OurWork = () => {
	const campaignData = [
		{
			title: 'Ending Conversion Therapy',
			description:
				'We are the largest campaign in the country endeavoring to protect LGBTQ+ young people from conversion therapy.',
			buttonText: 'Read More',
			buttonLink: '#',
		},
		{
			title: 'Conversion Therapy Report',
			description:
				'Read our report on practitioners of so-called conversion "therapy" in the U.S.',
			buttonText: 'Read More',
			buttonLink: '#',
		},
		{
			title: 'Collecting LGBTQ+-Inclusive Data',
			description:
				'We advocate for the inclusive collection of data at every level of government, which is essential for effective public health policy.',
			buttonText: 'Read More',
			buttonLink: '#',
		},
		{
			title: 'Creating Safe & Welcoming Schools',
			description:
				'We work to ensure schools have LGBTQ+-inclusive suicide prevention policies.',
			buttonText: 'Download the Model School Policy on Suicide Prevention',
			buttonLink: '#',
			hasDownload: true,
		},
		{
			title: 'Supporting Trans Young People',
			description:
				'We advocate for policies that reduce suicide risk for transgender and nonbinary young people.',
			buttonText: 'Read More',
			buttonLink: '#',
		},
		{
			title: 'Ensuring Access to Crisis Care',
			description:
				'We work to ensure LGBTQ+ young people have access to crisis services when they need it.',
			buttonText: 'Read More',
			buttonLink: '#',
		},
	];

	const sliderSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true, // 👈 Enables swipe on mobile
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false, // hide arrows on tablet
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false, // hide arrows on mobile
				},
			},
		],
	};

	return (
		<div className='min-h-screen mt-64'>
			{/* Content */}
			<div className='py-12'>
				{/* Title */}
				<div className='text-center mb-12 max-w-7xl mx-auto px-4'>
					<h1 className='text-4xl font-bold text-[#101066] mb-4 leading-tight'>
						Explore Our Work
					</h1>
					<p className='text-xl text-[#101066] leading-relaxed font-normal max-w-2xl mx-auto'>
						Through legislation, litigation, and public education, The Trevor
						Project advocates for policies that help prevent suicide among
						LGBTQ+ young people.
					</p>
				</div>

				{/* Slider */}
				<div className='px-4 sm:px-6 lg:px-8 max-w-full  md:max-w-6xl md:ml-auto'>
					<Slider
						{...sliderSettings}
						className='campaign-slider'>
						{campaignData.map((campaign, index) => (
							<div
								key={index}
								className='px-2 sm:px-3'>
								<div className='bg-white rounded-lg p-6 flex flex-col border border-[#8fb8bc] h-[22rem] sm:h-[24rem] md:h-[26rem] lg:h-[22rem]'>
									<h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2'>
										{campaign.title}
									</h3>
									<p className='text-sm sm:text-base text-black flex-grow leading-relaxed'>
										{campaign.description}
									</p>
									<div className='mt-4'>
										<button className='font-bold text-base text-black'>
											{campaign.hasDownload ? (
												<div className='flex items-center gap-2 underline underline-offset-8 text-left'>
													<FiDownload size={20} />
													<span>{campaign.buttonText}</span>
												</div>
											) : (
												<span className='underline underline-offset-8 hover:decoration-wavy'>
													{campaign.buttonText}
												</span>
											)}
										</button>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>

			<style jsx>{`
				.campaign-slider .slick-dots {
					bottom: -40px;
				}
				.campaign-slider .slick-dots li button:before {
					font-size: 12px;
					color: #d1d5db;
				}
				.campaign-slider .slick-dots li.slick-active button:before {
					color: #0d9488;
				}
			`}</style>
		</div>
	);
};

export default OurWork;
