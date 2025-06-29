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
		<div className='max-w-7xl mx-auto p-4 py-10'>
			{/* Sort Dropdown */}
			<div className='mb-8 relative inline-block'>
				<button
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					className='flex items-center gap-2 px-4 py-2 border border-[#003A48] rounded bg-white  transition-colors text-2xl font-semibold leading-8.5 text-[#003A48]'>
					Sort By:{' '}
					{sortOrder === 'newest' ? 'Newest to Oldest' : 'Oldest to Newest'}
					<IoIosArrowDown
						className={`w-4 h-4 text-[#003A48] transition-transform ${
							isDropdownOpen ? 'rotate-180' : ''
						}`}
					/>
				</button>

				{isDropdownOpen && (
					<div className='absolute top-full left-0 mt-1 bg-white border border-[#003A48] rounded shadow-lg z-10 min-w-full'>
						<button
							onClick={() => {
								setSortOrder('newest');
								setIsDropdownOpen(false);
							}}
							className={`w-full px-4 py-2 text-left font-semibold text-xl leading-7.5 ${
								sortOrder === 'newest' ? 'text-[#003A48]' : ''
							}`}>
							Sort By: Newest to Oldest
						</button>
						<button
							onClick={() => {
								setSortOrder('oldest');
								setIsDropdownOpen(false);
							}}
							className={`w-full px-4 py-2 text-left font-semibold text-xl leading-7.5  ${
								sortOrder === 'oldest' ? 'text-[#003A48]' : ''
							}`}>
							Sort By: Oldest to Newest
						</button>
					</div>
				)}
			</div>

			{/* Reports Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 space-y-8'>
				{sortedReports.map((report) => (
					<div
						key={report.year}
						className='border border-[#003A48] rounded-lg p-6 bg-white hover:shadow-md transition-shadow pb-36'>
						<h2 className='text-3xl leading-10 font-semibold text-[#003A48] mb-8'>
							{report.year} Annual Report
						</h2>

						<div className='space-y-8'>
							{report.links.length > 0 ? (
								report.links.map((link, index) => (
									<Link
										key={index}
										to={link.href}
										className='block font-semibold text-xl text-[#003A48] underline underline-offset-8 hover:decoration-wavy transition-colors'>
										{link.text}
									</Link>
								))
							) : (
								<p className='text-gray-500 italic'>No documents available</p>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Footer */}
			<div className='mt-12 pt-8  text-lg leading-6.5 text-[#003A48]'>
				<p>
					The Trevor Project is a 501(c)(3), tax-exempt organization. Our EIN is
					95-4681287.{' '}
					<a
						href='#'
						className='text-[#003A48] font-semibold underline'>
						Privacy Policy
					</a>
				</p>
			</div>
		</div>
	);
};

export default MainFinancialReports;
