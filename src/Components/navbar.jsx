import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { menuItems } from './data';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose, IoSearch } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
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
									<div className='mt-6 lg:mt-12'>
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
											{isScrolled ? (
												<IoMdArrowDropdown className='ml-1 h-4 w-4 text-[#101066]' />
											) : (
												<IoIosArrowDown className='ml-1 h-4 w-4 text-white/80' />
											)}
										</button>

										{activeDropdown === index && (
											<div
												className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 ${
													item.items.length <= 3
														? 'w-max min-w-[300px]'
														: 'w-[450px]'
												}`}>
												{/* Triangle pointer */}
												<div className='absolute -top-2 left-6 w-4 h-4 bg-white/40  border-l border-t border-gray-200 transform rotate-45'></div>

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
															className='block px-4 py-3 transition-colors hover:bg-gray-50'>
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
						<div className='hidden lg:flex items-center'>
							{/* When not scrolled - vertical stack with search icon */}
							{!isScrolled && (
								<div className='flex items-start space-x-4 mr-4 mt-28'>
									{/* Search icon positioned between navlinks and buttons */}
									<button
										onClick={handleSearchClick}
										className='p-2 rounded-full transition-colors text-white mt-2'>
										<IoSearch className='h-7 w-7' />
									</button>

									{/* Stacked buttons */}
									<div className='flex flex-col space-y-2'>
										<Link
											to='/visit-trevorspace'
											className='bg-[#101066] hover:bg-white text-white px-6 py-3 rounded-full text-sm transition-colors inline-block hover:border-2 hover:border-[#101066] hover:text-[#101066] font-extrabold'>
											Meet Friends
										</Link>
										<Link
											to='/get-help'
											className='bg-[#101066] hover:bg-white text-white px-6 py-3 rounded-full text-sm  transition-colors inline-block hover:border-2 hover:border-[#101066] hover:text-[#101066] font-extrabold'>
											Reach A Counselor
										</Link>
										<Link
											to='/donate'
											className='bg-[#101066] hover:bg-white hover:border-2 hover:border-[#101066] hover:text-[#101066]  text-white px-6 py-3 rounded-full text-sm transition-colors inline-block font-extrabold'>
											Donate
										</Link>
									</div>
								</div>
							)}

							{/* When scrolled - horizontal layout */}
							{isScrolled && (
								<div className='flex items-center space-x-3'>
									<button
										onClick={handleSearchClick}
										className='p-2 rounded-full transition-colors text-[#101066]'>
										<IoSearch className='h-7 w-7' />
									</button>
									<Link
										to='/visit-trevorspace'
										className='bg-[#101066] hover:bg-white text-white px-6 py-3 rounded-full text-sm transition-colors inline-block hover:border-2 hover:border-[#101066] hover:text-[#101066] font-extrabold'>
										Meet Friends
									</Link>
									<Link
										to='/get-help'
										className='bg-[#101066] hover:bg-white text-white px-6 py-3 rounded-full text-sm  transition-colors inline-block hover:border-2 hover:border-[#101066] hover:text-[#101066] font-extrabold'>
										Reach A Counselor
									</Link>
									<Link
										to='/be-the-one'
										className='bg-[#101066] hover:bg-white hover:border-2 hover:border-[#101066] hover:text-[#101066]  text-white px-6 py-3 rounded-full text-sm transition-colors inline-block font-extrabold'>
										Donate
									</Link>
								</div>
							)}
						</div>

						{/* Mobile menu button - only shows hamburger icon */}
						<div className='lg:hidden z-10'>
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className={`p-2 rounded-md transition-colors ${
									isScrolled
										? 'text-teal-800 hover:text-teal-600 '
										: 'text-white hover:text-gray-200'
								}`}>
								<FiMenu className='h-6 w-6' />
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Sidebar Overlay */}
			{isMobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 z-40'>
					{/* Sidebar - increased width */}
					<div
						className={`fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
							isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
						}`}>
						{/* Header with search and close button */}
						<div className='flex items-center justify-end p-4 border-b border-gray-200'>
							{/* Search button */}
							<div className='p-2'>
								<button
									onClick={handleSearchClick}
									className='flex items-center justify-center bg-[#101066] text-white font-medium rounded-full h-10.5 w-10.5'>
									<IoSearch className='h-7 w-7' />
								</button>
							</div>
							{/* Close button */}
							<button
								onClick={() => setIsMobileMenuOpen(false)}
								className='p-2 text-[#101066]'>
								<IoClose className='h-8 w-8' />
							</button>
						</div>

						{/* Content */}
						<div className='h-full overflow-y-auto pb-20'>
							<div className='px-4 py-4 space-y-1'>
								{/* Main action buttons */}
								<Link
									to='/be-the-one'
									onClick={() => setIsMobileMenuOpen(false)}
									className='block w-full bg-[#ff5a3d] text-white hover:bg-white hover:text-[#ff5a3d] py-3 px-4 rounded-full  font-bold mb-2 text-center transition-colors'>
									Donate
								</Link>
								<Link
									to='/get-help'
									onClick={() => setIsMobileMenuOpen(false)}
									className='block w-full bg-[#ff5a3d] text-white hover:bg-white hover:text-[#ff5a3d] py-3 px-4 rounded-full  font-bold mb-2 text-center transition-colors'>
									Reach A Counselor
								</Link>
								<Link
									to='/visit-trevorspace'
									onClick={() => setIsMobileMenuOpen(false)}
									className='block w-full bg-[#ff5a3d] text-white hover:bg-white hover:text-[#ff5a3d] py-3 px-4 rounded-full  font-bold mb-2 text-center transition-colors'>
									Meet Friends
								</Link>

								{/* Menu items - increased text sizes and updated colors */}
								{menuItems.map((item, index) => (
									<div
										key={index}
										className='border-b border-gray-200 last:border-b-0'>
										<button
											onClick={() => toggleDropdown(index)}
											className='w-full flex items-center justify-between py-3 text-left text-[#101066] font-medium text-lg'>
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
														className='block py-2 pl-4 text-[#101066] hover:text-teal-800 transition-colors'>
														<div className='font-medium text-base'>
															{subItem.name}
														</div>
														<div className='text-sm text-[#101066] mt-1 opacity-80'>
															{subItem.description}
														</div>
													</Link>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
