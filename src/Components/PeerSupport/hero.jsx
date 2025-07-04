import { FaUsers } from 'react-icons/fa6';

export default function Hero() {
	return (
		<div className='pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200'>
			{/* Main Content */}
			<main className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12'>
				<div className='max-w-4xl mx-auto text-center'>
					{/* Online Members Badge */}
					<div className='inline-flex items-center space-x-2 px-4 py-2 mb-2'>
						<FaUsers className='w-5 h-5 text-[#101066]' />
						<span className='text-[#101066] font-medium text-sm sm:text-base leading-[22px]'>
							133 MEMBERS CURRENTLY ONLINE
						</span>
					</div>

					{/* Main Heading */}
					<h1 className='text-4xl sm:text-5xl  font-semibold text-[#101066] mb-4 leading-[60px]'>
						Find your{' '}
						<span className='caveat font-bold text-[70px] leading-[82px] text-[#101066]'>
							community
						</span>
						<br />
						at TrevorSpace.
					</h1>

					{/* Description */}
					<p className='text-lg sm:text-xl lg:text-[22px] text-[#101066] max-w-3xl mx-auto mb-12 leading-8.5'>
						TrevorSpace is a welcoming online social community for LGBTQ+ young
						people between the ages of 13-24 years old. With over 400,000
						members across the globe, you can find support groups and make
						friends in a moderated online safe space intentionally designed for
						you.
					</p>

					{/* Login Link */}
					<div className='text-[#101066] font-medium text-lg leading-6'>
						Already a Member?{' '}
						<button className='underline transition-colors underline-offset-4 hover:decoration-wavy'>
							Log In
						</button>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className='absolute top-1/4 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl'></div>
				<div className='absolute top-1/3 right-16 w-24 h-24 bg-white/10 rounded-full blur-xl'></div>
				<div className='absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl'></div>
				<div className='absolute bottom-1/3 right-1/3 w-12 h-12 bg-white/10 rounded-full blur-xl'></div>
			</main>
		</div>
	);
}
