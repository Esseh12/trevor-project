const Hero = ({
	title = 'Make a',
	highlight = 'difference.',
	subText = null,
	buttonText = null,
	buttonProps = {},
	image = null,
	imageSize = 'medium', // 'small', 'medium', 'large', 'full'
	backgroundColor = '#003a48',
	textColor = 'white',
	buttonColor = 'white',
	buttonTextColor = '#003A48',
	className = '',
	minHeight = 'min-h-screen',
	spacing = 'gap-10',
	titleClassName = '',
	highlightClassName = '',
	subTextClassName = '',
	buttonClassName = '',
	imageClassName = '',
	onButtonClick = null,
}) => {
	// Image size configurations
	const imageSizeClasses = {
		small: 'h-16 md:h-20',
		medium: 'h-20 md:h-24',
		large: 'h-32 md:h-40',
		full: 'h-64 md:h-80',
	};

	// Handle button click
	const handleButtonClick = (e) => {
		if (onButtonClick) {
			onButtonClick(e);
		}
	};

	return (
		<div
			className={`${minHeight} flex items-center   justify-center flex-col px-4 ${className}`}
			style={{ backgroundColor }}>
			{/* text and button */}
			<div
				className={`flex items-center justify-center flex-col ${spacing} text-center`}>
				<div className='flex flex-col items-center gap-4'>
					<h1
						className={`md:max-w-3xl md:mx-auto font-bold text-[40px] md:text-[56px] leading-[48px] md:leading-[66px] ${titleClassName}`}
						style={{ color: textColor }}>
						{title}{' '}
						<span
							className={`caveat text-[56px] md:text-[82px] leading-[64px] md:leading-[92px] ${highlightClassName}`}>
							{highlight}
						</span>
					</h1>

					{/* Sub text */}
					{subText && (
						<p
							className={`md:max-w-3xl md:mx-auto  text-base md:text-2xl leading-9 max-w-2xl opacity-90 ${subTextClassName}`}
							style={{ color: textColor }}>
							{subText}
						</p>
					)}
				</div>

				{/* Button */}
				{buttonText && (
					<button
						className={`text-lg md:text-xl leading-6.5 font-bold rounded-xl px-6 py-4 transition-all duration-200 hover:opacity-90 hover:scale-105 ${buttonClassName}`}
						style={{
							backgroundColor: buttonColor,
							color: buttonTextColor,
						}}
						onClick={handleButtonClick}
						{...buttonProps}>
						{buttonText}
					</button>
				)}
			</div>

			{/* image */}
			{image && (
				<div
					className={`mt-8 ${imageSizeClasses[imageSize]} w-full max-w-[950px] relative z-10 ${imageClassName}`}>
					<img
						src={image}
						alt='hero'
						className='scale-y-[85%] rounded-xl w-full object-contain'
					/>
				</div>
			)}
		</div>
	);
};
export default Hero;
