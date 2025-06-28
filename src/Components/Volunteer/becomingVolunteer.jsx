import { Link } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';

const BecomingVolunteer = () => {
	return (
		<>
			<section className='bg-[#003a48] min-h-screen py-24 md:py-28 mt-8 flex justify-center text-white'>
				<div className='max-w-7xl mx-auto px-8 md:px-4'>
					{/* Top content */}
					<div className='max-w-4xl mx-auto text-center mb-16'>
						<h1 className='font-bold text-3xl md:text-[46px] leading-tight'>
							Becoming a Volunteer Crisis Counselor for The Trevor Project.
						</h1>
						<div className='max-w-3xl mx-auto mt-4'>
							<p className='text-lg md:text-2xl leading-relaxed mb-4'>
								As a trained Trevor counselor, you'll support LGBTQ+ young
								people remotely either by phone or text & chat.
							</p>
							<p className='text-lg md:text-2xl leading-relaxed'>
								Interested in learning all about the Volunteer Crisis Counselor
								Role? The{' '}
								<span className='underline underline-offset-8 hover:opacity-80 cursor-pointer'>
									Volunteer Crisis Counselor Applicant Hub
								</span>{' '}
								has more information about the volunteer program, important
								counselor requirements, and application instructions.
							</p>
						</div>
					</div>

					{/* Bottom section - Two column layout */}
					<div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-[#003A48]'>
						{/* Left column - Requirements */}
						<div className='bg-white rounded-lg p-10'>
							<h2 className='text-[30px] font-semibold mb-3 leading-10'>
								Volunteering requirements
							</h2>
							<p className='mb-5 text-lg leading-[26px]'>
								You don't need a degree or a license to become a trained Trevor
								counselor, but the role does require passion and commitment.
								We're looking for volunteers who...
							</p>
							<div className='space-y-4'>
								{[
									'Have a passion for supporting LGBTQ+ young people',
									'Are 18+ years old',
									'Are located in the United States',
									'Can make a minimum one-year commitment after graduating from volunteer training, with one 3-hour shift per week',
									'Meet our technology requirements and are comfortable using a variety of technology platforms',
									'Are open to new experiences and receiving feedback',
									'Have access to a private space for remote volunteering',
								].map((requirement, index) => (
									<div
										key={index}
										className='flex items-start gap-3'>
										<AiOutlineCheck className='w-5 h-5 text-[#003A48] mt-0.5 flex-shrink-0' />
										<span className='text-lg font-medium leading-6.5'>
											{requirement}
										</span>
									</div>
								))}
							</div>
							<button className='mt-6 font-semibold text-xl leading-6.5 underline underline-offset-6 hover:decoration-wavy'>
								See Details
							</button>
						</div>

						{/* Right column - Interest section */}
						<div className='bg-white rounded-lg p-10'>
							<h2 className='text-3xl font-semibold leading-10 mb-3'>
								Interested in volunteering?
							</h2>
							<p className='mb-5 text-lg leading-6.5'>
								Thank you for your interest in becoming a Volunteer Crisis
								Counselor with The Trevor Project! We are excited that you are
								interested in supporting our mission to end suicide among LGBTQ+
								young people.
							</p>
							<div className='p-4 rounded-lg mb-6'>
								<p className='text-lg leading-6.5'>
									At this time, we have an incredibly high volume of
									applications already on file, and we do not currently have
									upcoming Volunteer Crisis Counseling training cohorts on the
									schedule. Therefore,{' '}
									<strong className='font-semibold'>
										our general Volunteer Crisis Counselor application is
										currently unavailable and will remain closed for the
										foreseeable future.
									</strong>{' '}
									We do not have a definitive timeline for when we will be ready
									to receive new applications yet.
								</p>
							</div>
							<p className='mb-6 text-lg leading-6.5'>
								We invite you to{' '}
								<Link
									to='#'
									className='underline underline-offset-4'>
									support The Trevor Project in other ways
								</Link>
								!
							</p>
							<div className='space-y-3'>
								{[
									{ text: "Sign up for Trevor's email newsletter", link: '#' },
									{
										text: 'Make a one-time gift or recurring contribution, or organize a community fundraiser',
										link: '#',
									},
									{ text: 'Join the Trevor Advocacy list', link: '#' },
									{
										text: "Attend a training session through Trevor's Public Education programs",
										link: '#',
									},
								].map((item, index) => (
									<div
										key={index}
										className='flex items-start gap-3'>
										<AiOutlineCheck className='w-5 h-5 text-[#003A48] mt-0.5 flex-shrink-0' />
										<Link
											to={item.link}
											className='text-lg font-semibold leading-6.5  underline'>
											{item.text}
										</Link>
									</div>
								))}
							</div>
							<div className='mt-6 pt-6 border-t border-gray-200'>
								<p className='text-lg leading-6.5 mb-4'>
									If you are a university student looking to complete a
									practicum as a volunteer Crisis Counselor for credit for your
									academic program, please complete our{' '}
									<Link
										to='#'
										className='underline'>
										Contact Us
									</Link>{' '}
									form and select "University Practicum" for instructions and
									next steps.
								</p>
								<p className='text-lg leading-6.5 mb-4'>
									All other questions about volunteering can be directed to the
									Volunteer Operations team by completing the{' '}
									<Link
										to='#'
										className='underline'>
										Contact Us
									</Link>{' '}
									form and selecting "Volunteering as a Crisis Counselor."
								</p>
							</div>
						</div>
					</div>

					{/* Bottom CTA */}
					<div className='text-center mt-12'>
						<button className='bg-white text-[#003a48] px-8 py-3 rounded-lg hover:opacity-85 transition-colors text-sm sm:text-base md:text-xl font-semibold leading-5'>
							Visit the Volunteer Crisis Counselor Applicant Hub
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default BecomingVolunteer;
