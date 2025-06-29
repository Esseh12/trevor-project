const OtherKindOfSupport = () => {
	return (
		<div className='w-full max-w-6xl mx-auto px-4 py-12'>
			{/* Main Heading */}
			<div>
				<h2 className='text-4xl md:text-[46px] font-bold text-center text-[#101066] leading-14 mb-3'>
					Looking for another kind of support?
				</h2>
				<p className='mb-12 lg:mb-16 text-[#101066] text-[26px] leading-9 text-center max-w-3xl mx-auto'>
					Explore answers and information across a variety of topics, or connect
					to one of our trained counselors to receive immediate support.
				</p>
			</div>

			{/* Cards Container */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Volunteer Card */}
				<div className='relative overflow-hidden rounded-xl bg-[linear-gradient(to_right,_#ffddcb,_#f2aeaa,_#dcc0e0)]  p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
					<div className='space-y-6 text-center text-[#101066]'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							We’re here
							<br />
							<span className='caveat text-[70px]'>for you.</span>
						</h3>

						<p className='text-lg md:text-xl leading-[34px] font-semibold'>
							If you ever need immediate help or support — you aren’t alone.
							Call, text, or chat with a trained counselor 24/7, all year round.
							For free
						</p>
					</div>

					<button className='bg-[#ff5a3d] text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
						Reach a Counsellor
					</button>
				</div>

				{/* Donation Card */}
				<div className='relative overflow-hidden rounded-xl bg-[#6d5fff] p-8 text-white min-h-[400px] flex flex-col justify-center items-center md:min-h-[600px]'>
					<div className='space-y-6 text-center'>
						<h3 className='text-3xl md:text-5xl font-bold leading-tight'>
							Get answers for
							<br />
							<span className='caveat text-[70px]'>everything LGBTQ</span>
						</h3>
						{/*bg-gradient-to-br from-teal-600 via-teal-700 to-yellow-400  */}
						<p className='text-lg md:text-xl leading-[34px] opacity-95'>
							Is there something you want to learn more about? Find topics
							you’re interested in here.
						</p>
					</div>

					<button className='bg-white text-[#003A48] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start mt-6 mx-auto text-xl'>
						Get Answers
					</button>
				</div>
			</div>
		</div>
	);
};

export default OtherKindOfSupport;
