import { IoIosArrowDown } from 'react-icons/io';
import chat from '../assets/TTP_Icons_Indigo_Chat.svg';
import call from '../assets/TTP_Icons_Indigo_Call.svg';
import text from '../assets/TTP_Icons_Indigo_Text.svg';
import Footer from '../Components/footer';

const BreathingExercise = () => {
	return (
		<>
			<main>
				<div className='min-h-screen bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 flex flex-col items-center justify-center px-12 sm:px-8 md:px-4 py-14 sm:py-10 md:py-8'>
					{/* Hero Section */}
					<div className='text-center mb-12 max-w-4xl'>
						<h1 className='text-3xl md:text-4xl lg:text-[40px] font-bold text-[#101066] mb-4'>
							Visual Breathing Exercise for Stress & Anxiety
						</h1>
					</div>

					{/* Contact Options */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl'>
						{/* Chat With Us */}
						<div className='bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
							<div className='flex justify-center mb-6'>
								<div className='w-16 h-16  flex items-center justify-center'>
									<img
										src={chat}
										alt='chat'
									/>
								</div>
							</div>
							<button className='w-full bg-[#101066] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#101066]/80 transition-colors duration-200'>
								Chat With Us
							</button>
						</div>

						{/* Call Us */}
						<div className='bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
							<div className='flex justify-center mb-6'>
								<div className='w-16 h-16  flex items-center justify-center'>
									<img
										src={call}
										alt='call'
									/>
								</div>
							</div>
							<button className='w-full bg-[#101066] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#101066]/80 transition-colors duration-200'>
								Call Us
							</button>
						</div>

						{/* Text Us */}
						<div className='bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
							<div className='flex justify-center mb-6'>
								<div className='w-16 h-16 flex items-center justify-center'>
									<img
										src={text}
										alt='text'
									/>
								</div>
							</div>
							<button className='w-full bg-[#101066] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#101066]/80 transition-colors duration-200'>
								Text Us
							</button>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className='mt-16 animate-bounce'>
						<IoIosArrowDown className='text-4xl text-[#101066]' />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default BreathingExercise;
