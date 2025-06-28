const Contact = () => {
	return (
		<section className='bg-[#005e67] py-20 px-4 text-center'>
			<div className='max-w-2xl mx-auto text-white flex flex-col gap-6'>
				<h1 className='text-[28px] md:text-[38px] font-semibold leading-tight'>
					Contact Us
				</h1>
				<p className='text-base md:text-lg leading-relaxed'>
					For any press-related inquiries, reach out to The Trevor Project’s
					communications team.
				</p>
				<div className='mx-auto flex items-center justify-center flex-col gap-5'>
					<button className='text-base md:text-lg font-bold text-[#003a48] bg-white py-3 px-6 rounded-lg'>
						Contact The Team
					</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
