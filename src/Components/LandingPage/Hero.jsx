import image1 from '../../assets/TTP_Individual_Mel2_Homepage-scaled.jpg';
import image2 from '../../assets/TTP_Individual_Ryan1_Homepage-scaled.jpg';
import image3 from '../../assets/TTP_Individual_Yev_Homepage-scaled.jpg';
import image4 from '../../assets/TTP_Individual_Alexis_Homepage-scaled.jpg';
import image5 from '../../assets/TTP_Individual_Julia1_Homepage-scaled.jpg';
import image6 from '../../assets/TTP_Individual_Breanna_Homepage-scaled.jpg';

const Hero = () => {
	return (
		<>
			<section className='bg-[#ff5a3d] relative overflow-hidden pt-44 '>
				<div className='max-w-7xl py-16 flex items-center min-h-screen'>
					<div className='flex w-full items-center justify-between absolute pl-36'>
						{/* Left Content */}
						<div className='relative text-white text-left max-w-7xl z-30 ml-5'>
							<div className='font-semibold text-7xl leading-tight mb-8'>
								<h1>You deserve a </h1>
								<span className='font-bold text-[100px] caveat'>
									welcoming, loving world.
								</span>
							</div>
							<p className='text-2xl leading-relaxed max-w-xl'>
								And so do the people you care about. Here you can reach out to a
								counselor if you're struggling, find answers and information,
								and get the tools you need to help someone else.
							</p>
						</div>

						{/* Right Images */}
						<div className='absolute flex-shrink-0 z-10 right-24 mt-5'>
							{/* First Image - Top, Tilted Left */}
							<div className='relative z-10 mb-4'>
								<img
									src={image1}
									alt='Smiling person in yellow cardigan'
									className='w-[26rem] h-[26rem] object-cover rounded-lg shadow-lg transform -rotate-12'
								/>
							</div>

							{/* Second Image - Bottom Right, Overlapping, Coming from Right Edge */}
							<div className='relative z-20 -mt-32 ml-40 overflow-x-hidden'>
								<img
									src={image2}
									alt='Smiling person'
									className='w-[30rem] h-[32rem] object-cover rounded-lg'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Collage Section - Separate from hero */}

				<div className='relative min-h-screen'>
					{/* Left Image - Black person in pink top */}
					<div className='absolute -left-9 top-0 w-96 h-[30rem] z-10 '>
						{/* Placeholder for left image */}
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

					{/* Right Image - Person in red/burgundy */}
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
			</section>
		</>
	);
};

export default Hero;
