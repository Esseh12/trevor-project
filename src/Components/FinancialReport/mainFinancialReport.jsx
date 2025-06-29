import { useState } from 'react';
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
		<div className='max-w-7xl mx-auto p-4'>
			{/* Sort Dropdown */}
			<div className='mb-8 relative inline-block'>
				<button
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors'>
					Sort By:{' '}
					{sortOrder === 'newest' ? 'Newest to Oldest' : 'Oldest to Newest'}
					<IoIosArrowDown
						className={`w-4 h-4 transition-transform ${
							isDropdownOpen ? 'rotate-180' : ''
						}`}
					/>
				</button>

				{isDropdownOpen && (
					<div className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-full'>
						<button
							onClick={() => {
								setSortOrder('newest');
								setIsDropdownOpen(false);
							}}
							className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
								sortOrder === 'newest' ? 'bg-blue-50 text-blue-700' : ''
							}`}>
							Sort By: Newest to Oldest
						</button>
						<button
							onClick={() => {
								setSortOrder('oldest');
								setIsDropdownOpen(false);
							}}
							className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
								sortOrder === 'oldest' ? 'bg-blue-50 text-blue-700' : ''
							}`}>
							Sort By: Oldest to Newest
						</button>
					</div>
				)}
			</div>

			{/* Reports Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{sortedReports.map((report) => (
					<div
						key={report.year}
						className='border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow'>
						<h2 className='text-2xl font-semibold text-teal-700 mb-4'>
							{report.year} Annual Report
						</h2>

						<div className='space-y-3'>
							{report.links.length > 0 ? (
								report.links.map((link, index) => (
									<a
										key={index}
										href={link.href}
										className='block text-teal-600 hover:text-teal-800 underline hover:no-underline transition-colors'>
										{link.text}
									</a>
								))
							) : (
								<p className='text-gray-500 italic'>No documents available</p>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Footer */}
			<div className='mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600'>
				<p>
					The Trevor Project is a 501(c)(3), tax-exempt organization. Our EIN is
					95-4681287.{' '}
					<a
						href='#'
						className='text-teal-600 hover:text-teal-800 underline'>
						Privacy Policy
					</a>
				</p>
			</div>
		</div>
	);
};

export default MainFinancialReports;
