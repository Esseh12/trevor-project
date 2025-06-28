import img1 from '../../assets/TrevorVolunteer_4-scaled.jpg';
import img2 from '../../assets/TrevorVolunteer_1-scaled.jpg';

const MainCrisis = () => {
	return (
		<>
			{/* Title Section */}
			<section className='mt-6 px-4'>
				<div className='h-96 md:min-h-screen flex flex-col justify-center items-center text-center max-w-[800px] mx-auto'>
					<h1 className='text-[#101066] text-[32px] md:text-[46px] leading-snug md:leading-14 font-bold mb-4'>
						How we channel passion into protocol.
					</h1>
					<p className='text-[18px] md:text-[26px] leading-7 md:leading-9 text-[#101066]'>
						We prepare counselors to navigate a variety of situations that may
						come up on our crisis services through instruction that explores how
						to embody our Counselor Values, follow Counselor Principles, and
						apply Counseling Skills.
					</p>
				</div>
			</section>

			{/* Info Blocks */}
			<section className=' pt-0 px-4 space-y-20'>
				{/* Block 1: image left on desktop */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20'>
					<img
						src={img1}
						alt='supportive adult'
						className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg'
					/>
					<div className='text-left'>
						<h2 className='text-[#101066] text-xl md:text-[32px] font-semibold leading-snug max-w-xl'>
							Prepared and Empathetic Crisis Counselors
						</h2>
						<p className='text-base md:text-[22px] font-medium leading-7 md:leading-8 text-[#101066] mt-3 max-w-xl'>
							All of our counselors are trained to support LGBTQ+ young people
							nationwide who reach out to our service, whether they need a
							non-judgmental place to talk, are experiencing a crisis, or
							feeling suicidal. Throughout training, counselors will cover
							topics including counseling skills, LGBTQ+ identity, the Trevor
							Support Model, and relevant procedures to prepare them.
						</p>
					</div>
				</div>

				{/* Block 2: text left on desktop (reverse order) */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20'>
					<img
						src={img2}
						alt='support example'
						className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg'
					/>
					<div>
						<h2 className='text-[#101066] text-xl md:text-[32px] font-semibold leading-snug max-w-xl text-left'>
							Role-play, shadowing, and supervised shifts.
						</h2>
						<p className='text-base md:text-[22px] font-medium leading-7 md:leading-8 text-[#101066] mt-3 max-w-xl'>
							Trainees and counselors work closely with our team and have access
							to role-play scenarios, supervised support shifts, and one-on-one
							office hours to apply their skills in a supportive environment.
						</p>
					</div>
				</div>

				{/* Block 3: image left on desktop */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20'>
					<img
						src={img1}
						alt='support another'
						className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg'
					/>
					<div>
						<h2 className='text-[#101066] text-xl md:text-[32px] font-semibold leading-snug max-w-xl text-left'>
							Instilling proficiency in chat/text/call software.
						</h2>
						<p className='text-base md:text-[22px] font-medium leading-7 md:leading-8 text-[#101066] mt-3 max-w-xl'>
							Counselors utilize our best-in-class technology to support youth
							in crisis efficiently and safely.
						</p>
					</div>
				</div>
			</section>

			{/* Call-to-Action */}
			<div className='flex items-center justify-center px-4 mb-12 mt-6 md:mt-12'>
				<button className='text-sm md:text-base font-bold text-white leading-5 bg-[#003a48] px-6 py-3 rounded-lg'>
					Explore Crisis Services
				</button>
			</div>
		</>
	);
};

export default MainCrisis;
