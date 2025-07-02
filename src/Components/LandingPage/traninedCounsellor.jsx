import supportIllustration from '../../assets/TTP_BrandIllustrations_DayAndNight_Square.png';

export default function TrainedCounsellor() {
	return (
		<section className='relative py-16 lg:py-24 lg:pb-80 overflow-hidden lg:mb-20'>
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
				<div className='relative z-0 bg-[#dbd5ff] w-full lg:w-[65%] lg:ml-auto p-6 sm:p-8 md:p-12 lg:p-24 rounded-2xl'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold text-[#101066] leading-snug mb-6 text-center max-w-xl mx-auto'>
						Reach out to one of our trained counselors.
					</h2>

					<p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#101066] leading-relaxed mb-8 max-w-3xl mx-auto text-center'>
						Call, text, or chat with us anytime you need support. If you are
						thinking about suicide, or feeling lonely, we’re here to listen.
					</p>
				</div>
			</div>
		</section>
	);
}
