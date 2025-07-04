import { Link } from 'react-router-dom';
import supportIllustration from '../../assets/TTP_Research_NationalSurvey_Recruitment_V02_Square-1080x1080-Slide-6.png';

const Research = () => {
	return (
		<>
			<section className='relative py-16 lg:py-24 lg:pb-80 overflow-hidden lg:mb-20'>
				<div className='flex flex-col lg:flex-row items-start relative gap-8 lg:gap-0 -ml-4'>
					{/* Content Section - Now on the left */}
					<div className='relative z-0 bg-[#6b5df6] w-full lg:w-[65%] lg:mr-auto p-6 sm:p-8 md:p-12 lg:p-24 lg:py-36 rounded-2xl text-white'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold  leading-snug mb-6 text-center max-w-xl mx-auto'>
							The state of LGBTQ+ research in the United States is in trouble
						</h2>

						<p className='text-sm sm:text-base md:text-lg  leading-relaxed mb-8 max-w-xl mx-auto text-center'>
							Here's how you can help! The Trevor Project's 2025 U.S. National
							Survey for LGBTQ+ Young People is now open. Share this link with
							LGBTQ+ youth in your community today: trvr.org/NationalSuvery2025
						</p>

						<div className='flex justify-center items-center'>
							<Link
								to='/be-the-one'
								className='bg-[#101066] text-white p-4 rounded-lg'>
								Share on Instagram
							</Link>
						</div>
					</div>

					{/* Image Section - Now on the right */}
					<div className='relative w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto px-4 lg:px-0 lg:absolute lg:-right-8 lg:top-40 z-10 mb-10 lg:mb-0'>
						<img
							src={supportIllustration}
							alt='Illustration of people supporting each other in a healing circle'
							className='w-full h-auto rounded-2xl object-contain'
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default Research;
