import { Link } from 'react-router-dom';
import img1 from '../../assets/TTP_BrandIllustrations_Connection_Square.webp';
import img2 from '../../assets/TTP_BrandIllustrations_DayAndNight_Square.png';
import img3 from '../../assets/TTP_BrandIllustrations_SharedResources_Square.webp';

const MainReachCounsellor = () => {
	return (
		<>
			<section className='py-8 sm:py-12 md:py-16 pt-0 px-4 space-y-8 sm:space-y-12 md:space-y-16'>
				<section className='mt-12 sm:mt-20 md:mt-28'>
					<div className='flex flex-col justify-center items-center text-center px-2 sm:px-4 max-w-[800px] mx-auto'>
						<h1 className='text-[#101066] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-7 sm:leading-9 md:leading-12 lg:leading-14 font-bold mb-3 sm:mb-4'>
							Our trained counselors understand the challenges LGBTQ+ young
							people face and are available for support 24/7.
						</h1>
						<p className='max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-[#101066]'>
							They will listen without judgment. When you text, chat, or call,
							all of your conversations are confidential, and you can share as
							much or as little as you'd like.
						</p>
					</div>
				</section>

				{/* Block 1: Image Left on Desktop/Tablet, Image First on Mobile */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20'>
					<img
						src={img1}
						alt='supportive adult'
						className='w-full sm:w-4/5 md:w-[44%] h-64 sm:h-80 md:h-[350px] lg:h-[420px] object-cover rounded-lg'
					/>
					<div className='space-y-3 sm:space-y-4 text-center w-full'>
						<div className='text-[#101066]'>
							<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-6 sm:leading-8 md:leading-10 lg:leading-12 text-center max-w-md mx-auto'>
								Text us from anywhere, anytime.
							</h1>
							<p className='text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-6 sm:leading-7 md:leading-8 mt-2'>
								Standard text messaging rates may apply.
							</p>
						</div>
						<div className='flex flex-col gap-3 sm:gap-4 md:gap-5 items-center justify-center pt-2'>
							<button className='bg-[#ff5a3d] hover:bg-[#ff5a3d]/80 text-base sm:text-lg md:text-[19px] font-bold leading-5 sm:leading-5.5 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto'>
								Text 'START' to 678-678
							</button>
							<Link
								to='#'
								className='text-base sm:text-lg font-semibold leading-5 sm:leading-6 text-[#101066] underline underline-offset-4 hover:decoration-wavy'>
								What to expect +
							</Link>
						</div>
					</div>
				</div>

				{/* Block 2: Text Left on Desktop/Tablet, Image First on Mobile */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20'>
					{/* Mobile: Image First */}
					<img
						src={img2}
						alt='support example'
						className='w-full sm:w-4/5 md:w-[44%] h-64 sm:h-80 md:h-[350px] lg:h-[420px] object-cover rounded-lg md:order-2'
					/>
					{/* Desktop/Tablet: Text First, Mobile: Text Second */}
					<div className='space-y-3 sm:space-y-4 text-center w-full md:order-1'>
						<div className='text-[#101066]'>
							<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-6 sm:leading-8 md:leading-10 lg:leading-12 text-center max-w-md mx-auto'>
								Reach out to hear a live voice on the line.
							</h1>
						</div>
						<div className='flex flex-col gap-3 sm:gap-4 md:gap-5 items-center justify-center pt-2'>
							<button className='bg-[#ff5a3d] hover:bg-[#ff5a3d]/80 text-base sm:text-lg md:text-[19px] font-bold leading-5 sm:leading-5.5 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto'>
								Call us at 1-866-488-7386
							</button>
							<Link
								to='#'
								className='text-base sm:text-lg font-semibold leading-5 sm:leading-6 text-[#101066] underline underline-offset-4 hover:decoration-wavy'>
								What to expect +
							</Link>
						</div>
					</div>
				</div>

				{/* Block 3: Image Left on Desktop/Tablet, Image First on Mobile */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20'>
					<img
						src={img3}
						alt='support another'
						className='w-full sm:w-4/5 md:w-[44%] h-64 sm:h-80 md:h-[350px] lg:h-[420px] object-cover rounded-lg'
					/>
					<div className='space-y-3 sm:space-y-4 text-center w-full'>
						<div className='text-[#101066]'>
							<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-6 sm:leading-8 md:leading-10 lg:leading-12 text-center max-w-md mx-auto'>
								At your computer? Send us a message.
							</h1>
						</div>
						<div className='flex flex-col gap-3 sm:gap-4 md:gap-5 items-center justify-center pt-2'>
							<button className='bg-[#ff5a3d] hover:bg-[#ff5a3d]/80 text-base sm:text-lg md:text-[19px] font-bold leading-5 sm:leading-5.5 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto'>
								Start Chat
							</button>
							<Link
								to='#'
								className='text-base sm:text-lg font-semibold leading-5 sm:leading-6 text-[#101066] underline underline-offset-4 hover:decoration-wavy'>
								What to expect +
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default MainReachCounsellor;
