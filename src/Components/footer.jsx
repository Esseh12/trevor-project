import React, { useState } from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaTiktok,
	FaYoutube,
	FaLinkedinIn,
} from 'react-icons/fa';
import footer_logo from '../assets/footer-logo.png';

const Footer = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) {
			setMessage('Please enter a valid email address');
			return;
		}
		setMessage('Thank you for subscribing!');
		setEmail('');
	};

	const navLinks = [
		{
			href: 'https://give.thetrevorproject.org/campaign/692681/donate',
			label: 'DONATE',
			ariaLabel: 'Click to get to Donate',
		},
		{
			href: 'https://www.thetrevorproject.org/contact-us/',
			label: 'CONTACT US',
		},
		{ href: '/blog/', label: 'BLOG' },
		{ href: 'https://www.thetrevorproject.org/press/', label: 'PRESS' },
		{ href: 'https://www.thetrevorproject.org/careers/', label: 'CAREERS' },
		{
			href: 'https://www.thetrevorproject.org/terms-of-service/',
			label: 'TERMS OF SERVICE',
		},
		{
			href: 'https://www.thetrevorproject.org/privacy-policy/',
			label: 'PRIVACY POLICY',
		},
	];

	const socialLinks = [
		{
			href: 'https://www.facebook.com/TheTrevorProject',
			icon: FaFacebookF,
			label: 'Facebook',
		},
		{
			href: 'https://twitter.com/trevorproject',
			icon: FaTwitter,
			label: 'Twitter',
		},
		{
			href: 'https://www.instagram.com/trevorproject/',
			icon: FaInstagram,
			label: 'Instagram',
		},
		{
			href: 'https://www.tiktok.com/@trevorproject',
			icon: FaTiktok,
			label: 'TikTok',
		},
		{
			href: 'https://www.youtube.com/thetrevorproject',
			icon: FaYoutube,
			label: 'YouTube',
		},
		{
			href: 'https://www.linkedin.com/company/the-trevor-project',
			icon: FaLinkedinIn,
			label: 'LinkedIn',
		},
	];

	return (
		<footer className='w-full bg-[#003a48] min-h-screen'>
			<div className='flex flex-col lg:flex-row justify-between items-start text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
				{/* Left Column */}
				<div className='mb-12 lg:mb-0 w-full lg:w-auto lg:flex-1'>
					<img
						src={footer_logo}
						alt='footer logo'
						className='mb-6 w-auto h-auto max-w-full'
					/>

					<div className='ml-0 lg:ml-6'>
						<p className='mb-6 sm:mb-9 text-base sm:text-lg leading-relaxed max-w-lg'>
							The Trevor Project's mission is to end suicide among LGBTQ+ young
							people.
						</p>

						<div className='space-y-4'>
							<div className='text-lg sm:text-xl font-semibold mb-4'>
								Sign Up For Our Newsletter
							</div>

							<form
								onSubmit={handleSubmit}
								className='flex flex-col sm:flex-row gap-3'>
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email Address'
									className='w-full sm:w-auto lg:w-[300px] px-4 py-4 sm:py-5 rounded-md text-[#101066] placeholder-[#101066] bg-white outline-none h-[50px] sm:h-[60px] text-sm sm:text-base'
								/>
								<button
									type='submit'
									className='px-6 py-4 sm:py-5 bg-white text-[#101066] font-bold text-lg sm:text-[20px] rounded-md transition-colors duration-200 h-[50px] sm:h-[60px] flex items-center justify-center whitespace-nowrap'>
									Subscribe
								</button>
							</form>

							<small className='text-white text-[11px] sm:text-[12px] block leading-relaxed'>
								This site is protected by reCAPTCHA and the Google Privacy
								Policy and Terms of Service apply.
							</small>

							{message && (
								<div
									className='text-sm'
									role='alert'
									aria-live='polite'>
									<span
										className={
											message.includes('Thank you')
												? 'text-green-400'
												: 'text-red-400'
										}>
										{message}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className='w-full lg:w-auto lg:mt-6'>
					<nav className='mb-8'>
						<ul className='space-y-4 sm:space-y-6'>
							{navLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className='text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg leading-[22px] block'
										aria-label={link.ariaLabel || link.label}>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<ul className='flex flex-wrap gap-4 sm:gap-6 mt-6 lg:mt-20'>
						{socialLinks.map((social, index) => {
							const IconComponent = social.icon;
							return (
								<li key={index}>
									<a
										href={social.href}
										className='text-white hover:text-gray-300 transition-colors duration-200 inline-block'
										aria-label={social.label}>
										<IconComponent className='w-5 h-5 sm:w-6 sm:h-6' />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
