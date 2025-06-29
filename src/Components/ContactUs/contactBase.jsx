const ContactBase = () => {
	return (
		<div className='w-full max-w-6xl mx-auto px-4'>
			{/* Cards Container */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Volunteer Card */}
				<div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-600 via-teal-700 to-yellow-400 p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
					<div className='space-y-6 text-center'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							Your donation will
							<br />
							<span className='caveat text-[70px]'>save lives.</span>
						</h3>

						<p className='text-lg md:text-xl leading-[34px] opacity-95'>
							Every day, LGBTQ+ young people reach out for mental health
							support. When you donate to Trevor, you ensure our volunteers can
							continue to be there for them.
						</p>
					</div>

					<button className='bg-white text-[#003A48] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
						Donate Now
					</button>
				</div>

				{/* Donation Card */}
				<div className='relative overflow-hidden rounded-xl bg-[linear-gradient(to_bottom,_#ffe1ce,_#f3d0dd,_#d9c5eb,_#f3b197)] p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
					<div className='space-y-6 text-center text-[#101066]'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							We’re here
							<br />
							<span className='caveat text-[70px]'>for you.</span>
						</h3>
						{/*bg-gradient-to-br from-teal-600 via-teal-700 to-yellow-400  */}
						<p className='text-lg md:text-xl leading-[34px] opacity-95'>
							If you ever need immediate help or support — you aren’t alone.
							Call, text, or chat with a trained counselor 24/7, all year round.
							For free.
						</p>
					</div>

					<button className='bg-[#FF5A3D] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
						Reach a Counselor
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactBase;
