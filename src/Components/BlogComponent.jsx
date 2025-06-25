import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const BlogComponent = () => {
	const [sortBy, setSortBy] = useState('newest');
	const [showSortDropdown, setShowSortDropdown] = useState(false);
	const [expandedTags, setExpandedTags] = useState({});

	const toggleTags = (id) => {
		setExpandedTags((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const blogPosts = [
		{
			id: 1,
			title: 'What to Know About 988 Funding',
			excerpt:
				"It was reported that a leaked, draft version of the Senate's annual defense spending bill included language that would...",
			image:
				'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop',
			category: 'BLOG',
			tags: ['988', 'LGBTQ+', 'Mental Health'],
			visibleTags: 2,
		},
		{
			id: 2,
			title: 'Why We Still Need Pride Month: Celebs Chime In',
			excerpt:
				'Since 1970, LGBTQ+ people and our allies have observed Pride Month each June in commemoration of the Stonewall uprising...',
			image:
				'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop',
			category: 'BLOG',
			tags: ['Pride', 'Talent', 'LGBTQ+'],
			visibleTags: 3,
		},
		{
			id: 3,
			title: 'Now Casting for Our Newest Episodes of...',
			excerpt:
				"Sometimes, just being heard is enough to change someone's life. That's why we are launching a new initiative...",
			image:
				'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
			category: 'BLOG',
			tags: ['LGBTQ+', 'Community'],
			visibleTags: 2,
		},
		{
			id: 4,
			title: 'Act Now to Save Critical Suicide Prevention...',
			excerpt:
				"Right now, LGBTQ+ young people across the country are in crisis. They're nearing record-high rates of suicide attempts...",
			image:
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop',
			category: 'BLOG',
			tags: ['Crisis', 'Prevention', 'LGBTQ+', 'Youth', 'Mental Health'],
			visibleTags: 2,
		},
		{
			id: 5,
			title: 'Tove Lo on the HEAT Vinyl EP and Her Longtime...',
			excerpt:
				'By: Jaymes Black, CEO, The Trevor Project Swedish-born, LA-based singer, songwriter, and producer Tove Lo has been...',
			image:
				'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop',
			category: 'BLOG',
			tags: ['Music', 'Artist', 'LGBTQ+', 'Interview'],
			visibleTags: 2,
		},
		{
			id: 6,
			title: 'Sapphira Cristál on Her Debut Album, Self-...',
			excerpt:
				"By: Jaymes Black, CEO of The Trevor Project Sapphira Cristál, a standout icon from RuPaul's Drag Race Season 16...",
			image:
				'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
			category: 'BLOG',
			tags: ['Drag', 'Music', 'LGBTQ+', 'Artist', 'Interview'],
			visibleTags: 2,
		},
	];

	const BlogCard = ({ post }) => {
		const isExpanded = expandedTags[post.id];
		const displayTags = isExpanded
			? post.tags
			: post.tags.slice(0, post.visibleTags);
		const hasMoreTags = post.tags.length > post.visibleTags;

		return (
			<div className='bg-white rounded-lg border border-[#7faeb3] overflow-hidden transition-shadow hover:shadow-md'>
				<div className='aspect-video w-full overflow-hidden'>
					<img
						src={post.image}
						alt={post.title}
						className='w-full h-full object-cover transition-transform hover:scale-105'
					/>
				</div>

				<div className='space-y-4'>
					<div className='p-6 space-y-4'>
						<div className='text-sm font-semibold text-black tracking-wide'>
							{post.category}
						</div>

						<h3 className='text-[26px] leading-8 font-semibold text-black '>
							{post.title}
						</h3>

						<p className='text-black leading-[22px]'>{post.excerpt}</p>
					</div>

					<div className='flex flex-wrap items-center gap-2 hover:bg-blue-100 p-6'>
						{displayTags.map((tag, index) => (
							<span
								key={index}
								className='px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200'>
								{tag}
							</span>
						))}

						{hasMoreTags && (
							<button
								onClick={() => toggleTags(post.id)}
								className='flex items-center gap-1 px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full hover:bg-teal-700 transition-colors'>
								{isExpanded ? (
									<>
										<FaMinus size={12} />
										Less
									</>
								) : (
									<>
										<FaPlus size={12} />
										More
									</>
								)}
							</button>
						)}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='max-w-7xl mx-auto px-4 py-8 md:py-16'>
			{/* Header */}
			<div className='mb-8'>
				{/* Sort Dropdown */}
				<div className='relative inline-block'>
					<button
						onClick={() => setShowSortDropdown(!showSortDropdown)}
						className='flex items-center gap-2 px-4 py-2 border border-[#003A48] rounded-md bg-white transition-colors text-2xl font-semibold text-[#003A48]'>
						<span className='font-medium'>Sort By:</span>
						<span className='text-[#003A48]'>
							{sortBy === 'newest' ? 'Newest to Oldest' : 'Oldest to Newest'}
						</span>
						<svg
							className='w-4 h-4 ml-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 9l-7 7-7-7'
							/>
						</svg>
					</button>

					{showSortDropdown && (
						<div className='absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10'>
							<button
								onClick={() => {
									setSortBy('newest');
									setShowSortDropdown(false);
								}}
								className='w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700'>
								Sort By: Newest to Oldest
							</button>
							<button
								onClick={() => {
									setSortBy('oldest');
									setShowSortDropdown(false);
								}}
								className='w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700'>
								Sort By: Oldest to Newest
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Blog Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
				{blogPosts.map((post) => (
					<BlogCard
						key={post.id}
						post={post}
					/>
				))}
			</div>

			{/* Pagination */}
			<div className='flex justify-center items-center gap-2'>
				<button className='w-10 h-10 rounded-full bg-teal-600 text-white font-semibold flex items-center justify-center'>
					1
				</button>
				<button className='w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-semibold flex items-center justify-center hover:bg-gray-200 transition-colors'>
					2
				</button>
				<button className='w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-semibold flex items-center justify-center hover:bg-gray-200 transition-colors'>
					3
				</button>
				<span className='px-2 text-gray-500'>...</span>
				<button className='w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-semibold flex items-center justify-center hover:bg-gray-200 transition-colors'>
					29
				</button>
				<button className='w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-semibold flex items-center justify-center hover:bg-gray-200 transition-colors'>
					<svg
						className='w-4 h-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default BlogComponent;
