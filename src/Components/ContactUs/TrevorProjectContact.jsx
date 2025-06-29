import { Link } from 'react-router-dom';

export default function ContactMain() {
	return (
		<div className='min-h-screen bg-white py-12'>
			{/* Main Content */}
			<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<h1 className='text-3xl sm:text-4xl font-semibold text-[#101066] leading-tight mb-10'>
					Get in Contact with The Trevor Project
				</h1>

				{/* Contact Information Grid */}
				<div className='grid gap-8 mb-12'>
					<div className='flex flex-col md:flex-row md:justify-between gap-8'>
						{/* Mailing Address */}
						<div className='flex-1'>
							<h2 className='text-xl sm:text-2xl leading-[30px] font-semibold text-[#101066] mb-4'>
								The Trevor Project Mailing Address
							</h2>
							<div className='text-[#101066] text-lg sm:text-2xl leading-7.5 font-semibold'>
								<p>The Trevor Project</p>
								<p>PO Box 69232</p>
								<p>West Hollywood, CA 90069</p>
							</div>
						</div>

						{/* Phone Number */}
						<div className='flex-1'>
							<h2 className='text-xl font-semibold text-[#101066] mb-4'>
								The Trevor Project Phone Number
							</h2>
							<Link
								to='tel:2126958650'
								className='text-[#101066] underline underline-offset-4 hover:decoration-wavy text-lg sm:text-[22px]'>
								(212) 695-8650
							</Link>
						</div>
					</div>
				</div>

				{/* Team Contact Sections */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{/* Advocacy Team */}
					<div>
						<h2 className='text-xl sm:text-2xl font-semibold text-[#101066] mb-4'>
							Advocacy Team
						</h2>
						<Link
							to='#'
							className='text-[#101066] underline underline-offset-4 hover:decoration-wavy text-lg sm:text-[22px] leading-7'>
							Please email our team
						</Link>
					</div>

					{/* Donations and Services */}
					<div>
						<h2 className='text-xl sm:text-2xl font-semibold text-[#101066] leading-snug mb-4'>
							Donations, Fundraising, University Practicum, Volunteering, and
							Crisis Services Feedback
						</h2>
						<Link
							to='#'
							className='text-[#101066] underline underline-offset-4 hover:decoration-wavy text-lg sm:text-[22px] leading-7'>
							Please fill out this form
						</Link>
					</div>

					{/* Communications Team */}
					<div>
						<h2 className='text-xl sm:text-2xl font-semibold text-[#101066] leading-snug mb-4'>
							Communications Team
						</h2>
						<Link
							to='#'
							className='text-[#101066] underline underline-offset-4 hover:decoration-wavy text-lg sm:text-[22px] leading-7'>
							Make a press inquiry
						</Link>
					</div>
				</div>

				{/* Public Education Section */}
				<div className='mt-10'>
					<h2 className='text-xl sm:text-2xl font-semibold text-[#101066] leading-snug mb-4'>
						Public Education
					</h2>
					<Link
						to='#'
						className='text-[#101066] underline underline-offset-4 hover:decoration-wavy text-lg sm:text-[22px] leading-7'>
						Please email our team
					</Link>
				</div>
			</main>
		</div>
	);
}
