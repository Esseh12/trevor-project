import heroImg from '../../assets/TTP_Illustration_CommemorativeGiving.webp';

const Hero = () => {
	return (
		<section className='bg-[#6b5df6] min-h-screen flex items-center justify-center py-12 px-4'>
			<div className='flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10 md:gap-16 mt-24 md:mt-18'>
				{/* Text */}
				<div className='text-white space-y-4 max-w-lg text-center md:text-left'>
					<p className='text-base md:text-lg'>Commemorative Giving</p>
					<h1 className='text-3xl sm:text-4xl md:text-[48px] md:leading-[58px] font-bold'>
						Honor your loved one by building a brighter future
					</h1>
					<p className='text-base sm:text-lg md:text-[20px] md:leading-8 max-w-md mx-auto md:mx-0'>
						The Trevor Project celebrates your loved one’s legacy with you.
						Their memory can become a crucial part of building a safer, more
						inclusive world for LGBTQ+ young people.
					</p>
				</div>
				{/* Image */}
				<div className='w-full max-w-sm md:max-w-md'>
					<img
						src={heroImg}
						alt='hero'
						className='rounded-xl w-full h-auto object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
