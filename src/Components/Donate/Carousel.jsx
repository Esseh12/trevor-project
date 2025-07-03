import { useState } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import img1 from '../../assets/EOY2023_LandingPage_Photos.png';
import img2 from '../../assets/TTP_Individual_Alexis_Homepage-scaled.jpg';
import img3 from '../../assets/TTP_Individual_Amari2-scaled.jpg';

const testimonialData = [
	{
		id: 1,
		image: img1,
		quote:
			'It’s important to show up and remind them that they are supported, loved, and cared for, and that people really do truly care about who they are and support them.',
	},
	{
		id: 2,
		image: img2,
		quote:
			'It’s important to show up and remind them that they are supported, loved, and cared for, and that people really do truly care about who they are and support them.',
	},
	{
		id: 3,
		image: img3,
		quote:
			'I make my students know that it’s okay to be who they are no matter what. I show up as a proud out educator and I make sure every day that I’m the teacher that I knew that I needed when I was 16 years old.',
	},
];

export default function Carousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<div className='bg-[#101066] py-16 px-4'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
					{/* Image */}
					<div className='flex-shrink-0'>
						<div className='w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gray-800'>
							<img
								src={testimonialData[currentSlide].image}
								alt={testimonialData[currentSlide].name}
								className='w-full h-full object-cover'
							/>
						</div>
					</div>

					{/* Content */}
					<div className='text-center max-w-xl '>
						{/* Quote Icon */}
						<div className='text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center relative caveat'>
							<RiDoubleQuotesL />
							<RiDoubleQuotesR className='bottom-3' />
						</div>

						{/* Quote Text */}
						<blockquote className='text-xl lg:text-3xl leading-10 font-semibold text-white '>
							{testimonialData[currentSlide].quote}
						</blockquote>

						{/* Navigation Dots */}
						<div className='flex justify-center mt-4 md:mt-8 space-x-3'>
							{testimonialData.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`w-3 h-3 rounded-full transition-colors duration-200 ${
										index === currentSlide ? 'bg-white' : 'bg-white'
									}`}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
