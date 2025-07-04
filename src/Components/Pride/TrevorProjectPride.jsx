const TrevorProjectPride = () => {
	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='bg-[#40009a] text-white py-20 px-4'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-3xl font-semibold mb-6 leading-tight max-w-xl mx-auto'>
						2024 U.S. National Survey on the Mental Health of LGBTQ+ Young
						People by State
					</h1>
					<p className='text-lg  mb-8 leading-relaxed max-w-2xl mx-auto opacity-90'>
						State by state, this report offers a unique and detailed look at
						mental health and suicide risk, access to care, impacts of
						anti-LGBTQ+ victimization and policies, and methods of support for
						LGBTQ+ youth – as described by a national sample of LGBTQ+ young
						people themselves.
					</p>
					<button className='bg-white text-purple-900 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors'>
						Learn More
					</button>
				</div>
			</section>

			{/* Video Section */}
			<section className='py-16 px-4 '>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Listen to young LGBTQ+ voices
						</h2>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Help LGBTQ+ young people see a bright future for themselves, no
							matter where they live.
						</p>
					</div>

					{/* YouTube Video Container */}
					<div className='relative bg-black rounded-lg overflow-hidden shadow-2xl mb-8 max-w-5xl mx-auto'>
						<div className='aspect-video'>
							<iframe
								className='w-full h-full'
								src='https://www.youtube.com/embed/X5iQwAxah7Y'
								title='Pride Belongs Here'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className='py-0 pb-8 px-4 bg-white'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='text-lg md:text-xl text-gray-700 mb-8 leading-relaxed'>
						LGBTQ+ young people deserve to feel pride in who they are, no matter
						where they live. Pride is here to stay, even if we all don't
						celebrate the same way. By showing up as allies and supporters,
						we're signaling to LGBTQ+ young people everywhere they are valued
						and have community, no matter where they're from. Pride is more than
						a celebration – it's a commitment to ensuring LGBTQ+ young people
						know that they're not alone.
					</p>
					<button className='bg-indigo-900 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-indigo-800 transition-colors'>
						Donate Now
					</button>
				</div>
			</section>
		</div>
	);
};

export default TrevorProjectPride;
