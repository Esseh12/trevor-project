import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { newsItems, resources } from '../Components/data';
import heroImg from '../assets/TTP_BrandIllustrations_ShowYourPride_Square.png';
import Hero from '../Components/Press/hero';
import ResourceCard from '../Components/Press/resourceCard';
import Contact from '../Components/Press/contact';
import Footer from '../Components/footer';

const NewsPress = () => {
	const [sortOrder, setSortOrder] = useState('newest');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const sortedNewsItems = [...newsItems].sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
	});

	return (
		<>
			<main>
				<Hero
					title='News Articles & Press Releases from The Trevor Project'
					subtitle='We’ve been making real strides in advocacy, education, and crisis support for LGBTQ+ young people – find the latest LGBTQ+ news and press releases to support your reporting here.'
					image={heroImg}
				/>
				;
				<section className='max-w-6xl mx-auto px-4 py-12'>
					<div className='flex justify-between items-center mb-8'>
						<div className='relative inline-block text-left mb-8'>
							<button
								onClick={() => setDropdownOpen(!dropdownOpen)}
								className='flex items-center gap-2 border-2 border-[#003A48] rounded-lg px-4 py-3 text-[#003A48] font-semibold text-lg md:text-2xl leading-tight'>
								Sort By:{' '}
								{sortOrder === 'newest'
									? 'Newest to Oldest'
									: 'Oldest to Newest'}
								<FaChevronDown
									className={`transition-transform  ${
										dropdownOpen ? 'rotate-180' : ''
									}`}
								/>
							</button>

							{dropdownOpen && (
								<div className='absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg'>
									<button
										onClick={() => {
											setSortOrder('newest');
											setDropdownOpen(false);
										}}
										className='block w-full text-left px-4 py-2 text-[#003A48] hover:bg-gray-100'>
										Newest to Oldest
									</button>
									<button
										onClick={() => {
											setSortOrder('oldest');
											setDropdownOpen(false);
										}}
										className='block w-full text-left px-4 py-2 text-[#003A48] hover:bg-gray-100'>
										Oldest to Newest
									</button>
								</div>
							)}
						</div>
					</div>

					<div className='space-y-6'>
						{sortedNewsItems.map((item) => (
							<article
								key={item.id}
								className='flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 pb-6 md:pb-10 border-b border-gray-200 transition-colors cursor-pointer'>
								<div className='w-24 md:w-36 h-24 md:h-32 rounded-lg flex items-center justify-center flex-shrink-0'>
									<img
										src={item.icon}
										alt='blog'
										className='rounded-lg w-full h-full object-cover'
									/>
								</div>
								<div className='flex-1'>
									<div className='text-[#101066] text-xs md:text-sm font-semibold mb-3 md:mb-4'>
										PRESS <span className='font-normal'>{item.date}</span>
									</div>
									<h2 className='text-lg md:text-xl lg:text-[30px] font-semibold text-[#101066] mb-4 md:mb-7.5 leading-6 md:leading-10'>
										{item.title}
									</h2>
									{item.tags && item.tags.length > 0 && (
										<div className='flex flex-wrap gap-2'>
											{item.tags.map((tag) => (
												<span
													key={tag}
													className='bg-blue-100 hover:bg-purple-200 text-[#101066] px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-medium leading-tight md:leading-4.5'>
													{tag}
												</span>
											))}
										</div>
									)}
								</div>
							</article>
						))}
					</div>

					<div className='flex justify-center mt-12'>
						<nav className='flex space-x-2'>
							<button className='w-8 h-8 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-sm md:text-base'>
								1
							</button>
							<button className='w-8 h-8 md:w-10 md:h-10 text-gray-600 hover:bg-gray-100 rounded-full flex items-center justify-center text-sm md:text-base'>
								2
							</button>
							<button className='w-8 h-8 md:w-10 md:h-10 text-gray-600 hover:bg-gray-100 rounded-full flex items-center justify-center text-sm md:text-base'>
								3
							</button>
							<button className='w-8 h-8 md:w-10 md:h-10 text-gray-600 hover:bg-gray-100 rounded-full flex items-center justify-center text-sm md:text-base'>
								4
							</button>
							<button className='w-8 h-8 md:w-10 md:h-10 text-gray-600 hover:bg-gray-100 rounded-full flex items-center justify-center text-sm md:text-base'>
								→
							</button>
						</nav>
					</div>

					{/* bottom section */}
					<div className='max-w-7xl mx-auto px-4 py-20'>
						<h1 className='text-4xl font-bold text-gray-900 mb-12'>
							Educational Resources
						</h1>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{resources.map((resource, index) => (
								<ResourceCard
									key={index}
									{...resource}
								/>
							))}
						</div>
					</div>
				</section>
				<Contact />
			</main>
			<Footer backgroundColor='#101066' />
		</>
	);
};

export default NewsPress;
