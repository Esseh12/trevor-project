import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import hM from '../../assets/HM-Logo.svg';
import sephora from '../../assets/sephora-logo.png';
import macy from '../../assets/Macys-Logo.png';

const Campaign = () => {
	const [isScrollPaused, setIsScrollPaused] = useState(false);
	const scrollRef = useRef(null);

	const partners = [
		{ name: 'SEPHORA', logo: sephora },
		{ name: 'H&M', logo: hM },
		{ name: "macy's", logo: macy },
		{ name: 'SEPHORA', logo: sephora },
		{ name: 'H&M', logo: hM },
		{ name: "macy's", logo: macy },
	];

	const toggleScroll = () => {
		setIsScrollPaused(!isScrollPaused);
	};

	return (
		<div className='min-h-screen bg-white pt-4'>
			{/* Main Content */}
			<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{/* Hero Title */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-[42px] font-bold text-[#101066] mb-4'>
						Be the One for LGBTQ+ Young People
					</h1>
				</div>

				{/* Three Cards Section */}
				<div className='grid md:grid-cols-3 gap-8 mb-20 md:mb-24'>
					{/* Card 1 - Learning */}
					<div className='bg-white rounded-2xl p-8 border-[#9aa0b0] border-2'>
						<h2 className='text-2xl font-bold text-[#101066] mb-6 text-center'>
							Be the One by Learning
						</h2>
						<p className='text-gray-700 mb-8 text-center leading-relaxed'>
							Our Resource Center features a range of guides on sexual
							orientation, gender identity, suicidology, and more to help deepen
							your allyship.
						</p>
						<div className='text-center'>
							<button className='bg-[#101066] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#101066] transition-colors'>
								Learn More
							</button>
						</div>
					</div>

					{/* Card 2 - Giving */}
					<div className='bg-white rounded-2xl p-8 border-[#9aa0b0] border-2'>
						<h2 className='text-2xl font-bold text-[#101066] mb-6 text-center'>
							Be the One by Giving
						</h2>
						<p className='text-gray-700 mb-8 text-center leading-relaxed'>
							LGBTQ+ young people with at least one accepting adult in their
							life report significantly lower rates of attempting suicide. Your
							gift ensures that someone is always there.
						</p>
						<div className='text-center'>
							<button className='bg-[#101066] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#101066] transition-colors'>
								Donate Now
							</button>
						</div>
					</div>

					{/* Card 3 - Fundraising */}
					<div className='bg-white rounded-2xl p-8 border-[#9aa0b0] border-2'>
						<h2 className='text-2xl font-bold text-[#101066] mb-6 text-center'>
							Be the One by Fundraising
						</h2>
						<p className='text-gray-700 mb-8 text-center leading-relaxed'>
							Start a fundraiser and show up for LGBTQ+ young people. There are
							countless ways for you to gather your community to raise funds for
							our mission.
						</p>
						<div className='text-center'>
							<button className='bg-[#101066] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#101066] transition-colors'>
								Start Now
							</button>
						</div>
					</div>
				</div>

				{/* Partners Section */}
				<div className='text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-[#101066] mb-12'>
						Be The One 2024 Partners
					</h2>

					{/* Partners Carousel */}
					{/* Partners Carousel */}
					<div className='relative overflow-hidden'>
						<div
							ref={scrollRef}
							className={`flex items-center space-x-16 md:space-x-20 whitespace-nowrap ${
								isScrollPaused ? '' : 'animate-scroll'
							}`}
							style={{
								animation: isScrollPaused
									? 'none'
									: 'scroll 20s linear infinite',
							}}>
							{partners.map((partner, index) => (
								<div
									key={index}
									className='flex-shrink-0 w-40 h-24 flex items-center justify-center'>
									<img
										src={partner.logo}
										alt={partner.name}
										className='object-contain h-full'
									/>
								</div>
							))}
						</div>

						{/* Pause/Play Button */}
						<div className='flex justify-center mt-8'>
							<button
								onClick={toggleScroll}
								className='flex items-center space-x-2 '>
								{isScrollPaused ? (
									<div className='w-12 h-12 flex items-center justify-center bg-teal-700 text-white  rounded-full hover:bg-teal-800 transition-colors  p-3 '>
										<FaPlay className='w-4 h-4' />
									</div>
								) : (
									<div className='w-12 h-12 flex items-center justify-center bg-teal-700 text-white  rounded-full hover:bg-teal-800 transition-colors  p-3 '>
										<FaPause className='w-4 h-4' />
									</div>
								)}
								<span className='font-bold text-lg'>
									{isScrollPaused ? 'Resume' : 'Pause'} Scrolling
								</span>
							</button>
						</div>
					</div>
				</div>
			</main>

			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(100%);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				.animate-scroll {
					animation: scroll 20s linear infinite;
				}

				@media (max-width: 768px) {
					.animate-scroll {
						animation: scroll 15s linear infinite;
					}
				}
			`}</style>
		</div>
	);
};

export default Campaign;
