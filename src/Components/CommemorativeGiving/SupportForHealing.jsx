import supportIllustration from '../../assets/TTP_BrandIllustrations_YouAreCaredFor_Square.png';

export default function SupportForHealing() {
	return (
		<section className='relative py-16 lg:py-24 lg:pb-80 overflow-hidden'>
			<div className='flex flex-col lg:flex-row items-start relative'>
				{/* Image Section */}
				<div className='relative w-full lg:absolute lg:-left-8 lg:top-40 z-10 max-w-2xl mx-auto mb-10 lg:mb-0 px-4'>
					<img
						src={supportIllustration}
						alt='Illustration of people supporting each other in a healing circle'
						className='w-full h-auto rounded-2xl'
					/>
				</div>

				{/* Content Section */}
				<div className='relative z-0 bg-[#f3f3f7] w-full lg:w-[65%] lg:ml-auto p-6 sm:p-8 md:p-12 lg:p-24 rounded-2xl'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold text-[#101066] leading-snug mb-6 text-center'>
						Support for Healing: Resources for Those Who Have Lost A Loved One
						to Suicide
					</h2>

					<p className='text-base sm:text-lg md:text-xl text-[#101066] leading-relaxed mb-8 max-w-3xl mx-auto text-center'>
						You are a fundamental part of Trevor's community, and as you help us
						be there for young people 24/7, we want to help you find the support
						you need to honor the memory of your loved one. Here are some
						Trevor-approved resources you may find helpful and healing.
					</p>

					<div className='flex items-center justify-center'>
						<button className='bg-[#101066] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors'>
							View Here
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
