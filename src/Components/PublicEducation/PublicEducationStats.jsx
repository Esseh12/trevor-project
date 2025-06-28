import React from 'react';

const PublicEducationStats = () => {
	return (
		<section className='bg-white sm:py-12 md:py-16 lg:py-20 mt-16 sm:mt-48'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Main heading */}
				<div className='text-center mb-6 '>
					<h2
						className='text-2xl sm:text-3xl md:text-4xl font-semibold sm:leading-14 max-w-lg mx-auto'
						style={{ color: '#003A48' }}>
						We've increased our efforts in public education
					</h2>
				</div>

				{/* Description paragraph */}
				<div className='text-center mb-16'>
					<p
						className='text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xl mx-auto'
						style={{ color: '#003A48' }}>
						Through innovative online LGBTQ+ suicide prevention trainings and
						strategic partnerships across the United States, we have been able
						to reach more people than ever before.
					</p>
				</div>

				{/* Statistics section */}
				<div className='text-center'>
					{/* Large number */}
					<div className='mb-6'>
						<span
							className='text-6xl sm:text-7xl md:text-[70px]  font-semibold leading-[70px] block'
							style={{ color: '#003A48' }}>
							100,000+
						</span>
					</div>

					{/* Description text */}
					<div className='max-w-sm mx-auto'>
						<p
							className='leading-7 text-lg sm:text-xl md:text-[22px]'
							style={{ color: '#003A48' }}>
							Youth and youth-serving adults reached through our CARE, Ally, and
							Lifeguard workshops.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PublicEducationStats;
