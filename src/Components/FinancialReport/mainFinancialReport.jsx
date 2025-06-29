import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const MainFinancialReports = () => {
	const [sortOrder, setSortOrder] = useState('newest');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const reports = [
		{
			year: 2023,
			links: [
				{ text: '2023 Annual Report', href: '#' },
				{ text: 'IRS 990', href: '#' },
				{ text: 'Audited Financial Statement', href: '#' },
			],
		},
		{
			year: 2022,
			links: [
				{ text: '2022 Annual Report', href: '#' },
				{ text: 'IRS 990 - 2022', href: '#' },
				{ text: 'Audited Financial Statement', href: '#' },
			],
		},
		{
			year: 2021,
			links: [
				{ text: '2021 Annual Report', href: '#' },
				{ text: 'IRS 990 - 2021', href: '#' },
				{ text: 'Audited Financial Statements', href: '#' },
			],
		},
		{
			year: 2020,
			links: [
				{ text: '2020 Annual Report', href: '#' },
				{ text: 'IRS 990 - 2020', href: '#' },
				{ text: 'Audited Financial Statements', href: '#' },
			],
		},
		{
			year: 2019,
			links: [
				{ text: 'IRS 990 — 2019', href: '#' },
				{ text: 'Audited Financial Statements', href: '#' },
			],
		},
		{
			year: 2018,
			links: [
				{ text: 'IRS 990 — 2018', href: '#' },
				{ text: 'Audited Financial Statements', href: '#' },
			],
		},
		{
			year: 2017,
			links: [],
		},
		{
			year: 2016,
			links: [],
		},
		{
			year: 2015,
			links: [],
		},
		{
			year: 2008,
			links: [
				{ text: '2008 Annual Report', href: '#' },
				{ text: 'IRS 990- 2008', href: '#' },
				{ text: 'Audited Financial Statements', href: '#' },
			],
		},
	];

	const sortedReports = [...reports].sort((a, b) =>
		sortOrder === 'newest' ? b.year - a.year : a.year - b.year
	);

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10'>
			{/* Sort Dropdown */}
			<div className='mb-6 sm:mb-8 relative'>
				<button
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					className='flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-[#003A48] rounded bg-white transition-colors text-lg sm:text-xl lg:text-2xl font-semibold text-[#003A48] w-full sm:w-auto justify-between sm:justify-start'>
					<span className='truncate'>
						Sort By:{' '}
						{sortOrder === 'newest' ? 'Newest to Oldest' : 'Oldest to Newest'}
					</span>
					<IoIosArrowDown
						className={`w-4 h-4 sm:w-5 sm:h-5 text-[#003A48] transition-transform flex-shrink-0 ${
							isDropdownOpen ? 'rotate-180' : ''
						}`}
					/>
				</button>

				{isDropdownOpen && (
					<div className='absolute top-full left-0 mt-1 bg-white border border-[#003A48] rounded shadow-lg z-10 w-full sm:min-w-full'>
						<button
							onClick={() => {
								setSortOrder('newest');
								setIsDropdownOpen(false);
							}}
							className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-base sm:text-lg lg:text-xl hover:bg-gray-50 transition-colors ${
								sortOrder === 'newest'
									? 'text-[#003A48] bg-gray-50'
									: 'text-gray-700'
							}`}>
							Sort By: Newest to Oldest
						</button>
						<button
							onClick={() => {
								setSortOrder('oldest');
								setIsDropdownOpen(false);
							}}
							className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-base sm:text-lg lg:text-xl hover:bg-gray-50 transition-colors ${
								sortOrder === 'oldest'
									? 'text-[#003A48] bg-gray-50'
									: 'text-gray-700'
							}`}>
							Sort By: Oldest to Newest
						</button>
					</div>
				)}
			</div>

			{/* Reports Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6'>
				{sortedReports.map((report) => (
					<div
						key={report.year}
						className='border border-[#003A48] rounded-lg p-4 sm:p-6 bg-white hover:shadow-md transition-shadow min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col'>
						<h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-[#003A48] mb-4 sm:mb-6 lg:mb-8 flex-shrink-0'>
							{report.year} Annual Report
						</h2>

						<div className='space-y-3 sm:space-y-4 lg:space-y-6 flex-grow'>
							{report.links.length > 0 ? (
								report.links.map((link, index) => (
									<Link
										key={index}
										to={link.href}
										className='block font-semibold text-base sm:text-lg lg:text-xl text-[#003A48] underline underline-offset-4 sm:underline-offset-6 lg:underline-offset-8 hover:decoration-wavy transition-all duration-200 break-words'>
										{link.text}
									</Link>
								))
							) : (
								<p className='text-gray-500 italic text-sm sm:text-base'>
									No documents available
								</p>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Footer */}
			<div className='mt-8 sm:mt-12 pt-6 sm:pt-8 text-sm sm:text-base lg:text-lg text-[#003A48]'>
				<p className='leading-relaxed'>
					The Trevor Project is a 501(c)(3), tax-exempt organization. Our EIN is
					95-4681287.{' '}
					<a
						href='#'
						className='text-[#003A48] font-semibold underline hover:decoration-wavy transition-all duration-200'>
						Privacy Policy
					</a>
				</p>
			</div>
		</div>
	);
};

export default MainFinancialReports;
