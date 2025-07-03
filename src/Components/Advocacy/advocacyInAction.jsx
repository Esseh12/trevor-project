import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from './customArrows';
import img1 from '../../assets/Wolf-EO-with-staff.jpg';
import img2 from '../../assets/Wolf-signing-medium.jpg';
import img3 from '../../assets/Finke.jpg';

const AdvocacyInAction = () => {
	const advocacyImages = [
		{
			id: 1,
			src: img1,
			alt: 'Government officials meeting',
			caption:
				'The Trevor Project staff with Pennsylvania Governor Tom Wolf after he signed Executive Order 2002-02, Protecting Pennsylvanians from Conversion Therapy and Supporting LGBTQIA+ Pennsylvanians (August 16, 2022). From left to right: State Representative Malcolm Kenyatta; Casey Pick, Director of Law & Policy for The Trevor Project; PA Governor Wolf; Troy Stevenson, Former Director of State Advocacy',
		},
		{
			id: 2,
			src: img2,
			alt: 'Bill signing ceremony',
			caption:
				'Pennsylvania Governor Tom Wolf signing Executive Order 2002-02, Protecting Pennsylvanians from Conversion Therapy and Supporting LGBTQIA+ Pennsylvanians (August 16, 2022).',
		},
		{
			id: 3,
			src: img3,
			alt: 'State representatives with pride flags',
			caption:
				'The Trevor Project staff with Minnesota State Representative Leigh Finke after Governor Tim Walz signed three bills into law protecting people seeking or providing abortions in Minnesota, banning the practice of conversion therapy, and protecting people seeking or providing gender-affirming health care in Minnesota (April 27, 2023). From left to right: Troy Stevenson, Former Director of State Advocacy',
		},
	];

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='bg-white min-h-screen mt-12 py-24'>
			{/* Main Content */}
			<div className='py-12'>
				{/* Title Section */}
				<div className='text-center mb-12 max-w-7xl mx-auto'>
					<h1 className='text-4xl font-bold text-[#101066] mb-4 leading-12'>
						LGBTQ+ Advocacy in Action
					</h1>
				</div>

				{/* Image Gallery Slider */}
				<div className='relative px-16  max-w-6xl ml-auto'>
					<Slider
						{...sliderSettings}
						className='advocacy-slider'>
						{advocacyImages.map((image) => (
							<div
								key={image.id}
								className='px-4'>
								<div className='bg-white rounded-lg  overflow-hidden'>
									<div className='relative'>
										<img
											src={image.src}
											alt={image.alt}
											className='w-full h-64 md:h-80 object-cover'
										/>
									</div>
									<div className='p-6'>
										<p className='text-gray-600 text-sm leading-relaxed'>
											{image.caption}
										</p>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>

			<style jsx>{`
				.advocacy-slider .slick-dots {
					bottom: -50px;
				}

				.advocacy-slider .slick-dots li {
					margin: 0 5px;
				}

				.advocacy-slider .slick-dots li button:before {
					font-size: 16px;
					color: #d1d5db;
				}

				.advocacy-slider .slick-dots li.slick-active button:before {
					color: #003a48;
				}

				.advocacy-slider .slick-slide {
					padding: 0 8px;
				}

				.advocacy-slider .slick-list {
					margin: 0 -8px;
				}
			`}</style>
		</div>
	);
};

export default AdvocacyInAction;
