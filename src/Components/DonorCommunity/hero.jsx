import heroImg from '../../assets/TTP_Group_TheNextkidz1-Naomi-Camille.jpg';

const Hero = () => {
	return (
		<section className='bg-[#003a48] min-h-screen flex items-center justify-center pt-36 md:pt-16 px-4'>
			<div className='flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto'>
				{/* Text container */}
				<div className='text-white max-w-xl text-center lg:text-left'>
					<h1 className='text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight'>
						<span className='caveat block text-[48px] sm:text-[60px] lg:text-[70px] leading-[1.2]'>
							Shine a light on
						</span>
						the life that every LGBTQ+ young person deserves.
					</h1>

					<p className='text-base sm:text-lg lg:text-xl leading-relaxed mt-4 mb-8'>
						Committed volunteers, caring counselors and staff, and generous
						donors like you. That’s the circle of unwavering support that makes
						The Trevor Project’s life-affirming work possible every minute of
						the day, for every LGBTQ+ young person in crisis.
					</p>

					<button className='bg-white px-6 py-4 text-[#003a48] text-lg font-bold rounded-lg'>
						Give Today
					</button>
				</div>

				{/* Image container */}
				<div className='w-full max-w-md'>
					<img
						src={heroImg}
						alt='two girls hugging'
						className='rounded-2xl w-full h-[350px] sm:h-[400px] lg:h-[350px] object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
