import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const JobOpenings = () => {
	const [selectedLocation, setSelectedLocation] = useState('');
	const [selectedDepartment, setSelectedDepartment] = useState('');
	const [isLocationOpen, setIsLocationOpen] = useState(false);
	const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);

	const locations = [
		'All Locations',
		'New York, NY',
		'Los Angeles, CA',
		'Remote',
		'Chicago, IL',
		'Austin, TX',
	];

	const departments = [
		'All Departments',
		'Clinical Operations',
		'Advocacy',
		'Community Affairs',
		'Technology',
		'Development',
		'Human Resources',
		'Communications',
	];

	const jobCount = 0;

	return (
		<section className='py-10 px-4 bg-white'>
			<div className='max-w-4xl mx-auto text-center mb-12 text-base font-medium text-[#101066] font-italic'>
				<small>
					*Scam Alert** Please be aware that there is a phishing scam using The
					Trevor Project’s name to coerce people into revealing their personal
					information and account numbers. If you have been contacted via DM or
					by an email address claiming to be Trevor that looks suspicious,
					please report it, or reach out to{' '}
					<span className='border-b border-[#101066]'>
						Trevor.Interview@TheTrevorProject.org
					</span>
				</small>
			</div>
			<div className='max-w-6xl mx-auto mt-6'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl lg:text-[42px] leading-[52px] font-semibold text-[#003A48] mb-4'>
						Current Job Openings for <span>The Trevor Project</span>
					</h2>
				</div>

				{/* Filters */}
				<div className='flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl'>
					{/* Locations Dropdown */}
					<div className='relative flex-1'>
						<button
							onClick={() => {
								setIsLocationOpen(!isLocationOpen);
								setIsDepartmentOpen(false);
							}}
							className='w-full px-4 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg flex items-center justify-between hover:bg-blue-50 transition-colors'>
							<span>{selectedLocation || 'Locations'}</span>
							<IoIosArrowDown
								className={`w-5 h-5 transition-transform ${
									isLocationOpen ? 'rotate-180' : ''
								}`}
							/>
						</button>

						{isLocationOpen && (
							<div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto'>
								{locations.map((location, index) => (
									<button
										key={index}
										onClick={() => {
											setSelectedLocation(
												location === 'All Locations' ? '' : location
											);
											setIsLocationOpen(false);
										}}
										className='w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0'>
										{location}
									</button>
								))}
							</div>
						)}
					</div>

					{/* Departments Dropdown */}
					<div className='relative flex-1'>
						<button
							onClick={() => {
								setIsDepartmentOpen(!isDepartmentOpen);
								setIsLocationOpen(false);
							}}
							className='w-full px-4 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg flex items-center justify-between hover:bg-blue-50 transition-colors'>
							<span>{selectedDepartment || 'Departments'}</span>
							<IoIosArrowDown
								className={`w-5 h-5 transition-transform ${
									isDepartmentOpen ? 'rotate-180' : ''
								}`}
							/>
						</button>

						{isDepartmentOpen && (
							<div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto'>
								{departments.map((department, index) => (
									<button
										key={index}
										onClick={() => {
											setSelectedDepartment(
												department === 'All Departments' ? '' : department
											);
											setIsDepartmentOpen(false);
										}}
										className='w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0'>
										{department}
									</button>
								))}
							</div>
						)}
					</div>

					{/* Job Count */}
					<div className='flex items-center justify-center sm:justify-end'>
						<span className='text-blue-600 font-medium'>
							Currently viewing{' '}
							<span className='font-bold'>{jobCount} jobs</span>
						</span>
					</div>
				</div>

				{/* Divider Lines */}
				<div className='space-y-4 mb-12'>
					<div className='h-px bg-gray-300'></div>
					<div className='h-px bg-gray-300'></div>
				</div>

				{/* No Results */}
				<div className='text-center py-16'>
					<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
						There are no results found.
					</h3>
					<p className='text-gray-600 text-lg'>
						Try adjusting the filters above to see more results.
					</p>
				</div>
			</div>
		</section>
	);
};

export default JobOpenings;
