import { FaChevronDown } from 'react-icons/fa6';

const Hero = () => {
	const scrollToInsights = () => {
		const el = document.getElementById('CriticalInsights');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className='bg-[#ff5a3d] h-[60vh] flex items-center justify-center pt-14 px-4'>
			<div className='text-white space-y-4 text-center max-w-4xl'>
				<p className='font-bold text-base sm:text-xl md:text-2xl leading-snug'>
					International Surveys on LGBTQ+ Youth Mental Health
				</p>
				<h1 className='text-4xl md:text-5xl lg:text-[52px] leading-tight font-extrabold'>
					Support starts with knowledge.
				</h1>
				<div className='flex items-center justify-center pt-4'>
					<button
						onClick={scrollToInsights}
						aria-label='Scroll to Critical Insights section'
						className='animate-bounce'>
						<FaChevronDown className='text-3xl md:text-4xl font-extrabold' />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
