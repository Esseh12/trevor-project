import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose, IoSearch } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import logo from '../assets/footer-logo.png';
import scrollogo from '../assets/logo-trevor.png';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	const menuItems = [
		{
			title: 'Who We Are',
			items: [
				{
					name: 'Pride',
					description: 'Celebrate Pride with us',
					path: '/pride',
				},
				{
					name: 'Financial Reports',
					description: 'Look at our yearly annual financial statements',
					path: '/financial-reports',
				},
				{
					name: 'Contact Us',
					description: 'Reach out to one of our team members',
					path: '/contact',
				},
			],
		},
		{
			title: 'What We Do',
			items: [
				{
					name: 'Crisis Services',
					description:
						'We provide counseling support for LGBTQ+ young people 24/7, all year round',
					path: '/crisis-services',
				},
				{
					name: 'Peer Support',
					description:
						'We provide an affirming international community for LGBTQ+ young people',
					path: '/peer-support',
				},
				{
					name: 'Advocacy',
					description:
						'We work to change hearts, minds, and laws in support of young LGBTQ+ lives',
					path: '/advocacy',
				},
				{
					name: 'Public Education',
					description:
						'We help allies and educators understand the needs of LGBTQ+ young people',
					path: '/public-education',
				},
				{
					name: 'Research',
					description:
						'We conduct research studies to equip policymakers and other LGBTQ+ youth facing professionals',
					path: '/research',
				},
			],
		},
		{
			title: 'Get Involved',
			items: [
				{
					name: 'Volunteer',
					description: 'Join our team of volunteers',
					path: '/volunteer',
				},
				{
					name: 'Fundraise',
					description: 'Help us raise funds for our mission',
					path: '/fundraise',
				},
				{
					name: 'Partner',
					description: 'Become a partner organization',
					path: '/partner',
				},
			],
		},
		{
			title: 'Support Us',
			items: [
				{
					name: 'Donate',
					description: 'Support our mission with a donation',
					path: '/donate',
				},
				{
					name: 'Corporate Partnerships',
					description: 'Partner with us',
					path: '/corporate-partnerships',
				},
				{
					name: 'Grants',
					description: 'Learn about our grant opportunities',
					path: '/grants',
				},
			],
		},
		{
			title: 'Resources',
			items: [
				{
					name: 'Blog',
					description: "Get the latest news from what's happening in our field",
					path: '/blog',
				},
				{
					name: 'News Press',
					description:
						"Get the latest news and press release from what's happening in our field",
					path: '/news-press',
				},
				{
					name: 'Research Briefs',
					description:
						'Get the latest research and clinical implications related to LGBTQ+ youth and suicide risks',
					path: '/research-briefs',
				},
				{
					name: 'Breathing Exercise',
					description:
						'Try this calming exercise that will help you relax and focus',
					path: '/breathing-exercise',
				},
				{
					name: 'Mental Health Survey',
					description: 'Understand the mental health of LGBTQ+ young people',
					path: '/mental-health-survey',
				},
				{
					name: 'Resource Center',
					description:
						'Explore resources for allyship, sexual orientation, gender identity, mental health, and many more',
					path: '/resource-center',
				},
			],
		},
	];

	const toggleDropdown = (index) => {
		setActiveDropdown(activeDropdown === index ? null : index);
	};

	const handleMouseEnter = (index) => {
		setActiveDropdown(index);
	};

	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	const handleNavigation = (path) => {
		navigate(path);
		setIsMobileMenuOpen(false);
		setActiveDropdown(null);
	};

	const handleSearchClick = () => {
		navigate('/search');
		setIsMobileMenuOpen(false);
	};

	return (
		<div className='relative'>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/40 backdrop-blur-sm shadow-sm'
						: 'bg-transparent'
				}`}>
				<div className='max-w-full px-4 sm:px-6 lg:px-8 pt-2'>
					<div className='flex items-center justify-between h-16 lg:h-14'>
						{/* Logo */}
						<div className='flex-shrink-0 z-10'>
							<Link
								to='/'
								className='flex items-center'>
								{/* Trevor Project Logo - shows when not scrolled */}
								{!isScrolled && (
									<div className='mt-6'>
										<img
											src={logo}
											alt='logo'
											className='w-48'
										/>
									</div>
								)}
								{/* Trevor Project Logo - shows when scrolled with proper styling */}
								{isScrolled && (
									<div>
										<img
											src={scrollogo}
											alt='logo'
											className='w-14'
										/>
									</div>
								)}
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className='hidden lg:block'>
							<div className='ml-10 flex items-center space-x-1'>
								{menuItems.map((item, index) => (
									<div
										key={index}
										className='relative'
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={handleMouseLeave}>
										<button
											onClick={() => toggleDropdown(index)}
											className={`flex items-end px-3 py-2  transition-colors ${
												isScrolled
													? 'text-[#101066] font-semibold'
													: 'text-white font-semibold'
											}`}>
											{item.title}
											<IoIosArrowDown className='ml-1 h-4 w-4 text-white/80' />
										</button>

										{activeDropdown === index && (
											<div className='absolute top-full left-0 mt-1 min-w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 z-50'>
												{/* Triangle pointer */}
												<div className='absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45'></div>

												{/* Dropdown Content */}
												<div
													className={`py-2 ${
														item.items.length > 3
															? 'grid grid-cols-2 gap-2'
															: 'flex flex-col'
													}`}>
													{item.items.map((subItem, subIndex) => (
														<Link
															key={subIndex}
															to={subItem.path}
															onClick={() => handleNavigation(subItem.path)}
															className='block px-4 py-3 transition-colors'>
															<div className='font-bold text-lg leading-4.5 text-[#101066] flex items-center'>
																<span>{subItem.name}</span>
																<MdKeyboardArrowRight className='font-bold text-xl' />
															</div>
															<div className='text-[#101066] leading-5 text-sm mt-1'>
																{subItem.description}
															</div>
														</Link>
													))}
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Right side buttons */}
						<div className='hidden lg:flex items-center space-x-3'>
							<button
								onClick={handleSearchClick}
								className={`p-2 rounded-full transition-colors ${
									isScrolled ? 'text-[#101066]' : 'text-white'
								}`}>
								<IoSearch className='h-7 w-7' />
							</button>
							<Link
								to='/meet-friends'
								className='bg-[#101066] hover:bg-white text-white px-6 py-3 rounded-full text-sm transition-colors inline-block hover:border-2 hover:border-[#101066] hover:text-[#101066] font-extrabold'>
								Meet Friends
							</Link>
							<Link
								to='/crisis-services'
								className='bg-[#101066] hover:bg-white text-white px-6 py-3 rounded-full text-sm  transition-colors inline-block hover:border-2 hover:border-[#101066] hover:text-[#101066] font-extrabold'>
								Reach A Counselor
							</Link>
							<Link
								to='/donate'
								className='bg-[#101066] hover:bg-white hover:border-2 hover:border-[#101066] hover:text-[#101066]  text-white px-6 py-3 rounded-full text-sm transition-colors inline-block font-extrabold'>
								Donate
							</Link>
						</div>

						{/* Mobile menu button */}
						<div className='lg:hidden z-10'>
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className={`p-2 rounded-md transition-colors ${
									isScrolled
										? 'text-teal-800 hover:text-teal-600'
										: 'text-white hover:text-gray-200'
								}`}>
								{isMobileMenuOpen ? (
									<IoClose className='h-6 w-6' />
								) : (
									<FiMenu className='h-6 w-6' />
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Sidebar Overlay */}
			{isMobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 z-40'>
					{/* Sidebar */}
					<div
						className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
							isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
						}`}>
						{/* Header */}
						<div className='flex items-center justify-between p-4 border-b border-gray-200'>
							<div className='font-bold text-xl text-teal-800'>Menu</div>
							<button
								onClick={() => setIsMobileMenuOpen(false)}
								className='p-2 rounded-md text-teal-800 hover:text-teal-600 transition-colors'>
								<IoClose className='h-6 w-6' />
							</button>
						</div>

						{/* Content */}
						<div className='h-full overflow-y-auto pb-20'>
							<div className='px-4 py-4 space-y-1'>
								{/* Main action buttons */}
								<Link
									to='/donate'
									onClick={() => setIsMobileMenuOpen(false)}
									className='block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg text-sm font-medium mb-2 text-center transition-colors'>
									Donate
								</Link>
								<Link
									to='/crisis-services'
									onClick={() => setIsMobileMenuOpen(false)}
									className='block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg text-sm font-medium mb-2 text-center transition-colors'>
									Reach A Counselor
								</Link>
								<Link
									to='/meet-friends'
									onClick={() => setIsMobileMenuOpen(false)}
									className='block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg text-sm font-medium mb-4 text-center transition-colors'>
									Meet Friends
								</Link>

								{/* Menu items */}
								{menuItems.map((item, index) => (
									<div
										key={index}
										className='border-b border-gray-200 last:border-b-0'>
										<button
											onClick={() => toggleDropdown(index)}
											className='w-full flex items-center justify-between py-3 text-left text-teal-800 font-medium'>
											{item.title}
											<IoIosArrowDown
												className={`h-4 w-4 transition-transform ${
													activeDropdown === index ? 'rotate-180' : ''
												}`}
											/>
										</button>

										{activeDropdown === index && (
											<div className='pb-3'>
												{item.items.map((subItem, subIndex) => (
													<Link
														key={subIndex}
														to={subItem.path}
														onClick={() => handleNavigation(subItem.path)}
														className='block py-2 pl-4 text-sm text-gray-600 hover:text-teal-800 transition-colors'>
														<div className='font-medium'>{subItem.name}</div>
														<div className='text-xs text-gray-500 mt-1'>
															{subItem.description}
														</div>
													</Link>
												))}
											</div>
										)}
									</div>
								))}

								{/* Search button for mobile */}
								<div className='pt-3 border-t border-gray-200'>
									<button
										onClick={handleSearchClick}
										className='w-full flex items-center justify-center py-3 text-teal-800 font-medium hover:text-teal-600 transition-colors'>
										<IoSearch className='h-5 w-5 mr-2' />
										Search
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
