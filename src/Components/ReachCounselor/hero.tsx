import { IoIosArrowDown } from 'react-icons/io';
import chat from '../../assets/TTP_Icons_Indigo_Chat.svg';
import call from '../../assets/TTP_Icons_Indigo_Call.svg';
import text from '../../assets/TTP_Icons_Indigo_Text.svg';

const Hero = () => {
	return (
		<>
			<div className='min-h-screen bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pb-10 md:pb-14 pt-36 lg:pt-48'>
				{/* Hero Section */}
				<div className='text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#101066] mb-3 sm:mb-4 px-2'>
						We're here
						<span className='caveat text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-1 sm:ml-2'>
							for you
						</span>
					</h1>
					<p className='mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-[#101066] max-w-3xl mx-auto px-2'>
						If you are thinking about harming yourself — get immediate crisis
						support. Connect to a crisis counselor 24/7, 365 days a year, from
						anywhere in the U.S via text, chat, or phone. The Trevor Project is
						100% confidential and 100% free.
					</p>
				</div>

				{/* Contact Options */}
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-xs sm:max-w-sm md:max-w-3xl px-2 sm:px-0'>
					{/* Chat With Us */}
					<div className='bg-white rounded-lg shadow-lg p-6 sm:p-7 md:p-8 text-center hover:shadow-xl transition-shadow duration-300'>
						<div className='flex justify-center mb-4 sm:mb-5 md:mb-6'>
							<div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center'>
								<img
									src={chat}
									alt='chat'
									className='w-full h-full object-contain'
								/>
							</div>
						</div>
						<button className='w-full bg-[#101066] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#101066]/80 transition-colors duration-200 text-sm sm:text-base'>
							Chat With Us
						</button>
					</div>

					{/* Call Us */}
					<div className='bg-white rounded-lg shadow-lg p-6 sm:p-7 md:p-8 text-center hover:shadow-xl transition-shadow duration-300'>
						<div className='flex justify-center mb-4 sm:mb-5 md:mb-6'>
							<div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center'>
								<img
									src={call}
									alt='call'
									className='w-full h-full object-contain'
								/>
							</div>
						</div>
						<button className='w-full bg-[#101066] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#101066]/80 transition-colors duration-200 text-sm sm:text-base'>
							Call Us
						</button>
					</div>

					{/* Text Us */}
					<div className='bg-white rounded-lg shadow-lg p-6 sm:p-7 md:p-8 text-center hover:shadow-xl transition-shadow duration-300'>
						<div className='flex justify-center mb-4 sm:mb-5 md:mb-6'>
							<div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center'>
								<img
									src={text}
									alt='text'
									className='w-full h-full object-contain'
								/>
							</div>
						</div>
						<button className='w-full bg-[#101066] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#101066]/80 transition-colors duration-200 text-sm sm:text-base'>
							Text Us
						</button>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className='mt-10 sm:mt-12 md:mt-16 animate-bounce'>
					<IoIosArrowDown className='text-3xl sm:text-4xl text-[#101066]' />
				</div>
			</div>
		</>
	);
};
export default Hero;
