import Hero from '../Components/CommemorativeGiving/Hero';
import CommemorativeGivingMain from '../Components/CommemorativeGiving/CommemorativeGivingMain';
import SupportForHealing from '../Components/CommemorativeGiving/SupportForHealing';
import CommemorativeCarousel from '../Components/CommemorativeGiving/CommemorativeTestimonial';
import Footer from '../Components/footer';

const CommemorativeGiving = () => {
	return (
		<>
			<main>
				<Hero />
				<CommemorativeGivingMain />
				<CommemorativeCarousel />
				<SupportForHealing />

				{/* Base component */}
				<section className='py-16 sm:py-20 md:py-28 bg-[#f3f3f7] px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<p className='text-2xl sm:text-3xl md:text-[42px] leading-snug md:leading-[3.5rem] text-[#003a48] font-semibold'>
							Become an advocate and help us create a more supportive world.
						</p>
						<div className='flex justify-center mt-6 md:mt-10 lg:mt-12'>
							<button className='text-base sm:text-lg md:text-xl font-semibold text-white bg-[#003a48] py-3 sm:py-4 px-6 sm:px-8 rounded-xl'>
								ways to advocate
							</button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};
export default CommemorativeGiving;
