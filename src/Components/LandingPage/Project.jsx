import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import trevor from '../../assets/AdobeStock_trevor.jpeg';

export default function Project() {
	return (
		<div className='overflow-hidden'>
			{/* Hero Section */}
			<div className='bg-[#f3f3f7] px-6 py-16 lg:py-24'>
				<div className='max-w-5xl mx-auto'>
					<div className='grid sm:grid-cols-2 gap-12 items-center'>
						{/* Image */}
						<div className=''>
							<img
								src={trevor}
								alt='Trevor Volunteer'
								className='w-full max-w-xs sm:max-w-sm mx-auto rounded-lg shadow-lg object-cover '
							/>
						</div>

						{/* Quote */}
						<div className='text-center '>
							<div className='flex items-center justify-center'>
								<RiDoubleQuotesL className='text-2xl text-[#101066] mb-6 ' />
								<RiDoubleQuotesR className='text-2xl text-[#101066] mb-6 ' />
							</div>
							<blockquote className='text-2xl font-bold text-[#101066] leading-10 mb-8 text-center'>
								I first learned about the work when I was 18, confused, and
								afraid. Now, I feel honored to help my queer siblings thrive.
							</blockquote>
							<cite className=' text-center text-lg text-[#101066] not-italic font-medium'>
								Trevor Volunteer
							</cite>
						</div>
					</div>
				</div>
			</div>

			{/* Featured Resources Section */}
			<div className='bg-[#6b5df6] px-6 py-16 md:py-24'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-4xl font-bold text-white text-center mb-12'>
						Featured Resources
					</h2>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Resource Card 1 */}
						<div className='bg-white rounded-lg p-8 shadow-lg'>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>
								Friends & Family Support Systems for LGBTQ+ Youth
							</h3>
							<button className='text-[#101066] font-semibold  transition-colors border-b-2 border-[#101066] '>
								Read More
							</button>
						</div>

						{/* Resource Card 2 */}
						<div className='bg-white rounded-lg p-8 shadow-lg'>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>
								Facts About Suicide
							</h3>
							<p className='text-gray-600 mb-6'>
								Suicide is the second leading cause of death among young people
								aged 10 to 24.
							</p>
							<button className='text-[#101066] font-semibold transition-colors border-b-2 border-[#101066] '>
								Read More
							</button>
						</div>

						{/* Resource Card 3 */}
						<div className='bg-white rounded-lg p-8 shadow-lg md:col-span-2 lg:col-span-1'>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>
								Support for LGBTQ+ Self-Harm Recovery
							</h3>
							<button className='text-[#101066] font-semibold transition-colors border-b-2 border-[#101066] '>
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
