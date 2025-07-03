import image1 from '../../assets/TTP_Individual_Mel2_Homepage-scaled.jpg';
import image2 from '../../assets/TTP_Individual_Ryan1_Homepage-scaled.jpg';
import image3 from '../../assets/TTP_Individual_Yev_Homepage-scaled.jpg';
import image4 from '../../assets/TTP_Individual_Alexis_Homepage-scaled.jpg';
import image5 from '../../assets/TTP_Individual_Julia1_Homepage-scaled.jpg';
import image6 from '../../assets/TTP_Individual_Breanna_Homepage-scaled.jpg';

const Hero = () => {
	return (
		<>
			<section className='bg-[#ff5a3d] relative overflow-hidden pt-26 -mb-32'>
				<div className='max-w-7xl py-8 flex items-center min-h-screen'>
					<div className='flex w-full items-center justify-between absolute md:pl-60'>
						{/* Left Content */}
						<div className='relative text-white text-left max-w-7xl z-30 ml-5 lg:ml-5 md:ml-0 sm:ml-0 md:max-w-full sm:max-w-full md:px-4 sm:px-4'>
							<div className='font-semibold text-2xl lg:text-6xl md:text-4xl sm:text-3xl leading-tight mb-8'>
								<h1>You deserve a </h1>
								<span className='font-bold text-[82px] lg:text-[82px] md:text-5xl sm:text-4xl caveat'>
									welcoming, loving world.
								</span>
							</div>
							<p className='text-xl lg:text-xl md:text-lg sm:text-base leading-8 max-w-md lg:max-w-md md:max-w-full sm:max-w-full'>
								And so do the people you care about. Here you can reach out to a
								counselor if you're struggling, find answers and information,
								and get the tools you need to help someone else.
							</p>
						</div>

						{/* Right Images - DESKTOP ONLY - Keep exactly as original */}
						<div className='absolute flex-shrink-0 z-10 right-0 mt-8 pr-8 hidden lg:block'>
							{/* First Image - Top, Tilted Left */}
							<div className='relative z-10 mb-4 right-40 top-8'>
								<img
									src={image1}
									alt='Smiling person in yellow cardigan'
									className='w-[21rem] h-[21rem] object-cover rounded-lg shadow-lg transform -rotate-6'
								/>
							</div>

							{/* Second Image - Appearing from Right Edge */}
							<div className='relative z-20 -mt-32 -mr-10'>
								<img
									src={image2}
									alt='Smiling person'
									className='w-[30rem] h-[32rem] object-cover rounded-lg shadow-lg'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Collage Section - DESKTOP ONLY - Keep exactly as original */}
				<div className='relative min-h-screen hidden lg:block'>
					{/* Left Image - Black person in pink top */}
					<div className='absolute -left-9 top-0 w-96 h-[30rem] z-10 '>
						<img
							src={image3}
							alt=' Black person in pink top'
							className='w-[26rem] h-[26rem] object-cover rounded-lg shadow-lg transform -rotate-12'
						/>
					</div>

					{/* Center Image - Person in striped sweater with mug */}
					<div className='absolute left-1/2 transform -translate-x-[60%] -top-16 w-[26rem] h-[24rem] z-20'>
						<img
							src={image5}
							alt='Black person in pink top'
							className='w-[22rem] h-[28rem] object-cover rounded-lg shadow-lg transform rotate-6'
						/>
					</div>

					{/* Right Image - Person in red/burgundy overlapping image*/}
					<div className='absolute left-2/3 -translate-x-[30%] -bottom-8 w-[26rem] h-[30rem] z-10 transform rotate-12'>
						<img
							src={image6}
							alt='Black person in pink top'
							className='w-md h-[30rem] object-cover rounded-lg shadow-lg'
						/>
					</div>
					{/* Bottom Left - Overlapping image */}
					<div className='absolute left-72 bottom-32 w-96 h-[20rem] z-30'>
						<img
							src={image4}
							alt=' Black person in pink top'
							className='w-md h-[30rem] object-cover rounded-lg shadow-lg transform '
						/>
					</div>
				</div>

				{/* MOBILE/TABLET ONLY - All images at bottom */}
				<div className='block lg:hidden pt-8 pb-16'>
					<div className='relative px-4 max-w-4xl mx-auto min-h-[500px]'>
						{/* Image 1 - Bottom left */}
						<div className='absolute left-4 bottom-0 w-32 h-40 md:w-40 md:h-48 z-10'>
							<img
								src={image1}
								alt='Smiling person in yellow cardigan'
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>

						{/* Image 2 - Center left, overlapping */}
						<div className='absolute left-12 bottom-24 w-28 h-36 md:w-36 md:h-44 z-20'>
							<img
								src={image2}
								alt='Smiling person'
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>

						{/* Image 3 - Top center */}
						<div className='absolute left-1/2 top-0 transform -translate-x-1/2 w-36 h-44 md:w-44 md:h-52 z-30'>
							<img
								src={image3}
								alt='Black person in pink top'
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>

						{/* Image 4 - Center right, largest */}
						<div className='absolute right-4 top-16 w-40 h-48 md:w-48 md:h-56 z-40'>
							<img
								src={image4}
								alt='Black person in pink top'
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>

						{/* Image 5 - Bottom center */}
						<div className='absolute left-1/2 bottom-8 transform -translate-x-1/2 w-32 h-40 md:w-40 md:h-48 z-15'>
							<img
								src={image5}
								alt='Black person in pink top'
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>

						{/* Image 6 - Bottom right */}
						<div className='absolute right-8 bottom-32 w-28 h-36 md:w-36 md:h-44 z-25'>
							<img
								src={image6}
								alt='Black person in pink top'
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
