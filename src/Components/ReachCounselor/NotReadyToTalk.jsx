import React from 'react';

export default function NotReadyToTalk() {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			{/* Faded background gradient layer */}
			<div className='absolute inset-0 z-0'>
				<div className='bg-white w-full h-full md:bg-[linear-gradient(to_bottom,_#8b5cf6_0%,_#a855f7_25%,_#c084fc_50%,_#ddd6fe_75%,_#e9d5ff_100%)] md:opacity-10' />
			</div>

			{/* Purple blob (organic water drop shape) */}
			<div className='hidden absolute inset-0 md:flex items-center justify-center z-0 '>
				<div
					className='relative'
					style={{
						width: '900px',
						height: '900px',
						background:
							'linear-gradient(135deg, #edeafe 0%, #a855f7 25%, #beb5fe 50%, #ddd6fe 75%, #b4a8fc 100%)',
						borderRadius: '65% 35% 25% 75% / 55% 45% 35% 65%',
						transform: 'rotate(15deg) scaleX(-1)',
						opacity: 0.2,
					}}
				/>
			</div>

			{/* Foreground content */}
			<div className='relative z-10 flex items-center justify-center min-h-screen px-4'>
				<div className='text-center max-w-md'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
						Not ready to talk?
					</h2>

					<p className='text-lg text-gray-700 mb-8 leading-relaxed'>
						It's not easy to say how you're feeling. Try this calming exercise
						that will help you relax and focus.
					</p>

					<button className='bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200'>
						Start
					</button>
				</div>
			</div>
		</div>
	);
}
