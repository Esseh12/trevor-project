import { FaCheck } from 'react-icons/fa6';

export default function FundraiserStart() {
	return (
		<div className='bg-[#003a48] min-h-screen text-white px-4 py-16'>
			<div className='max-w-4xl mx-auto text-center'>
				<h1 className='text-4xl md:text-[46px]  leading-14 font-bold mb-8'>
					Get your fundraiser started now!
				</h1>
				<p className='text-xl md:text-2xl mb-16'>
					We have resources to help you get started and are always here to
					answer any of your questions.
				</p>

				<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-[#003A48] text-left'>
					{/* Left Card */}
					<div className='bg-white rounded-lg p-8 shadow-lg'>
						<h2 className='text-2xl font-semibold mb-6 '>
							Not sure where to start?
						</h2>
						<p className='text-gray-600 mb-6'>
							Check out additional information about fundraising:
						</p>

						<div className='space-y-4 text-left'>
							<div className='flex items-center gap-3'>
								<FaCheck className=' w-5 h-5 flex-shrink-0' />
								<a
									href='#'
									className=' hover:underline font-medium'>
									Fundraising Guide
								</a>
							</div>
							<div className='flex items-center gap-3'>
								<FaCheck className=' w-5 h-5 flex-shrink-0' />
								<a
									href='#'
									className=' hover:underline font-medium'>
									Fundraising Moments
								</a>
							</div>
							<div className='flex items-center gap-3'>
								<FaCheck className=' w-5 h-5 flex-shrink-0' />
								<a
									href='#'
									className=' hover:underline font-medium'>
									Fundraising Resources
								</a>
							</div>
							<div className='flex items-center gap-3'>
								<FaCheck className=' w-5 h-5 flex-shrink-0' />
								<a
									href='#'
									className=' hover:underline font-medium'>
									Fundraising Terms
								</a>
							</div>
						</div>
					</div>

					{/* Right Card */}
					<div className='bg-white text-[#003A48] rounded-lg p-8 shadow-lg'>
						<h2 className='text-2xl font-bold mb-6 '>Have questions?</h2>
						<p className='text-gray-600 mb-6'>
							Please reach out using the link below and a member of our team
							will get back to you as soon as possible. You can also email us
							directly at:
						</p>

						<div className='mb-6'>
							<a
								href='mailto:development@thetrevorproject.org'
								className=' hover:underline font-medium'>
								development@thetrevorproject.org
							</a>
						</div>

						<button className='bg-[#003A48] text-white px-6 py-3 rounded-lg font-medium transition-colors'>
							Reach Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
