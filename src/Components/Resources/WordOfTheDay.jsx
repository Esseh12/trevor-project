import React from 'react';

const WordOfTheDay = ({
	label = 'Word of the Day',
	word = 'Folx',
	pronunciation = '[ fohks ]',
	definition = `A gender neutral and inclusive way to refer to other people that
is a variation of the term "folks." The "x" is meant to signify
the variability of identity and experience of the LGBTQ community,
as well as intentionally highlight the inclusion of those who are
nonbinary or gender expansive.`,
}) => {
	return (
		<section className='relative w-full bg-gradient-to-b from-[#f17565] via-[#f1ae70] to-[#f1c885]'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-14 py-16 sm:py-20 lg:py-24'>
				<div className='max-w-2xl'>
					{/* Label */}
					<div className='mb-4'>
						<span className='text-sm sm:text-base font-semibold text-[#101066] uppercase'>
							{label}
						</span>
					</div>

					{/* Word */}
					<h1 className='mb-4'>
						<span className='block text-3xl sm:text-4xl font-bold text-[#101066] leading-snug'>
							{word}
						</span>
					</h1>

					{/* Pronunciation */}
					<div className='mb-4'>
						<span className='text-base sm:text-xl text-[#101066] font-medium'>
							{pronunciation}
						</span>
					</div>

					{/* Definition */}
					<div className='max-w-md'>
						<p className='text-sm sm:text-base md:text-xl text-[#101066] font-medium leading-relaxed'>
							{definition}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WordOfTheDay;
