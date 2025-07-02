import React from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

// Mock data for demonstration
const sampleCards = [
	{
		id: 1,
		type: 'GUIDE',
		title: 'How to Signal You are an Ally in Hostile Environment',
		description: '',
		tags: ['Community'],
		allTags: ['Community', 'Advocacy', 'Support', 'Allyship', 'Safe Spaces'],
		gradient: 'from-orange-400 to-pink-500',
		image: '/api/placeholder/300/400',
	},
	{
		id: 2,
		type: 'LGBTQ+ MENTAL HEALTH RESOURCES',
		title: 'Facts About Suicide Among LGBTQ+ Young...',
		description:
			'LGBTQ+ young people are not inherently prone to suicide risk because of their...',
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
		image: '/api/placeholder/300/400',
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
		image: '/api/placeholder/300/400',
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
		image: '/api/placeholder/300/400',
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
		image: '/api/placeholder/300/400',
	},
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110'
		aria-label='Previous slide'>
		<GoArrowLeft className='w-4 h-4 sm:w-6 sm:h-6 text-gray-700' />
	</button>
);

const CustomNextArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110'
		aria-label='Next slide'>
		<GoArrowRight className='w-4 h-4 sm:w-6 sm:h-6 text-gray-700' />
	</button>
);

// Card Component
const CarouselCard = ({ card }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);
	const hasWhiteOverlay = card.hasWhiteOverlay || false;

	const toggleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className='px-1 sm:px-2'>
			<div
				className={`relative h-[300px] sm:h-[350px] lg:h-[500px] w-60 sm:w-64 lg:w-72 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.gradient} overflow-hidden cursor-pointer `}>
				{/* Background image */}
				<div className='absolute inset-0'>
					<img
						src={card.image}
						alt=''
						className={`w-full object-cover object-center ${
							hasWhiteOverlay ? 'h-1/2 top-0' : 'h-full'
						}`}
					/>
				</div>

				{/* Subtle dark overlay for regular cards to improve text readability */}
				{!hasWhiteOverlay && (
					<div className='absolute inset-0 bg-black/20 pointer-events-none'></div>
				)}

				{/* White overlay for special cards (always visible) */}
				{hasWhiteOverlay && (
					<div className='absolute bottom-0 left-0 w-full h-1/2 bg-white pointer-events-none rounded-b-lg '></div>
				)}

				{/* Dark overlay when expanded (for regular cards only) */}
				{isExpanded && !hasWhiteOverlay && (
					<div className='absolute inset-0 bg-black/70 z-10'></div>
				)}

				{/* White expanded overlay (replaces content for white overlay cards) */}
				{hasWhiteOverlay && isExpanded && (
					<div className='absolute inset-0 z-20 p-4 sm:p-6 flex flex-col'>
						<button
							onClick={toggleExpanded}
							className='absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl leading-none'>
							×
						</button>
						<div className='mt-6 sm:mt-8'>
							<h4 className='text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6'>
								Related Topics
							</h4>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
								{card.allTags?.map((tag, index) => (
									<div
										key={index}
										className='bg-purple-100 text-purple-800 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border border-purple-200 text-center'>
										{tag}
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{/* Main Content */}
				{!(hasWhiteOverlay && isExpanded) && (
					<>
						{/* Content for white overlay cards - positioned in white section */}
						{hasWhiteOverlay && (
							<div className='absolute bottom-0 left-0 w-full h-1/2 p-4 sm:p-6 flex flex-col justify-between z-20'>
								<div>
									<span className='text-gray-600 text-xs font-semibold leading-4.5 mb-2 sm:mb-3 block'>
										{card.type}
									</span>
									<h3 className='text-lg sm:text-xl lg:text-2xl font-semibold leading-5 sm:leading-6 lg:leading-7 mb-2 sm:mb-3 text-gray-800'>
										{card.title}
									</h3>
									{card.description && (
										<p className='text-gray-600 text-xs sm:text-sm lg:text-base leading-4 sm:leading-5'>
											{card.description}
										</p>
									)}
								</div>

								{/* Bottom section for white overlay cards */}
								<div className='mt-3 sm:mt-4'>
									<div className='flex flex-wrap gap-1.5 sm:gap-2'>
										{card.tags.slice(0, 2).map((tag, index) => (
											<span
												key={index}
												className='bg-purple-100 text-purple-800 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-200'>
												{tag}
											</span>
										))}
										<button
											onClick={toggleExpanded}
											className='bg-purple-100 text-purple-800 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-200 hover:bg-purple-200 transition-colors'>
											+
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Content for regular cards - positioned over image with dark overlay */}
						{!hasWhiteOverlay && (
							<div className='relative p-4 sm:p-6 h-full flex flex-col justify-between z-20 text-white'>
								<div>
									<span className='text-white text-xs font-semibold leading-4.5 mb-2 sm:mb-3 block'>
										{card.type}
									</span>
									<h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold leading-6 sm:leading-8 lg:leading-10 mb-2 sm:mb-3'>
										{card.title}
									</h3>
									{card.description && (
										<p className='text-white text-sm sm:text-base lg:text-lg leading-5 sm:leading-6'>
											{card.description}
										</p>
									)}
								</div>

								{/* Bottom section for regular cards */}
								<div className='mt-3 sm:mt-4'>
									{/* Expanded tags view for regular cards */}
									{isExpanded && (
										<div className='space-y-2 sm:space-y-3'>
											<button
												onClick={toggleExpanded}
												className='absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white text-xl sm:text-2xl leading-none'>
												×
											</button>
											<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
												{card.allTags?.map((tag, index) => (
													<div
														key={index}
														className='bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-center'>
														{tag}
													</div>
												))}
											</div>
										</div>
									)}

									{/* Default state for regular cards */}
									{!isExpanded && (
										<div className='flex flex-wrap gap-1.5 sm:gap-2'>
											<button
												onClick={toggleExpanded}
												className='bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/30 transition-colors'>
												+
											</button>
										</div>
									)}
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

// Main Carousel Component
const TrevorCarousel = ({
	items = sampleCards,
	title = 'Trending',
	subtitle = 'Explore the latest articles, resources, and guides.',
	slidesToShow = 4,
	slidesToScroll = 2,
	className = '',
}) => {
	const [currentSlide, setCurrentSlide] = React.useState(0);

	// Responsive slides configuration
	const getResponsiveConfig = () => {
		if (typeof window !== 'undefined') {
			const width = window.innerWidth;
			if (width < 640) {
				// mobile
				return { slidesToShow: 1.2, slidesToScroll: 1 };
			} else if (width < 768) {
				// small tablet
				return { slidesToShow: 1.5, slidesToScroll: 1 };
			} else if (width < 1024) {
				// tablet
				return { slidesToShow: 2.5, slidesToScroll: 2 };
			} else if (width < 1280) {
				// laptop
				return { slidesToShow: 3, slidesToScroll: 2 };
			} else {
				// desktop
				return { slidesToShow: slidesToShow, slidesToScroll: slidesToScroll };
			}
		}
		return { slidesToShow: slidesToShow, slidesToScroll: slidesToScroll };
	};

	const [responsiveConfig, setResponsiveConfig] = React.useState(
		getResponsiveConfig()
	);

	React.useEffect(() => {
		const handleResize = () => {
			setResponsiveConfig(getResponsiveConfig());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [slidesToShow, slidesToScroll]);

	const maxSlide = Math.max(
		0,
		items.length - Math.floor(responsiveConfig.slidesToShow)
	);

	const nextSlide = () => {
		setCurrentSlide((prev) =>
			Math.min(prev + responsiveConfig.slidesToScroll, maxSlide)
		);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) =>
			Math.max(prev - responsiveConfig.slidesToScroll, 0)
		);
	};

	// Reset slide when screen size changes to prevent out-of-bounds
	React.useEffect(() => {
		if (currentSlide > maxSlide) {
			setCurrentSlide(Math.max(0, maxSlide));
		}
	}, [maxSlide, currentSlide]);

	return (
		<div className={`py-8 sm:py-12 lg:py-16 ${className}`}>
			<div className='max-w-5xl mx-auto px-4 sm:px-6'>
				{/* Header */}
				<div className='text-left mb-6 sm:mb-8'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4 leading-8 sm:leading-10 lg:leading-[50px]'>
						{title}
					</h2>
					<p className='text-white text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 max-w-5xl mr-auto'>
						{subtitle}
					</p>
				</div>

				{/* Carousel Container */}
				<div className='relative'>
					{/* Navigation Arrows */}
					{currentSlide > 0 && <CustomPrevArrow onClick={prevSlide} />}
					{currentSlide < maxSlide && <CustomNextArrow onClick={nextSlide} />}

					{/* Slides Container */}
					<div className='overflow-hidden'>
						<div
							className='flex transition-transform duration-500 ease-out gap-2 sm:gap-4'
							style={{
								transform: `translateX(-${
									currentSlide * (100 / responsiveConfig.slidesToShow)
								}%)`,
							}}>
							{items.map((item, index) => (
								<div
									key={item.id || index}
									className='flex-shrink-0'>
									<CarouselCard card={item} />
								</div>
							))}
						</div>
					</div>

					{/* Dots Indicator */}
					<div className='flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2'>
						{Array.from({ length: maxSlide + 1 }, (_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
									currentSlide === index
										? 'bg-white'
										: 'bg-white/40 hover:bg-white/60'
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrevorCarousel;
