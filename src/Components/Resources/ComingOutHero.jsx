import React from 'react';
import comingOut from '../../assets/Coming-Out-Handbook_Blog_1200x770-1440x924.webp';

const ComingOutHero = () => {
	return (
		<div className='relative min-h-screen w-full overflow-hidden'>
			{/* Background Image */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: `url(${comingOut})`,
				}}>
				{/* Overlay */}
				<div className='absolute inset-0 bg-black/20'></div>
			</div>

			{/* Main hero content */}
			<div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center'>
				{/* Badge */}
				<div className='mb-4 sm:mb-8'>
					<span className='inline-block px-3 py-1 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider'>
						The Coming Out Handbook
					</span>
				</div>

				{/* Main heading */}
				<div className='mb-6 sm:mb-12 max-w-4xl'>
					<h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg'>
						Explore what{' '}
						<span className='text-3xl sm:text-5xl md:text-7xl font-bold text-white caveat inline mt-1'>
							coming out
						</span>{' '}
						means to you with tools and guiding questions.
					</h1>
				</div>

				{/* CTA Button */}
				<div className='mb-10 sm:mb-16'>
					<button className='px-6 py-3 sm:px-10 sm:py-5 text-base sm:text-xl font-semibold text-white underline underline-offset-8 '>
						<span className='relative z-10'>Read Guide</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ComingOutHero;
