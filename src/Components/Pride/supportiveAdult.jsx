import { Link } from 'react-router-dom';
import supportIllustration from '../../assets/TTP_BrandIllustrations_ReachForTheStars_Square-720.webp';

const SupportiveAdult = () => {
	return (
		<>
			<section className='relative py-16 lg:py-24 lg:pb-80 overflow-hidden lg:mb-20 mx-6 md:mx-0'>
				<div className='flex flex-col lg:flex-row items-start relative gap-8 lg:gap-0'>
					{/* Image Section */}
					<div className='relative w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto px-4 lg:px-0 lg:absolute lg:-left-8 lg:top-40 z-10 mb-10 lg:mb-0'>
						<img
							src={supportIllustration}
							alt='Illustration of people supporting each other in a healing circle'
							className='w-full h-auto rounded-2xl object-contain'
						/>
					</div>

					{/* Content Section */}
					<div className='relative z-0 bg-[#ff5a3d] w-full lg:w-[65%] lg:ml-auto p-6 sm:p-8 md:p-12 lg:p-24 lg:py-36 rounded-2xl text-white '>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold  leading-snug mb-6 text-center max-w-xl mx-auto'>
							Be the supportive adult they need: Pride Donations
						</h2>

						<p className='text-sm sm:text-base md:text-lg  leading-relaxed mb-8 max-w-xl mx-auto text-center'>
							Each gift helps fund critical crisis intervention and prevention
							services, letting young people know they are valued and belong.
							It’s time to show them they’re not alone.
						</p>

						<div className='flex justify-center items-center'>
							<Link
								to='/be-the-one'
								className='bg-[#101066] text-white p-4 rounded-lg'>
								Donate Now
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default SupportiveAdult;
