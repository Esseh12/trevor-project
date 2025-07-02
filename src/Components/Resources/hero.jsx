import { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa6';

export default function Hero() {
	const [searchValue, setSearchValue] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);

	const popularSearches = [
		'Gender',
		'Gender Identity',
		'Guide',
		'Intersex',
		'LGBTQ',
	];

	const resourceCategories = [
		'Sexual Orientation Resources',
		'LGBTQ+ Mental Health Resources',
		'Resources About Gender Identity',
		'LGBTQ+ Community Resources',
		'Resources for Talking About Suicide',
		'Resources About Diversity Among LGBTQ+ Young People',
	];

	return (
		<div className='min-h-screen pt-32 md:pt-24'>
			{/* Main Content */}
			<div className='flex flex-col items-center justify-center px-4 py-8 lg:py-16 text-center'>
				<div className='mb-8 lg:mb-12'>
					<p className='text-white text-sm lg:text-base mb-4 font-bold leading-5'>
						RESOURCE CENTER
					</p>
					<h1 className='text-white text-3xl lg:text-[50px] leading-[62px] font-bold '>
						Connection starts with
					</h1>
					<h1 className='text-white text-3xl lg:text-[70px] caveat font-bold '>
						knowledge.
					</h1>
				</div>

				{/* Search Section */}
				<div className='rounded-2xl relative w-full max-w-md lg:max-w-lg mb-8 bg-white'>
					<div className='relative'>
						<MdOutlineSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#101066]  w-6 h-6' />
						<input
							type='text'
							placeholder='What do you want to learn about?'
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							onFocus={() => setShowDropdown(true)}
							onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
							className='w-full pl-12 pr-6 py-6 rounded-2xl text-[#101066]  placeholder-[#101066] outline-none'
						/>
					</div>

					{showDropdown && (
						<div className='absolute top-full left-0 right-0 bg-white rounded-lg mt-2 shadow-lg z-10'>
							<div className='p-3 border-b border-gray-200'>
								<p className='text-xs text-gray-500 font-semibold'>
									Popular Searches
								</p>
							</div>
							{popularSearches.map((item, index) => (
								<div
									key={index}
									className='px-4 py-2 hover:bg-gray-50 cursor-pointer text-left text-gray-700'>
									{item}
								</div>
							))}
						</div>
					)}
				</div>

				<p className='text-white text-base lg:text-lg mb-8 lg:mb-12'>
					Browse a topic or check out what's trending.
				</p>

				{/* Resource Categories */}
				<div className='flex flex-col sm:flex-wrap sm:flex-row justify-center gap-3 lg:gap-4 max-w-4xl'>
					{resourceCategories.map((category, index) => (
						<button
							key={index}
							className='bg-[#6b5df6] hover:bg-[#6b5df6]/80 text-white px-2 py-2 sm:px-6 lg:py-3 rounded-full text-xs sm:text-sm transition-colors duration-200'>
							{category}
						</button>
					))}
				</div>

				{/* Down Arrow */}
				<div className='mt-12 lg:mt-16'>
					<FaChevronDown className='text-white w-6 h-6 opacity-60' />
				</div>
			</div>
		</div>
	);
}
