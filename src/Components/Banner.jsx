const Banner = ({
	title,
	description,
	button,
	bgColor = 'bg-[#003a48]',
	textColor = 'text-white',
	minHeight = 'min-h-screen',
	className = '',
}) => {
	return (
		<div
			className={`${bgColor} ${minHeight} flex items-center justify-center px-6 py-12 ${className}`}>
			<div className='max-w-3xl mx-auto text-center'>
				{title && (
					<h1
						className={`text-4xl md:text-[46px] font-bold mb-8 leading-14 ${textColor}`}>
						{title}
					</h1>
				)}

				{description && (
					<p
						className={`text-lg md:text-xl lg:text-2xl mb-10 leading-9 max-w-2xl mx-auto ${textColor} opacity-90`}>
						{description}
					</p>
				)}

				{button && <div className='flex justify-center'>{button}</div>}
			</div>
		</div>
	);
};

export default Banner;
