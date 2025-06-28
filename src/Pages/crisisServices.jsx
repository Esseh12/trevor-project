import heroImg from '../assets/TTP_BrandIllustrations_DayAndNight_Horizontal.webp';
import lady from '../assets/AdobeStock.jpg';
import Hero from '../Components/Volunteer/Hero';
import MainCrisis from '../Components/CrisisServices/mainCrisis';
import OtherWaysToHelp from '../Components/OtherWaysToHelp';
import Footer from '../Components/footer';

const CrisisServices = () => {
	return (
		<>
			<section>
				<div className='relative'>
					<Hero
						title='Providing 24/7 crisis care for '
						highlight='LGBTQ+ young people.'
						image={heroImg}
						subText={`Crisis counselors are trained to answer calls, chats, or texts from LGBTQ+ young people who reach out on our free, confidential and secure 24/7 service when they are struggling with issues such as coming out, LGBTQ+ identity, depression, and suicide.`}
						imageSize='medium'
					/>
					<div className='h-12 md:h-24' />
				</div>
				<MainCrisis />
				{/* yellow section */}
				<section className='bg-yellow-400  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-7xl mx-auto w-full'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
							{/* Image Section */}
							<div className='flex justify-center lg:justify-end order-2 lg:order-1'>
								<div className='relative'>
									<div className='w-80 h-96 sm:w-96 sm:h-[28rem] bg-black rounded-lg overflow-hidden shadow-2xl'>
										<img
											src={lady}
											alt='Smiling person in red hijab'
											className='w-full h-full object-cover'
											loading='lazy'
										/>
									</div>
								</div>
							</div>

							{/* Quote Section */}
							<div className='flex flex-col justify-center order-1 lg:order-2 text-center'>
								<div className='space-y-6'>
									{/* Quote marks */}
									<div className='text-6xl sm:text-7xl lg:text-8xl font-serif text-blue-900 leading-none'>
										"
									</div>

									{/* Quote text */}
									<blockquote className='text-2xl sm:text-3xl lg:text-4xl font-medium text-blue-900 leading-tight -mt-4'>
										Training to become a Trevor counselor opened up an entirely
										new world for me.
									</blockquote>

									{/* Attribution */}
									<div className='pt-4'>
										<cite className='text-lg sm:text-xl text-blue-800 font-medium not-italic'>
											Anonymous
										</cite>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<OtherWaysToHelp />
			</section>
			<Footer />
		</>
	);
};
export default CrisisServices;
