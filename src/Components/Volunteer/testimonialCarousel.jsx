import { useState } from 'react';
import josiah from '../../assets/josiah.jpeg';

const testimonialData = [
	{
		id: 1,
		image:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
		quote:
			"I definitely feel the [training] material is making me a better listener, more supportive, and more mindful [...] I'm able to utilize these tools to nourish my personal relationships.",
		name: 'Josiah',
		role: 'Volunteer Trainee',
	},
	{
		id: 2,
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
		quote:
			'Just feeling very grateful that these youth have the resources that I wish that I had in the early 80s when I was floundering and flailing at their age. It is very healing in reverse to be part of this training but wow... it brings up a lot of emotions!',
		name: 'Anonymous',
		role: 'Volunteer Crisis Counselor',
	},
	{
		id: 3,
		image: josiah,
		quote:
			"The training was really thorough, even though it was difficult, it made me feel much more prepared. I was really nervous about my [training] role play because I didn't feel like I could possibly remember everything, but once I got through it, it actually boosted my confidence quite a bit.",
		name: 'Z',
		role: 'Volunteer Crisis Counselor',
	},
];

export default function TestimonialCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<div className='bg-[#ffd215] py-24 px-4'>
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
					<div className='text-center max-w-xl'>
						{/* Quote Icon */}
						<div className='text-6xl font-bold text-blue-900 mb-6'>"</div>

						{/* Quote Text */}
						<blockquote className='text-xl lg:text-3xl leading-10 font-semibold text-[#003A48] mb-8 '>
							{testimonialData[currentSlide].quote}
						</blockquote>

						{/* Attribution */}
						<div className='text-[22px] leading-8 text-[#003a48] font-medium'>
							{testimonialData[currentSlide].name},{' '}
							{testimonialData[currentSlide].role}
						</div>

						{/* Navigation Dots */}
						<div className='flex justify-center mt-12 space-x-3'>
							{testimonialData.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`w-3 h-3 rounded-full transition-colors duration-200 ${
										index === currentSlide ? 'bg-[#003A48]' : 'bg-gray-300'
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
