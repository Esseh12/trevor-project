import { useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import google from '../../assets/partnership-google.webp';
import pride from '../../assets/partnership-pride.jpg';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			id: 0,
			image: google,
			alt: 'pride at google',
			caption:
				"Google.org fellows and Trevor leadership celebrating our collaborative initiative to incorporate innovative technology into our platforms and advance Trevor's mission.",
		},
		{
			id: 1,
			image: pride,
			alt: 'pride awareness',
			caption:
				"In 2019, Macy's leveraged their expertise in events and parades to celebrate Pride and mark the 50th anniversary of the Stonewall Uprising.",
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<section className='bg-[#003a48] min-h-[950px] flex flex-col items-center justify-center py-28 overflow-hidden relative'>
			{/* Main content container */}
			<div className='flex items-center justify-between max-w-6xl gap-16 w-full px-4'>
				{/* Text content */}
				<div className='text-white flex gap-3 items-left flex-col max-w-md flex-shrink-0'>
					<h1 className='font-bold text-[46px] leading-tight'>
						Partner with The Trevor Project
					</h1>
					<p className='text-[26px] leading-9'>
						We have a sophisticated partnership model that is unique, impactful,
						and customizable to meet our business and cause goals.
					</p>
					<div className='mt-6'>
						<button className='text-xl font-bold text-[#003a48] bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors'>
							Contact Our Team
						</button>
					</div>
				</div>

				{/* Image carousel content */}
				<div className='relative flex items-center justify-center flex-shrink-0'>
					{/* Main image container */}
					<div className='relative w-[425px] h-[505px] overflow-hidden rounded-lg'>
						{slides.map((slide, index) => (
							<div
								key={slide.id}
								className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
									index === currentSlide
										? 'translate-x-0 opacity-100 z-10'
										: index === (currentSlide + 1) % slides.length
										? 'translate-x-full opacity-30 z-0'
										: 'translate-x-full opacity-0 z-0'
								}`}>
								<img
									src={slide.image}
									alt={slide.alt}
									className='w-full h-full object-cover'
								/>
							</div>
						))}
					</div>

					{/* Caption - positioned at bottom of section */}
					<div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 max-w-2xl px-4'>
						<p className='text-white text-center text-lg leading-[26px] transition-opacity duration-300'>
							{slides[currentSlide].caption}
						</p>
					</div>

					{/* Navigation arrows */}
					<button
						onClick={prevSlide}
						className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all z-20 group'
						aria-label='Previous image'>
						<FaArrowLeftLong className='w-6 h-6 text-[#003a48] group-hover:scale-110 transition-transform' />
					</button>

					<button
						onClick={nextSlide}
						className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all z-20 group'
						aria-label='Next image'>
						<FaArrowRightLong className='w-6 h-6 text-[#003a48] group-hover:scale-110 transition-transform' />
					</button>

					{/* Background preview of next image - positioned to not interfere with layout */}
					<div className='absolute right-[-100px] top-0 w-[300px] h-[505px] rounded-lg overflow-hidden opacity-15 pointer-events-none z-0'>
						<img
							src={slides[(currentSlide + 1) % slides.length].image}
							alt={slides[(currentSlide + 1) % slides.length].alt}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</div>

			{/* Slide indicators */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-3 h-3 rounded-full transition-all ${
							index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
