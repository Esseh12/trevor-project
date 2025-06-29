import { useState } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import img1 from '../../assets/TTP_BrandIllustrations_ReachForTheStars_Vertical5.webp';
import img2 from '../../assets/TTP_BrandIllustrations_ShowYourPride_Square.png';
import img3 from '../../assets/TTP_Illustration_CommemorativeGiving.webp';

const testimonialData = [
	{
		id: 1,
		image: img1,
		quote:
			"In honour of and gratitide for the Trevor Project, who most likely saved my son's life 15 years ago",
	},
	{
		id: 2,
		image: img2,
		quote:
			'I love you- the person you are and the true soul you will always be and how perfect you are in every state that you will ever be.',
	},
	{
		id: 3,
		image: img3,
		quote:
			'This gift is made in memory of my husband. He was a fierce advocate for change whenever there was an issue of justice. I am confident that he would be honored to support the work of The Trevor Project, and I am proud to be able to give this donation as a testament to who he was and what he believed in.',
	},
];

export default function CommemorativeCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<div className='bg-[#6b5df6] py-24 px-4'>
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
						<div className='text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center relative'>
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
