const Bluebg = ({
	title = 'Our Culture',
	text = `The Trevor Project believes that an inclusive culture is important
  for the organization to achieve its mission of ending LGBTQ+ youth
  suicide. We aspire to be a team where our staff, and their varied
  lived experiences, are treated with respect and are empowered to
  bring their best selves to work every day.`,
	backgroundColor = '#f3f3f7',
}) => {
	return (
		<section className='flex items-center justify-center min-h-screen px-4 py-16'>
			<div
				className='rounded-lg w-full max-w-5xl flex flex-col gap-6 items-center justify-center text-center px-6 py-12'
				style={{ backgroundColor }}>
				<h1 className='text-[28px] md:text-[40px] font-semibold leading-tight'>
					{title}
				</h1>
				<p className='text-base md:text-xl leading-relaxed text-[#003A48] max-w-2xl'>
					{text}
				</p>
			</div>
		</section>
	);
};

export default Bluebg;
