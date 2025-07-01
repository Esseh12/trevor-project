import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import johnson from '../../assets/Johnson.jpeg';

const Testimonial = () => {
	return (
		<section className='bg-yellow-400 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
					{/* Image Section */}
					<div className='flex justify-center lg:justify-end order-1 lg:order-1'>
						<div className='w-72 h-96 sm:w-96 sm:h-[28rem] bg-black rounded-lg overflow-hidden shadow-2xl'>
							<img
								src={johnson}
								alt='Smiling person in red hijab'
								className='w-full h-[85%] object-cover'
								loading='lazy'
							/>
						</div>
					</div>

					{/* Quote Section */}
					<div className='flex flex-col justify-center text-center lg:text-left order-2 lg:order-2'>
						<div className='space-y-6 text-center'>
							<div className='flex text-2xl text-blue-900 justify-center '>
								<RiDoubleQuotesL />
								<RiDoubleQuotesR />
							</div>
							<blockquote className='text-xl sm:text-2xl font-medium text-blue-900 leading-relaxed -mt-4'>
								“Carey and I fully support Tyler and could not be prouder of the
								human being that he has become. Our hearts break for youth that
								struggles with their sexual identity and face rejection at home
								and in their overall environment. Our support of The Trevor
								Project is to afford these youth an avenue to blossom into the
								human beings that they are meant to become.”
							</blockquote>
							<div>
								<cite className='text-lg sm:text-xl font-semibold text-blue-800 not-italic'>
									Steve Johnson, Trevor Donor
								</cite>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
