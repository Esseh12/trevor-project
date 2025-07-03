import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import img from '../../assets/TTP_BrandIllustrations_YouAreCaredFor_Square.webp';

const Testimonial = () => {
	return (
		<>
			{/* yellow section */}
			<section className='bg-[#ffd215]  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-5xl mx-auto w-full'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
						{/* Quote Section */}
						<div className='flex flex-col justify-center order-1 lg:order-2 max-w-xs sm:max-w-sm mx-auto md:w-full'>
							<div className='space-y-6 text-left'>
								{/* Quote marks */}
								<div className='text-3xl caveat text-[#101066] leading-none'>
									<RiDoubleQuotesL className='inline-block' />
									<RiDoubleQuotesR className='inline-block' />
								</div>

								{/* Quote text */}
								<blockquote className='text-2xl sm:text-3xl  font-medium text-[#101066] leading-tight -mt-4'>
									Thank you for everything you do for our community and humans
									around the world.
								</blockquote>

								{/* Attribution */}
								<div className='pt-4'>
									<cite className='text-lg sm:text-xl text-[#101066]  not-italic'>
										Anonymous
									</cite>
								</div>
							</div>
						</div>

						{/* Image Section */}
						<div className='flex justify-center lg:justify-end order-2 '>
							<div className='relative'>
								<div className='w-80 h-96 sm:w-96 sm:h-[25rem] bg-black rounded-lg overflow-hidden '>
									<img
										src={img}
										alt='Smiling person in red hijab'
										className='w-full h-full object-cover'
										loading='lazy'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Testimonial;
